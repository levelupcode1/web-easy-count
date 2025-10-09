# Lesson 05: Vite 환경 + 할인율/부가세 계산기

## 🎯 학습 목표
- Node.js와 pnpm 이해하기
- Vite 빌드 도구 활용하기
- ES6 모듈 시스템 (import/export) 익히기
- 코드를 모듈로 구조화하기
- 개발 서버와 빌드 프로세스 경험하기

## 📚 배울 내용
1. Node.js는 왜 필요한가?
2. pnpm 패키지 매니저
3. package.json의 역할
4. Vite의 장점과 사용법
5. ES6 모듈 (import/export)
6. HMR (Hot Module Replacement)

## 🚀 실습 프롬프트

```
lesson-05 폴더에 Vite 기반 프로젝트를 만들고 할인율/부가세 계산기를 추가하세요.

요구사항:

1. 프로젝트 초기화
   ```bash
   cd lesson-05
   pnpm init
   ```
   
   package.json에 다음 내용 추가:
   ```json
   {
     "name": "easy-count-lesson-05",
     "version": "1.0.0",
     "type": "module",
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "preview": "vite preview"
     },
     "devDependencies": {
       "vite": "^5.0.0"
     }
   }
   ```
   
   Vite 설치:
   ```bash
   pnpm install
   ```

2. 프로젝트 구조
   lesson-05/
     ├── package.json
     ├── index.html
     ├── src/
     │   ├── main.js          (진입점)
     │   ├── styles/
     │   │   └── main.css
     │   ├── modules/
     │   │   ├── discount.js  (할인율 계산 모듈)
     │   │   └── vat.js       (부가세 계산 모듈)
     │   ├── utils/
     │   │   └── format.js    (공통 유틸리티)
     │   └── ui/
     │       └── display.js   (UI 업데이트)
     └── README.md

3. HTML 파일 (index.html)
   - Vite는 루트의 index.html을 진입점으로 사용
   
   ```html
   <!DOCTYPE html>
   <html lang="ko">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Easy Count - 쇼핑 계산기</title>
     <link rel="stylesheet" href="/src/styles/main.css">
   </head>
   <body>
     <header>
       <h1>🛍️ Easy Count - 쇼핑 계산기</h1>
       <p>할인율과 부가세를 간편하게 계산하세요</p>
     </header>
     
     <main class="container">
       <!-- 할인율 계산기 -->
       <section class="card">
         <h2>🏷️ 할인율 계산기</h2>
         <div class="input-group">
           <label>원가</label>
           <input type="number" id="originalPrice" placeholder="100000">
           <span>원</span>
         </div>
         <div class="input-group">
           <label>할인율</label>
           <input type="number" id="discountRate" placeholder="30" min="0" max="100">
           <span>%</span>
         </div>
         <button id="discountBtn">계산하기</button>
         <div id="discountResult"></div>
       </section>
       
       <!-- 부가세 계산기 -->
       <section class="card">
         <h2>🧾 부가세 계산기</h2>
         <div class="input-group">
           <label>금액</label>
           <input type="number" id="amount" placeholder="100000">
           <span>원</span>
         </div>
         <div class="radio-group">
           <label>
             <input type="radio" name="vatType" value="exclude" checked>
             공급가액 (부가세 별도)
           </label>
           <label>
             <input type="radio" name="vatType" value="include">
             부가세 포함 금액
           </label>
         </div>
         <button id="vatBtn">계산하기</button>
         <div id="vatResult"></div>
       </section>
     </main>
     
     <footer>
       <p>© 2025 Easy Count</p>
     </footer>
     
     <!-- Vite는 type="module"을 자동 처리 -->
     <script type="module" src="/src/main.js"></script>
   </body>
   </html>
   ```

4. 할인율 계산 모듈 (src/modules/discount.js)
   ```javascript
   /**
    * 할인율 계산 모듈
    * 원가와 할인율을 받아 할인가를 계산합니다
    */
   
   export function calculateDiscount(originalPrice, discountRate) {
     // 입력값 검증
     if (!originalPrice || originalPrice <= 0) {
       throw new Error('원가는 0보다 커야 합니다');
     }
     
     if (discountRate < 0 || discountRate > 100) {
       throw new Error('할인율은 0~100 사이여야 합니다');
     }
     
     // 할인 금액 계산
     const discountAmount = Math.floor(originalPrice * (discountRate / 100));
     
     // 최종 가격 계산
     const finalPrice = originalPrice - discountAmount;
     
     // 절약 비율
     const savedPercentage = discountRate;
     
     return {
       originalPrice,
       discountRate,
       discountAmount,
       finalPrice,
       savedPercentage,
       savedAmount: discountAmount
     };
   }
   
   // 역산: 할인가로 원가 계산
   export function calculateOriginalPrice(finalPrice, discountRate) {
     if (discountRate === 100) {
       throw new Error('100% 할인은 역산할 수 없습니다');
     }
     
     const originalPrice = Math.ceil(finalPrice / (1 - discountRate / 100));
     return originalPrice;
   }
   ```

5. 부가세 계산 모듈 (src/modules/vat.js)
   ```javascript
   /**
    * 부가세 계산 모듈
    * 한국 부가세율 10% 적용
    */
   
   const VAT_RATE = 0.1; // 10%
   
   export function calculateVAT(amount, includesVAT = false) {
     if (!amount || amount <= 0) {
       throw new Error('금액은 0보다 커야 합니다');
     }
     
     if (includesVAT) {
       // 부가세 포함 금액 → 공급가액, 부가세 분리
       const supplyAmount = Math.floor(amount / 1.1);
       const vatAmount = amount - supplyAmount;
       
       return {
         type: '부가세 포함',
         totalAmount: amount,
         supplyAmount,
         vatAmount,
         vatRate: VAT_RATE
       };
     } else {
       // 공급가액 → 부가세, 총액 계산
       const supplyAmount = amount;
       const vatAmount = Math.floor(amount * VAT_RATE);
       const totalAmount = supplyAmount + vatAmount;
       
       return {
         type: '공급가액',
         supplyAmount,
         vatAmount,
         totalAmount,
         vatRate: VAT_RATE
       };
     }
   }
   
   // 부가세만 계산
   export function getVATOnly(supplyAmount) {
     return Math.floor(supplyAmount * VAT_RATE);
   }
   
   // 공급가액만 계산 (부가세 포함 금액에서)
   export function getSupplyAmountOnly(totalAmount) {
     return Math.floor(totalAmount / 1.1);
   }
   ```

6. 포맷팅 유틸리티 (src/utils/format.js)
   ```javascript
   /**
    * 숫자 포맷팅 유틸리티
    */
   
   export function formatNumber(num) {
     if (typeof num !== 'number' || isNaN(num)) {
       return '0';
     }
     return num.toLocaleString('ko-KR');
   }
   
   export function formatCurrency(num) {
     return `${formatNumber(num)}원`;
   }
   
   export function formatPercentage(num) {
     return `${num}%`;
   }
   ```

7. UI 업데이트 모듈 (src/ui/display.js)
   ```javascript
   /**
    * UI 업데이트 담당 모듈
    */
   
   import { formatCurrency, formatPercentage } from '../utils/format.js';
   
   export function displayDiscountResult(result) {
     const resultDiv = document.getElementById('discountResult');
     
     resultDiv.innerHTML = `
       <div class="result-box">
         <h4>📊 계산 결과</h4>
         <div class="result-item">
           <span>원가</span>
           <span>${formatCurrency(result.originalPrice)}</span>
         </div>
         <div class="result-item discount">
           <span>할인 금액 (${formatPercentage(result.discountRate)})</span>
           <span>-${formatCurrency(result.discountAmount)}</span>
         </div>
         <div class="result-item final">
           <span>최종 가격</span>
           <span>${formatCurrency(result.finalPrice)}</span>
         </div>
         <div class="savings">
           🎉 ${formatCurrency(result.savedAmount)} 절약!
         </div>
       </div>
     `;
   }
   
   export function displayVATResult(result) {
     const resultDiv = document.getElementById('vatResult');
     
     resultDiv.innerHTML = `
       <div class="result-box">
         <h4>📊 계산 결과 (${result.type})</h4>
         <div class="result-item">
           <span>공급가액</span>
           <span>${formatCurrency(result.supplyAmount)}</span>
         </div>
         <div class="result-item vat">
           <span>부가세 (${formatPercentage(result.vatRate * 100)})</span>
           <span>${formatCurrency(result.vatAmount)}</span>
         </div>
         <div class="result-item final">
           <span>총 금액</span>
           <span>${formatCurrency(result.totalAmount)}</span>
         </div>
       </div>
     `;
   }
   
   export function showError(elementId, message) {
     const element = document.getElementById(elementId);
     element.innerHTML = `
       <div class="error-message">
         ⚠️ ${message}
       </div>
     `;
   }
   ```

8. 메인 진입점 (src/main.js)
   ```javascript
   /**
    * 메인 진입점
    * 모든 모듈을 import하고 이벤트 리스너 등록
    */
   
   // 모듈 import
   import { calculateDiscount } from './modules/discount.js';
   import { calculateVAT } from './modules/vat.js';
   import { displayDiscountResult, displayVATResult, showError } from './ui/display.js';
   import './styles/main.css'; // CSS도 import 가능!
   
   console.log('🚀 Easy Count 애플리케이션 시작!');
   
   // 할인율 계산기 이벤트
   document.getElementById('discountBtn').addEventListener('click', () => {
     try {
       const originalPrice = parseInt(document.getElementById('originalPrice').value);
       const discountRate = parseInt(document.getElementById('discountRate').value);
       
       const result = calculateDiscount(originalPrice, discountRate);
       displayDiscountResult(result);
     } catch (error) {
       showError('discountResult', error.message);
     }
   });
   
   // 부가세 계산기 이벤트
   document.getElementById('vatBtn').addEventListener('click', () => {
     try {
       const amount = parseInt(document.getElementById('amount').value);
       const vatType = document.querySelector('input[name="vatType"]:checked').value;
       const includesVAT = vatType === 'include';
       
       const result = calculateVAT(amount, includesVAT);
       displayVATResult(result);
     } catch (error) {
       showError('vatResult', error.message);
     }
   });
   
   // HMR (Hot Module Replacement) - 개발 중 자동 새로고침
   if (import.meta.hot) {
     import.meta.hot.accept();
   }
   ```

9. CSS (src/styles/main.css)
   - Lesson 03-04의 스타일 유지
   - 추가 스타일:
   
   ```css
   .result-item.discount {
     color: #EF4444;
   }
   
   .result-item.vat {
     color: #F59E0B;
   }
   
   .result-item.final {
     font-size: 20px;
     font-weight: 700;
     padding: 15px;
     background: var(--secondary-color);
     border-radius: 8px;
     margin-top: 10px;
   }
   
   .savings {
     margin-top: 15px;
     padding: 12px;
     background: #10B981;
     color: white;
     border-radius: 8px;
     text-align: center;
     font-weight: 600;
   }
   
   .error-message {
     padding: 15px;
     background: #FEE2E2;
     color: #991B1B;
     border-radius: 8px;
     border-left: 4px solid #EF4444;
   }
   
   .radio-group {
     margin: 15px 0;
   }
   
   .radio-group label {
     display: block;
     margin: 10px 0;
     cursor: pointer;
   }
   
   .radio-group input[type="radio"] {
     margin-right: 8px;
   }
   ```

10. README.md
    ```markdown
    # Lesson 05: Vite + 쇼핑 계산기
    
    ## 실행 방법
    
    1. 의존성 설치
    \`\`\`bash
    pnpm install
    \`\`\`
    
    2. 개발 서버 실행
    \`\`\`bash
    pnpm dev
    \`\`\`
    
    브라우저에서 http://localhost:5173 열기
    
    3. 프로덕션 빌드
    \`\`\`bash
    pnpm build
    \`\`\`
    
    ## 기능
    
    ### 할인율 계산기
    - 원가와 할인율 입력
    - 할인 금액과 최종 가격 계산
    - 절약 금액 표시
    
    ### 부가세 계산기
    - 공급가액 → 부가세 포함 금액
    - 부가세 포함 금액 → 공급가액
    
    ## 모듈 구조
    
    - `modules/`: 계산 로직
    - `ui/`: UI 업데이트
    - `utils/`: 공통 유틸리티
    - `styles/`: CSS
    ```

