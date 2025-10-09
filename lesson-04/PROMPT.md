# Lesson 04: 연봉 실수령액 계산기 만들기

## 🎯 학습 목표
- 복잡한 수학 계산 로직 구현하기
- 4대보험 및 세금 계산 이해하기
- HTML 표(table)로 데이터 시각화하기
- 입력값 유효성 검증하기
- 숫자 포맷팅 (천단위 콤마)

## 📚 배울 내용
1. 한국의 4대보험 제도
2. 소득세 누진세율 구조
3. 복잡한 계산 로직 구현
4. HTML 테이블 활용
5. 숫자 포맷팅 (toLocaleString())
6. 입력 유효성 검증

## 🚀 실습 프롬프트

```
lesson-04 폴더에 연봉 실수령액 계산기를 만들어주세요.

요구사항:

1. HTML 파일 (index.html)
   - 제목: "💰 연봉 실수령액 계산기"
   - 부제: "2025년 최신 세율 적용"
   
   입력 영역:
   - 연봉 입력 필드:
     * <label>연봉 (세전)</label>
     * <input type="number" id="annualSalary" placeholder="50000000">
     * <span>원</span>
   - 부양가족 수:
     * <label>부양가족 수 (본인 포함)</label>
     * <input type="number" id="dependents" value="1" min="1">
   
   버튼:
   - <button id="calculateBtn">실수령액 계산하기</button>
   
   결과 영역:
   - <div id="result"></div>

2. JavaScript 파일 (salary.js)
   
   a) 4대보험 계산 함수:
   ```javascript
   function calculateInsurance(monthlySalary) {
     // 2025년 기준 요율
     const rates = {
       nationalPension: 0.045,      // 국민연금 4.5%
       healthInsurance: 0.03545,    // 건강보험 3.545%
       longTermCare: 0.1295,        // 장기요양 (건강보험의 12.95%)
       employmentInsurance: 0.009   // 고용보험 0.9%
     };
     
     const nationalPension = Math.floor(monthlySalary * rates.nationalPension);
     const healthInsurance = Math.floor(monthlySalary * rates.healthInsurance);
     const longTermCare = Math.floor(healthInsurance * rates.longTermCare);
     const employmentInsurance = Math.floor(monthlySalary * rates.employmentInsurance);
     
     return {
       nationalPension,
       healthInsurance,
       longTermCare,
       employmentInsurance,
       total: nationalPension + healthInsurance + longTermCare + employmentInsurance
     };
   }
   ```
   
   b) 소득세 계산 함수 (간이세액표):
   ```javascript
   function calculateIncomeTax(monthlySalary, dependents) {
     // 2025년 간이세액표 기준
     // 부양가족 수에 따라 공제액 차이
     
     let tax = 0;
     const yearlyIncome = monthlySalary * 12;
     
     // 누진세율 적용
     if (yearlyIncome <= 14000000) {
       tax = yearlyIncome * 0.06;
     } else if (yearlyIncome <= 50000000) {
       tax = 840000 + (yearlyIncome - 14000000) * 0.15;
     } else if (yearlyIncome <= 88000000) {
       tax = 6240000 + (yearlyIncome - 50000000) * 0.24;
     } else if (yearlyIncome <= 150000000) {
       tax = 15360000 + (yearlyIncome - 88000000) * 0.35;
     } else {
       tax = 37060000 + (yearlyIncome - 150000000) * 0.38;
     }
     
     // 부양가족 공제 (간소화)
     const deduction = (dependents - 1) * 150000 * 12;
     tax = Math.max(0, tax - deduction);
     
     const monthlyTax = Math.floor(tax / 12);
     const localTax = Math.floor(monthlyTax * 0.1); // 지방소득세 10%
     
     return {
       incomeTax: monthlyTax,
       localTax: localTax,
       total: monthlyTax + localTax
     };
   }
   ```
   
   c) 전체 계산 함수:
   ```javascript
   function calculateNetSalary(annualSalary, dependents) {
     const monthlySalary = Math.floor(annualSalary / 12);
     
     // 4대보험 계산
     const insurance = calculateInsurance(monthlySalary);
     
     // 소득세 계산
     const tax = calculateIncomeTax(monthlySalary, dependents);
     
     // 총 공제액
     const totalDeduction = insurance.total + tax.total;
     
     // 실수령액
     const netSalary = monthlySalary - totalDeduction;
     
     return {
       monthlySalary,
       insurance,
       tax,
       totalDeduction,
       netSalary,
       annualNet: netSalary * 12
     };
   }
   ```
   
   d) 숫자 포맷팅 함수:
   ```javascript
   function formatNumber(num) {
     return num.toLocaleString('ko-KR');
   }
   ```
   
   e) 결과 표시 함수:
   ```javascript
   function displayResult(result) {
     const resultDiv = document.getElementById('result');
     
     resultDiv.innerHTML = `
       <div class="result-container">
         <h3>📊 계산 결과</h3>
         
         <div class="summary">
           <div class="summary-item">
             <span class="label">월 세전 급여</span>
             <span class="value">${formatNumber(result.monthlySalary)}원</span>
           </div>
         </div>
         
         <div class="deductions">
           <h4>───── 공제 내역 ─────</h4>
           <table>
             <thead>
               <tr>
                 <th>항목</th>
                 <th>금액</th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td>국민연금 (4.5%)</td>
                 <td>${formatNumber(result.insurance.nationalPension)}원</td>
               </tr>
               <tr>
                 <td>건강보험 (3.545%)</td>
                 <td>${formatNumber(result.insurance.healthInsurance)}원</td>
               </tr>
               <tr>
                 <td>장기요양보험</td>
                 <td>${formatNumber(result.insurance.longTermCare)}원</td>
               </tr>
               <tr>
                 <td>고용보험 (0.9%)</td>
                 <td>${formatNumber(result.insurance.employmentInsurance)}원</td>
               </tr>
               <tr>
                 <td>소득세</td>
                 <td>${formatNumber(result.tax.incomeTax)}원</td>
               </tr>
               <tr>
                 <td>지방소득세</td>
                 <td>${formatNumber(result.tax.localTax)}원</td>
               </tr>
               <tr class="total-row">
                 <td><strong>총 공제액</strong></td>
                 <td><strong>${formatNumber(result.totalDeduction)}원</strong></td>
               </tr>
             </tbody>
           </table>
         </div>
         
         <div class="net-salary">
           <div class="net-item monthly">
             <span class="label">💰 월 실수령액</span>
             <span class="amount">${formatNumber(result.netSalary)}원</span>
           </div>
           <div class="net-item yearly">
             <span class="label">💵 연 실수령액</span>
             <span class="amount">${formatNumber(result.annualNet)}원</span>
           </div>
         </div>
         
         <div class="info">
           <p>※ 2025년 기준 간이세액표 적용</p>
           <p>※ 실제 금액과 다소 차이가 있을 수 있습니다</p>
         </div>
       </div>
     `;
   }
   ```
   
   f) 이벤트 리스너:
   ```javascript
   document.getElementById('calculateBtn').addEventListener('click', () => {
     const annualSalary = parseInt(document.getElementById('annualSalary').value);
     const dependents = parseInt(document.getElementById('dependents').value);
     
     // 입력값 검증
     if (!annualSalary || annualSalary <= 0) {
       alert('연봉을 올바르게 입력해주세요!');
       return;
     }
     
     if (!dependents || dependents < 1) {
       alert('부양가족 수는 최소 1명(본인)입니다!');
       return;
     }
     
     const result = calculateNetSalary(annualSalary, dependents);
     displayResult(result);
   });
   ```

3. CSS 파일 (styles.css)
   
   a) 기본 스타일 (Lesson 03 유지):
   ```css
   :root {
     --primary-color: #4F46E5;
     --secondary-color: #F3F4F6;
     --accent-color: #10B981;
     --text-color: #1F2937;
     --border-radius: 16px;
   }
   ```
   
   b) 결과 컨테이너:
   ```css
   .result-container {
     margin-top: 30px;
     padding: 30px;
     background: white;
     border-radius: var(--border-radius);
     box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   }
   
   .result-container h3 {
     color: var(--primary-color);
     margin-bottom: 20px;
     text-align: center;
   }
   ```
   
   c) 요약 섹션:
   ```css
   .summary {
     background: var(--secondary-color);
     padding: 20px;
     border-radius: 12px;
     margin-bottom: 20px;
   }
   
   .summary-item {
     display: flex;
     justify-content: space-between;
     font-size: 18px;
   }
   
   .summary-item .value {
     font-weight: 700;
     color: var(--primary-color);
   }
   ```
   
   d) 테이블 스타일:
   ```css
   table {
     width: 100%;
     border-collapse: collapse;
     margin: 20px 0;
   }
   
   thead {
     background: var(--primary-color);
     color: white;
   }
   
   th, td {
     padding: 12px;
     text-align: left;
     border-bottom: 1px solid var(--secondary-color);
   }
   
   tbody tr:hover {
     background: var(--secondary-color);
   }
   
   .total-row {
     background: var(--secondary-color);
     font-weight: 600;
   }
   
   td:last-child {
     text-align: right;
     font-weight: 500;
   }
   ```
   
   e) 실수령액 강조:
   ```css
   .net-salary {
     margin: 30px 0;
   }
   
   .net-item {
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 20px;
     margin: 10px 0;
     border-radius: 12px;
   }
   
   .net-item.monthly {
     background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
     color: white;
   }
   
   .net-item.yearly {
     background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
     color: white;
   }
   
   .net-item .amount {
     font-size: 28px;
     font-weight: 700;
   }
   ```
   
   f) 안내 문구:
   ```css
   .info {
     margin-top: 20px;
     padding: 15px;
     background: #FEF3C7;
     border-left: 4px solid #F59E0B;
     border-radius: 8px;
   }
   
   .info p {
     margin: 5px 0;
     font-size: 14px;
     color: #92400E;
   }
   ```

파일 구조:
lesson-04/
  ├── index.html
  ├── styles.css
  └── salary.js

완성 후:
- 연봉 입력 (예: 50,000,000원)
- 부양가족 수 입력 (예: 1명)
- 계산 버튼 클릭
- 상세한 공제 내역과 실수령액 확인
```