실행:
```bash
cd lesson-05
pnpm install
pnpm dev
```

브라우저가 자동으로 열리고 http://localhost:5173 접속!
코드 수정하면 자동으로 새로고침됨 (HMR)
```

## ✅ 완성 확인 사항

- [ ] pnpm install이 정상 실행되는가?
- [ ] pnpm dev로 개발 서버가 실행되는가?
- [ ] import/export가 정상 작동하는가?
- [ ] 코드 수정 시 자동 새로고침되는가? (HMR)
- [ ] 할인율 계산이 정확한가?
- [ ] 부가세 계산이 정확한가?
- [ ] 에러 처리가 작동하는가?

## 🔍 모듈 시스템 이해하기

### export (내보내기)
```javascript
// discount.js
export function calculateDiscount() { ... }  // named export
export default function() { ... }            // default export
```

### import (가져오기)
```javascript
// main.js
import { calculateDiscount } from './modules/discount.js';  // named import
import calculate from './modules/discount.js';              // default import
```

## 🚀 Vite의 장점

1. **빠른 개발 서버**
   - 번들링 없이 바로 실행
   - 변경사항 즉시 반영

2. **HMR (Hot Module Replacement)**
   - 전체 새로고침 없이 모듈만 교체
   - 상태 유지

3. **최적화된 빌드**
   - Rollup 기반
   - 코드 스플리팅 자동

## 💡 추가 도전 과제

### 레벨 1
- [ ] 여러 상품 한번에 계산하기
- [ ] 계산 기록 localStorage에 저장

### 레벨 2
- [ ] 여러 할인 중복 적용 (쿠폰 + 회원할인)
- [ ] 배송비 계산 추가

### 레벨 3
- [ ] 영수증 형태로 출력
- [ ] 이미지로 저장 기능

## ⏭️ 다음 단계
Lesson 06에서는 Next.js로 전환하여 모든 계산기를 통합하고 프로페셔널한 웹 애플리케이션을 만듭니다!