## ✅ 완성 확인 사항

- [ ] 4대보험이 정확히 계산되는가?
- [ ] 소득세 누진세율이 제대로 적용되는가?
- [ ] 숫자에 천단위 콤마가 표시되는가?
- [ ] 테이블이 보기 좋게 스타일링되었는가?
- [ ] 입력값 검증이 작동하는가?
- [ ] 부양가족 수에 따라 세금이 달라지는가?

## 💼 실무 활용

### 연봉 협상 시
```
면접관: "연봉 희망액이 어떻게 되시나요?"
나: "세후 월 300만원 정도를 희망합니다."

→ 이 계산기로 역산하면?
연봉 약 4,500만원 제시해야 함!
```

### 급여 명세서 확인
- 회사에서 받은 급여명세서와 비교
- 공제 항목이 맞는지 확인
- 잘못 계산된 부분 발견 가능

## 🧮 계산 로직 이해하기

### 4대보험 계산 순서
1. 월 급여 = 연봉 ÷ 12
2. 국민연금 = 월급 × 4.5%
3. 건강보험 = 월급 × 3.545%
4. 장기요양 = 건강보험 × 12.95%
5. 고용보험 = 월급 × 0.9%

### 소득세 누진 구조
```
연봉 3,000만원 → 세율 6%
연봉 5,000만원 → 세율 15% (초과분만)
연봉 8,000만원 → 세율 24% (초과분만)
```

## 🐛 디버깅 팁

### 계산이 안 맞을 때
1. console.log()로 중간값 확인
   ```javascript
   console.log('월급:', monthlySalary);
   console.log('국민연금:', nationalPension);
   ```

2. 소수점 처리 확인
   - Math.floor() 사용했는지
   - 원 단위로 내림했는지

3. 세율 확인
   - 2025년 기준 세율 맞는지
   - 퍼센트를 소수로 변환했는지 (4.5% → 0.045)

## 📖 참고 자료
- [국민연금공단](https://www.nps.or.kr)
- [건강보험공단](https://www.nhis.or.kr)
- [국세청 간이세액표](https://www.nts.go.kr)

## 💡 추가 도전 과제

### 레벨 1
- [ ] 비과세액 입력 필드 추가 (식대, 교통비 등)
- [ ] 시급 환산 표시 (주 40시간 기준)

### 레벨 2
- [ ] 차트로 공제 비율 시각화 (Chart.js)
- [ ] 결과 PDF 다운로드 기능

### 레벨 3
- [ ] 여러 연봉 비교 기능
- [ ] 연봉 인상률 계산기

## ⏭️ 다음 단계
Lesson 05에서는 Vite 개발 환경을 구축하고 할인율/부가세 계산기를 만들며 모듈 시스템을 배웁니다!

