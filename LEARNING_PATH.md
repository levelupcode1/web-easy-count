# Easy Count 웹사이트 개발 학습 로드맵

## 📚 학습 목표
HTML부터 시작해서 Next.js, 데이터베이스, 배포까지 완전한 풀스택 웹 개발을 단계별로 학습합니다.

---

## 🎯 학습 단계 개요

| 단계 | 주제 | 구현 기능 | 난이도 | 사용 기술 |
|------|------|----------|--------|----------|
| Lesson 01 | HTML로 계산기 UI 만들기 | 100일 계산기 UI | ⭐ | HTML |
| Lesson 02 | JavaScript로 날짜 계산 | 100일, 500일, 1000일 계산기 | ⭐⭐ | HTML + JavaScript |
| Lesson 03 | CSS 디자인 + 살아온 날 계산기 | 살아온 날 계산기 추가 | ⭐⭐ | HTML + CSS + JS |
| Lesson 04 | 연봉 실수령액 계산기 만들기 | 4대보험, 세금 계산 | ⭐⭐⭐ | HTML + CSS + JS |
| Lesson 05 | 웹 개발 환경 + 할인율 계산기 | 할인율, 부가세 계산기 | ⭐⭐⭐ | Vite + pnpm |
| Lesson 06 | Next.js 프로젝트 전환 | 모든 계산기 통합 | ⭐⭐⭐⭐ | Next.js + TypeScript |
| Lesson 07 | SEO 최적화 + BMI 계산기 | 건강 계산기 추가 | ⭐⭐⭐⭐ | Next.js + SEO |
| Lesson 08 | 배포 + 학점 계산기 | GPA 계산기 추가 | ⭐⭐⭐⭐ | Vercel 배포 |
| Lesson 09 | 회원가입 + 계산 기록 저장 | Supabase 인증 | ⭐⭐⭐⭐⭐ | Supabase + DB |
| Lesson 10 | GitHub 협업 & 자동 배포 | CI/CD 파이프라인 | ⭐⭐⭐⭐⭐ | Git + Actions |

---

## 📁 Lesson 01: HTML로 100일 계산기 UI 만들기

**학습 목표:**
- HTML 기본 구조 이해
- Form 요소 사용법
- 날짜 입력 필드 활용

**구현 기능:**
- 커플 100일 계산기 UI (입력 폼만)

**프롬프트:**
```
lesson-01 폴더에 순수 HTML만으로 "커플 100일 계산기" UI를 만들어주세요.

요구사항:
1. HTML 기본 구조 (<!DOCTYPE html>, <html>, <head>, <body>)
2. 제목: "100일 계산기"
3. 날짜 입력 필드 (<input type="date">)
4. 제출 버튼 (<button> 또는 <input type="submit">)
5. 결과를 표시할 영역 (<div> 또는 <p>)
6. JavaScript 없이 HTML Form의 기본 동작만 사용
7. 주석으로 각 부분에 대한 설명 추가 (한글)

파일 구조:
lesson-01/
  └── index.html

참고:
- JavaScript를 사용하지 않고 HTML의 기본 기능만 활용
- 실제 계산은 다음 단계에서 구현
- 깔끔하고 읽기 쉬운 코드 작성
```

---

## 📁 Lesson 02: JavaScript로 100일, 500일, 1000일 계산하기

**학습 목표:**
- JavaScript 기본 문법 (변수, 함수, 조건문)
- Date 객체 사용법
- DOM 조작 (querySelector, innerHTML)
- 이벤트 리스너

**구현 기능:**
- 연애 시작일 입력 → 100일, 200일, 500일, 1000일 날짜 자동 계산
- 각 기념일까지 남은 일수 표시 (또는 경과일)

**프롬프트:**
```
lesson-02 폴더에 JavaScript로 작동하는 "커플 기념일 계산기"를 만들어주세요.

요구사항:
1. HTML 파일 (index.html)
   - 제목: "커플 기념일 계산기 - 100일, 500일, 1000일"
   - 입력 필드: 연애 시작일 (만난 날)
   - 계산 버튼
   - 결과 표시 영역

2. JavaScript 파일 (script.js)
   - 시작 날짜 입력값 받기
   - 날짜 계산 함수:
     * 시작일 + 100일 = 100일 기념일
     * 시작일 + 200일 = 200일 기념일
     * 시작일 + 500일 = 500일 기념일
     * 시작일 + 1000일 = 1000일 기념일
   - 각 기념일까지 남은 일수 계산 (D-day)
   - 결과를 보기 좋게 표시

3. 표시 형식:
   ```
   💕 100일 기념일: 2025년 3월 15일 (D-30)
   💕 200일 기념일: 2025년 6월 23일 (D-130)
   💕 500일 기념일: 2026년 5월 10일 (D-430)
   💕 1000일 기념일: 2027년 10월 25일 (D-1005)
   ```
   
   * 이미 지난 기념일은 "경과 일수" 표시
   ```
   ✅ 100일 기념일: 2024년 3월 15일 (50일 전)
   ```

4. 사용할 JavaScript 개념:
   - 변수 선언 (const, let)
   - 함수 선언
   - Date 객체
   - 이벤트 리스너 (addEventListener)
   - DOM 조작 (querySelector, innerHTML)

파일 구조:
lesson-02/
  ├── index.html
  └── script.js

참고:
- JavaScript는 외부 파일로 분리
- console.log()로 디버깅하는 방법도 포함
- 에러 처리 기본 (빈 입력값 체크)
```

---

## 📁 Lesson 03: CSS 디자인 + 살아온 날 계산기 추가

**학습 목표:**
- CSS로 아름다운 UI 디자인
- Flexbox 레이아웃
- 반응형 디자인 (모바일 대응)
- 두 번째 계산기 추가

**구현 기능:**
- 기존 100일 계산기에 CSS 적용
- 살아온 날 계산기 추가 (생년월일 → 총 일수, 주수, 년수)

**프롬프트:**
```
lesson-03 폴더에 CSS 디자인이 적용된 2개의 계산기를 만들어주세요.

요구사항:
1. HTML 파일 (index.html)
   - 헤더: "Easy Count - 날짜 계산기"
   - 2개의 섹션 (카드 형태):
     a) 커플 기념일 계산기 (Lesson 02 기능)
     b) 살아온 날 계산기 (새로 추가)
   - 시맨틱 태그 사용

2. CSS 파일 (styles.css)
   - 색상 팔레트:
     * Primary: #4F46E5 (인디고 블루)
     * Secondary: #F3F4F6 (연한 그레이)
     * Accent: #10B981 (초록색)
   - 카드 디자인:
     * 흰색 배경
     * 그림자 효과 (box-shadow)
     * 둥근 모서리 (border-radius: 16px)
     * 패딩과 여백
   - 버튼 스타일:
     * Primary 색상 배경
     * 호버 시 어두워짐
     * 클릭 효과 (active)
   - 입력 필드:
     * 테두리 스타일
     * 포커스 효과
   - 반응형: 모바일에서 카드 세로 배치

3. JavaScript 파일 (script.js)
   - 커플 기념일 계산 함수 (Lesson 02)
   - 살아온 날 계산 함수 (새로 추가):
     ```javascript
     // 생년월일 입력 받기
     // 오늘 날짜와의 차이 계산
     // 결과:
     // - 총 일수
     // - 총 주수 (일수 / 7)
     // - 총 개월수 (대략)
     // - 총 년수
     // - 다음 생일까지 남은 일수
     ```

4. 살아온 날 계산기 표시 형식:
   ```
   🎂 당신은 지금까지...
   📅 총 10,950일을 살았습니다
   📆 약 1,564주를 살았습니다
   🗓️ 약 360개월을 살았습니다
   🎉 약 30년을 살았습니다
   
   다음 생일까지 125일 남았습니다!
   ```

파일 구조:
lesson-03/
  ├── index.html
  ├── styles.css
  └── script.js

학습 포인트:
- 여러 계산기를 하나의 페이지에 구성
- CSS Grid 또는 Flexbox 활용
- 일관된 디자인 시스템
```

---

## 📁 Lesson 04: 연봉 실수령액 계산기 만들기

**학습 목표:**
- 복잡한 수학 계산 로직 구현
- 4대보험 및 세금 계산
- 표(table)로 결과 표시
- 입력 유효성 검증

**구현 기능:**
- 연봉 입력 → 월 실수령액 계산
- 4대보험 공제 (국민연금, 건강보험, 고용보험)
- 소득세, 지방소득세 계산
- 공제 내역 상세 표시

**프롬프트:**
```
lesson-04 폴더에 연봉 실수령액 계산기를 만들어주세요.

요구사항:
1. HTML 파일 (index.html)
   - 제목: "연봉 실수령액 계산기"
   - 입력 필드:
     * 연봉 (세전, 단위: 만원)
     * 부양가족 수 (기본값 1)
   - 계산 버튼
   - 결과 표시 영역:
     * 월 세전 급여
     * 공제 내역 (표 형식)
     * 월 실수령액 (강조)
     * 연 실수령액

2. JavaScript 파일 (salary.js)
   - 연봉 → 월급 계산
   - 4대보험 계산:
     ```javascript
     // 국민연금: 월급의 4.5%
     // 건강보험: 월급의 3.545%
     // 장기요양보험: 건강보험료의 12.95%
     // 고용보험: 월급의 0.9%
     ```
   - 소득세 계산 (간이세액표 기준):
     ```javascript
     // 월급 구간별 세율 적용
     // 1,400만원 이하: 6%
     // 1,400 ~ 5,000만원: 15%
     // 5,000 ~ 8,800만원: 24%
     // 8,800 ~ 1.5억원: 35%
     // 1.5억 초과: 38%
     ```
   - 지방소득세: 소득세의 10%
   - 총 공제액 계산
   - 실수령액 = 월급 - 총 공제액

3. CSS 파일 (styles.css)
   - Lesson 03의 디자인 스타일 유지
   - 표(table) 스타일링:
     * 번갈아가며 배경색 (줄무늬)
     * 헤더 강조
     * 테두리
   - 실수령액 강조 (큰 글씨, 색상)
   - 숫자 천단위 콤마 표시

4. 결과 표시 형식:
   ```
   📊 계산 결과
   
   월 세전 급여: 4,166,666원
   
   ───── 공제 내역 ─────
   국민연금:      187,500원
   건강보험:      147,708원
   장기요양:       19,128원
   고용보험:       37,500원
   소득세:        310,000원
   지방소득세:      31,000원
   ────────────────────
   총 공제액:      732,836원
   
   💰 월 실수령액: 3,433,830원
   💵 연 실수령액: 41,205,960원
   ```

5. 추가 기능:
   - 입력값 유효성 검증 (음수, 비어있음 체크)
   - 천단위 콤마 자동 표시
   - 결과 복사 버튼

파일 구조:
lesson-04/
  ├── index.html
  ├── styles.css
  └── salary.js

학습 포인트:
- 실무에서 사용하는 복잡한 계산 로직
- 소득세 누진 구조 이해
- 표를 활용한 데이터 시각화
- 숫자 포맷팅 (toLocaleString())
```

---

## 📁 Lesson 05: Vite 환경 + 할인율/부가세 계산기

**학습 목표:**
- Node.js와 pnpm 사용법
- Vite 빌드 도구 이해
- 모듈 시스템 (import/export)
- 프로젝트 구조화

**구현 기능:**
- Vite 개발 환경 구축
- 할인율 계산기 (원가, 할인율 → 할인가)
- 부가세 계산기 (공급가액 ↔ 부가세 포함 금액)

**프롬프트:**
```
lesson-05 폴더에 Vite 기반 프로젝트를 만들고 할인율/부가세 계산기를 추가하세요.

요구사항:
1. 프로젝트 초기화
   ```bash
   cd lesson-05
   pnpm init
   pnpm install -D vite
   ```

2. package.json 스크립트
   ```json
   {
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "preview": "vite preview"
     }
   }
   ```

3. 프로젝트 구조
   lesson-05/
     ├── package.json
     ├── index.html
     ├── src/
     │   ├── main.js (진입점)
     │   ├── styles/
     │   │   └── main.css
     │   ├── modules/
     │   │   ├── discount.js (할인율 계산)
     │   │   └── vat.js (부가세 계산)
     │   └── utils/
     │       └── format.js (숫자 포맷팅)
     └── README.md

4. 할인율 계산기 (src/modules/discount.js)
   ```javascript
   export function calculateDiscount(originalPrice, discountRate) {
     // 원가 × (1 - 할인율/100) = 할인가
     // 할인 금액 = 원가 - 할인가
     return {
       discountAmount: ...,
       finalPrice: ...,
       savedPercentage: ...
     }
   }
   ```
   
   **기능:**
   - 원가 입력 (예: 100,000원)
   - 할인율 입력 (예: 30%)
   - 결과 표시:
     * 할인 금액: 30,000원
     * 최종 가격: 70,000원

5. 부가세 계산기 (src/modules/vat.js)
   ```javascript
   export function calculateVAT(amount, includesVAT) {
     const VAT_RATE = 0.1 // 10%
     
     if (includesVAT) {
       // 부가세 포함 금액 → 공급가액, 부가세 분리
       const supplyAmount = amount / 1.1
       const vatAmount = amount - supplyAmount
     } else {
       // 공급가액 → 부가세, 총액 계산
       const vatAmount = amount * VAT_RATE
       const totalAmount = amount + vatAmount
     }
     
     return { ... }
   }
   ```
   
   **기능:**
   - 공급가액 입력 (예: 100,000원) → 부가세 10,000원, 총액 110,000원
   - 부가세 포함 금액 입력 (예: 110,000원) → 공급가액 100,000원, 부가세 10,000원

6. HTML 구조 (index.html)
   - 탭 UI로 계산기 전환:
     * 할인율 계산기
     * 부가세 계산기
   - Lesson 01-04의 계산기도 포함 가능 (선택사항)

7. 모듈 시스템 활용
   ```javascript
   // src/main.js
   import { calculateDiscount } from './modules/discount.js'
   import { calculateVAT } from './modules/vat.js'
   import { formatNumber } from './utils/format.js'
   
   // 계산기 초기화
   document.querySelector('#discount-btn').addEventListener('click', () => {
     const result = calculateDiscount(...)
     displayResult(formatNumber(result.finalPrice))
   })
   ```

실행 방법:
```bash
cd lesson-05
pnpm install
pnpm dev
# http://localhost:5173 열기
```

학습 포인트:
- Vite의 빠른 개발 서버
- ES6 모듈 (import/export)
- 코드 분리와 재사용성
- HMR (Hot Module Replacement) 경험
```

---

## 📁 Lesson 06: Next.js 프로젝트로 전환

**학습 목표:**
- Next.js 프레임워크 이해
- 파일 기반 라우팅
- TypeScript 기본 문법
- 컴포넌트 구조 설계
- App Router 사용법

**구현 기능:**
- Lesson 01-05의 모든 계산기를 Next.js로 통합
- 페이지별 라우팅 (홈, 날짜 계산기, 급여 계산기 등)
- 공통 레이아웃 (헤더, 네비게이션)

**프롬프트:**
```
lesson-06 폴더에 Next.js + TypeScript 프로젝트를 만들고 모든 계산기를 통합하세요.

요구사항:
1. Next.js 프로젝트 생성
   ```bash
   pnpm create next-app lesson-06 --typescript --tailwind --app
   cd lesson-06
   pnpm install
   ```

2. 프로젝트 구조
   lesson-06/
     ├── package.json
     ├── index.html
     ├── src/
     │   ├── App.jsx
     │   ├── main.jsx
     │   ├── components/
     │   │   ├── Header.jsx
     │   │   ├── TabNavigation.jsx
     │   │   ├── DateCalculator.jsx
     │   │   ├── SalaryCalculator.jsx
     │   │   ├── DiscountCalculator.jsx
     │   │   └── CalculatorCard.jsx
     │   ├── hooks/
     │   │   └── useLocalStorage.js
     │   ├── utils/
     │   │   └── calculations.js
     │   └── styles/
     │       └── App.css
     └── README.md

3. 구현할 컴포넌트:
   
   a) App.jsx (메인 컴포넌트)
      - 탭 상태 관리
      - 전체 레이아웃
   
   b) TabNavigation.jsx
      - 탭 전환 UI
      - 활성 탭 표시
   
   c) DateCalculator.jsx
      - 날짜 계산 UI
      - useState로 입력값 관리
      - 계산 결과 표시
   
   d) SalaryCalculator.jsx
      - 연봉 입력
      - 실수령액 계산
      - 공제 내역 표시
   
   e) CalculatorCard.jsx
      - 재사용 가능한 카드 컴포넌트
      - props로 제목, 내용 받기

4. React Hooks 사용:
   - useState: 상태 관리
   - useEffect: 부수 효과 처리
   - useLocalStorage: 커스텀 훅 (계산 기록 저장)

5. 스타일링:
   - CSS Modules 또는 일반 CSS
   - 반응형 디자인
   - 컴포넌트별 스타일 분리

학습 포인트:
- 컴포넌트 설계 원칙
- Props drilling 문제 이해
- State 끌어올리기 (Lifting State Up)
- 불변성 유지
- 이벤트 핸들러 작성법

주석:
- 각 컴포넌트의 역할 설명
- Props 타입 설명
- 한글 주석으로 초보자도 이해 가능하게
```

---

## 📁 Lesson 07: Next.js + TypeScript + SEO

**학습 목표:**
- Next.js 프레임워크 이해
- TypeScript 기본
- SEO 최적화
- SSR/SSG 개념
- 라우팅 시스템

**만들 기능:**
- Next.js로 재구성
- SEO 최적화된 페이지
- 타입 안정성

**프롬프트:**
```
lesson-07 폴더를 생성하고 Next.js + TypeScript로 SEO 최적화된 계산기 웹사이트를 만들어주세요.

요구사항:
1. Next.js 프로젝트 생성
   ```bash
   pnpm create next-app lesson-07 --typescript --tailwind --app
   cd lesson-07
   pnpm install
   ```

2. 추가 패키지 설치
   ```bash
   pnpm add next-seo date-fns
   pnpm add -D @types/node
   ```

3. 프로젝트 구조 (App Router)
   lesson-07/
     ├── package.json
     ├── tsconfig.json
     ├── next.config.js
     ├── tailwind.config.ts
     ├── app/
     │   ├── layout.tsx (루트 레이아웃)
     │   ├── page.tsx (홈페이지)
     │   ├── date/
     │   │   ├── birthday/
     │   │   │   └── page.tsx
     │   │   ├── dday/
     │   │   │   └── page.tsx
     │   │   └── anniversary/
     │   │       └── page.tsx
     │   ├── salary/
     │   │   └── page.tsx
     │   └── api/
     │       └── calculate/
     │           └── route.ts
     ├── components/
     │   ├── Header.tsx
     │   ├── Footer.tsx
     │   ├── calculators/
     │   │   ├── BirthdayCalculator.tsx
     │   │   ├── DDayCalculator.tsx
     │   │   └── SalaryCalculator.tsx
     │   └── ui/
     │       ├── Button.tsx
     │       ├── Input.tsx
     │       └── Card.tsx
     ├── lib/
     │   ├── calculations.ts
     │   └── types.ts
     └── public/
         └── images/

4. TypeScript 타입 정의 (lib/types.ts)
   ```typescript
   // 날짜 계산 결과 타입
   export interface DateCalculationResult {
     days: number;
     weeks: number;
     months: number;
     years: number;
   }
   
   // 연봉 계산 결과 타입
   export interface SalaryCalculationResult {
     monthlySalary: number;
     nationalPension: number;
     healthInsurance: number;
     employmentInsurance: number;
     incomeTax: number;
     localTax: number;
     netSalary: number;
   }
   ```

5. SEO 최적화 구현:
   
   a) 메타 태그 (각 페이지)
   ```typescript
   // app/date/dday/page.tsx
   import { Metadata } from 'next'
   
   export const metadata: Metadata = {
     title: '100일 계산기 - 커플 디데이 기념일 계산 | Easy Count',
     description: '연애 시작일을 입력하면 100일, 500일, 1000일 기념일을 자동 계산합니다.',
     keywords: '100일계산기, 디데이, 커플기념일',
     openGraph: {
       title: '100일 계산기',
       description: '커플 기념일을 놓치지 마세요!',
       images: ['/images/dday-og.jpg'],
     },
   }
   ```
   
   b) 구조화된 데이터 (JSON-LD)
   ```typescript
   const jsonLd = {
     '@context': 'https://schema.org',
     '@type': 'SoftwareApplication',
     name: '디데이 계산기',
     applicationCategory: 'UtilityApplication',
   }
   ```

6. Tailwind CSS 스타일링
   - 유틸리티 클래스 사용
   - 반응형 디자인
   - 다크모드 지원

7. API Routes
   - /api/calculate 엔드포인트
   - 서버 사이드 계산 로직

학습 포인트:
- SSR vs SSG vs CSR 차이
- Next.js 라우팅 시스템
- TypeScript의 이점
- SEO가 중요한 이유
- 메타 태그의 역할
- 구조화된 데이터

실행:
```bash
pnpm dev
```

배포 준비:
```bash
pnpm build
pnpm start
```

SEO 체크리스트:
- [ ] 각 페이지 고유한 title
- [ ] meta description 150자 이내
- [ ] Open Graph 태그
- [ ] sitemap.xml
- [ ] robots.txt
- [ ] 의미있는 URL 구조
```

---

## 📁 Lesson 08: 배포 및 퍼블리싱

**학습 목표:**
- Vercel 배포
- 환경 변수 관리
- 도메인 연결
- 성능 최적화
- Analytics 설정

**만들 기능:**
- 실제 서비스 배포
- 프로덕션 환경 설정
- 모니터링

**프롬프트:**
```
lesson-08 폴더를 생성하고 Lesson 07 프로젝트를 Vercel에 배포해주세요.

요구사항:
1. 프로젝트 준비
   - Lesson 07 코드를 lesson-08로 복사
   - 프로덕션 빌드 테스트
   ```bash
   pnpm build
   pnpm start
   ```

2. 환경 변수 설정
   
   a) .env.local 파일 생성
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
   
   b) .env.production 파일
   ```env
   NEXT_PUBLIC_SITE_URL=https://easycount.vercel.app
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
   
   c) .gitignore 확인
   ```
   .env*.local
   .env.production
   ```

3. next.config.js 최적화
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     // 이미지 최적화
     images: {
       formats: ['image/webp'],
       deviceSizes: [640, 750, 828, 1080, 1200],
     },
     
     // 압축
     compress: true,
     
     // 성능 최적화
     swcMinify: true,
     
     // 보안 헤더
     async headers() {
       return [
         {
           source: '/:path*',
           headers: [
             {
               key: 'X-Frame-Options',
               value: 'DENY',
             },
             {
               key: 'X-Content-Type-Options',
               value: 'nosniff',
             },
           ],
         },
       ];
     },
   }
   
   module.exports = nextConfig
   ```

4. sitemap.xml 생성
   ```typescript
   // app/sitemap.ts
   import { MetadataRoute } from 'next'
   
   export default function sitemap(): MetadataRoute.Sitemap {
     return [
       {
         url: 'https://easycount.vercel.app',
         lastModified: new Date(),
         changeFrequency: 'weekly',
         priority: 1,
       },
       {
         url: 'https://easycount.vercel.app/date/dday',
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 0.8,
       },
       // 다른 페이지들...
     ]
   }
   ```

5. robots.txt 생성
   ```typescript
   // app/robots.ts
   import { MetadataRoute } from 'next'
   
   export default function robots(): MetadataRoute.Robots {
     return {
       rules: {
         userAgent: '*',
         allow: '/',
       },
       sitemap: 'https://easycount.vercel.app/sitemap.xml',
     }
   }
   ```

6. Google Analytics 설정
   ```typescript
   // app/layout.tsx
   import Script from 'next/script'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <head>
           <Script
             strategy="afterInteractive"
             src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
           />
           <Script id="google-analytics" strategy="afterInteractive">
             {`
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
             `}
           </Script>
         </head>
         <body>{children}</body>
       </html>
     )
   }
   ```

7. Vercel 배포 단계:
   
   Step 1: Vercel 계정 생성
   - https://vercel.com 가입
   - GitHub 계정 연동
   
   Step 2: 프로젝트 import
   - "New Project" 클릭
   - GitHub 저장소 선택
   - Framework Preset: Next.js
   
   Step 3: 환경 변수 설정
   - Vercel 대시보드에서 Environment Variables 추가
   
   Step 4: 배포
   - Deploy 버튼 클릭
   - 배포 완료 대기 (2-3분)
   
   Step 5: 도메인 확인
   - https://프로젝트명.vercel.app

8. 성능 최적화 체크리스트:
   - [ ] 이미지 최적화 (Next/Image)
   - [ ] 번들 크기 분석 (next/bundle-analyzer)
   - [ ] Core Web Vitals 측정
   - [ ] Lighthouse 점수 90+ 목표

9. 배포 후 설정:
   
   a) Google Search Console 등록
   - https://search.google.com/search-console
   - 도메인 소유권 인증
   - sitemap.xml 제출
   
   b) Naver Search Advisor 등록
   - https://searchadvisor.naver.com
   - 사이트 등록
   - 사이트맵 제출

10. 모니터링 도구:
    - Vercel Analytics
    - Google Analytics
    - Sentry (에러 추적)

학습 포인트:
- 로컬 개발 vs 프로덕션 환경
- 환경 변수의 중요성
- CDN의 역할
- SEO 도구 활용
- 성능 측정 방법

배포 확인:
- [ ] 사이트 정상 작동
- [ ] 모든 페이지 접근 가능
- [ ] 메타 태그 확인
- [ ] 모바일 반응형 확인
- [ ] 로딩 속도 확인
```

---

## 📁 Lesson 09: 데이터베이스 & 인증 (Supabase)

**학습 목표:**
- Supabase 설정
- 회원가입/로그인
- 데이터베이스 CRUD
- 계산 기록 저장
- Row Level Security

**만들 기능:**
- 사용자 인증 시스템
- 계산 기록 저장/불러오기
- 즐겨찾기 기능

**프롬프트:**
```
lesson-09 폴더를 생성하고 Supabase를 연동한 회원가입 및 데이터 저장 기능을 구현해주세요.

요구사항:
1. Supabase 프로젝트 설정
   
   Step 1: Supabase 계정 생성
   - https://supabase.com 가입
   - 새 프로젝트 생성
   - Database 비밀번호 설정
   
   Step 2: 환경 변수 추가
   ```env
   # .env.local
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

2. 패키지 설치
   ```bash
   pnpm add @supabase/supabase-js @supabase/auth-helpers-nextjs
   pnpm add @supabase/auth-ui-react @supabase/auth-ui-shared
   ```

3. Supabase 클라이언트 설정
   ```typescript
   // lib/supabase.ts
   import { createClient } from '@supabase/supabase-js'
   
   const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
   const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
   
   export const supabase = createClient(supabaseUrl, supabaseAnonKey)
   ```

4. 데이터베이스 스키마 설계
   
   a) users 테이블 (Supabase Auth 자동 생성)
   
   b) calculations 테이블
   ```sql
   CREATE TABLE calculations (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
     calculator_type VARCHAR(50) NOT NULL,
     input_data JSONB NOT NULL,
     result_data JSONB NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   
   -- 인덱스 생성
   CREATE INDEX idx_calculations_user_id ON calculations(user_id);
   CREATE INDEX idx_calculations_created_at ON calculations(created_at DESC);
   ```
   
   c) favorites 테이블
   ```sql
   CREATE TABLE favorites (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
     calculator_id UUID REFERENCES calculations(id) ON DELETE CASCADE,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     UNIQUE(user_id, calculator_id)
   );
   ```

5. Row Level Security (RLS) 설정
   ```sql
   -- calculations 테이블 RLS
   ALTER TABLE calculations ENABLE ROW LEVEL SECURITY;
   
   -- 사용자는 자신의 계산만 조회
   CREATE POLICY "Users can view own calculations"
     ON calculations FOR SELECT
     USING (auth.uid() = user_id);
   
   -- 사용자는 자신의 계산만 추가
   CREATE POLICY "Users can insert own calculations"
     ON calculations FOR INSERT
     WITH CHECK (auth.uid() = user_id);
   
   -- 사용자는 자신의 계산만 삭제
   CREATE POLICY "Users can delete own calculations"
     ON calculations FOR DELETE
     USING (auth.uid() = user_id);
   ```

6. 인증 컴포넌트 구현
   
   a) 로그인/회원가입 페이지
   ```typescript
   // app/auth/page.tsx
   'use client'
   
   import { Auth } from '@supabase/auth-ui-react'
   import { ThemeSupa } from '@supabase/auth-ui-shared'
   import { supabase } from '@/lib/supabase'
   
   export default function AuthPage() {
     return (
       <div className="container mx-auto max-w-md p-8">
         <h1 className="text-2xl font-bold mb-6">로그인 / 회원가입</h1>
         <Auth
           supabaseClient={supabase}
           appearance={{ theme: ThemeSupa }}
           providers={['google', 'github']}
           localization={{
             variables: {
               sign_in: {
                 email_label: '이메일',
                 password_label: '비밀번호',
               },
             },
           }}
         />
       </div>
     )
   }
   ```
   
   b) 인증 상태 관리
   ```typescript
   // components/AuthProvider.tsx
   'use client'
   
   import { createContext, useContext, useEffect, useState } from 'react'
   import { User } from '@supabase/supabase-js'
   import { supabase } from '@/lib/supabase'
   
   interface AuthContextType {
     user: User | null
     loading: boolean
   }
   
   const AuthContext = createContext<AuthContextType>({
     user: null,
     loading: true,
   })
   
   export function AuthProvider({ children }: { children: React.ReactNode }) {
     const [user, setUser] = useState<User | null>(null)
     const [loading, setLoading] = useState(true)
   
     useEffect(() => {
       // 현재 사용자 확인
       supabase.auth.getUser().then(({ data: { user } }) => {
         setUser(user)
         setLoading(false)
       })
   
       // 인증 상태 변경 감지
       const { data: { subscription } } = supabase.auth.onAuthStateChange(
         (event, session) => {
           setUser(session?.user ?? null)
           setLoading(false)
         }
       )
   
       return () => subscription.unsubscribe()
     }, [])
   
     return (
       <AuthContext.Provider value={{ user, loading }}>
         {children}
       </AuthContext.Provider>
     )
   }
   
   export const useAuth = () => useContext(AuthContext)
   ```

7. 계산 기록 저장 기능
   ```typescript
   // lib/database.ts
   import { supabase } from './supabase'
   
   export async function saveCalculation(
     calculatorType: string,
     inputData: any,
     resultData: any
   ) {
     const { data: { user } } = await supabase.auth.getUser()
     
     if (!user) throw new Error('Not authenticated')
   
     const { data, error } = await supabase
       .from('calculations')
       .insert({
         user_id: user.id,
         calculator_type: calculatorType,
         input_data: inputData,
         result_data: resultData,
       })
       .select()
   
     if (error) throw error
     return data
   }
   
   export async function getCalculations(calculatorType?: string) {
     const { data: { user } } = await supabase.auth.getUser()
     
     if (!user) throw new Error('Not authenticated')
   
     let query = supabase
       .from('calculations')
       .select('*')
       .eq('user_id', user.id)
       .order('created_at', { ascending: false })
   
     if (calculatorType) {
       query = query.eq('calculator_type', calculatorType)
     }
   
     const { data, error } = await query
   
     if (error) throw error
     return data
   }
   
   export async function deleteCalculation(id: string) {
     const { error } = await supabase
       .from('calculations')
       .delete()
       .eq('id', id)
   
     if (error) throw error
   }
   ```

8. UI 컴포넌트 업데이트
   
   a) 헤더에 로그인 상태 표시
   ```typescript
   // components/Header.tsx
   'use client'
   
   import { useAuth } from '@/components/AuthProvider'
   import { supabase } from '@/lib/supabase'
   import Link from 'next/link'
   
   export function Header() {
     const { user, loading } = useAuth()
   
     const handleLogout = async () => {
       await supabase.auth.signOut()
     }
   
     return (
       <header className="bg-white shadow">
         <nav className="container mx-auto px-4 py-4 flex justify-between">
           <Link href="/" className="text-xl font-bold">
             Easy Count
           </Link>
           
           <div>
             {loading ? (
               <span>로딩중...</span>
             ) : user ? (
               <div className="flex items-center gap-4">
                 <span>{user.email}</span>
                 <Link href="/history">기록</Link>
                 <button onClick={handleLogout}>로그아웃</button>
               </div>
             ) : (
               <Link href="/auth">로그인</Link>
             )}
           </div>
         </nav>
       </header>
     )
   }
   ```
   
   b) 계산 기록 페이지
   ```typescript
   // app/history/page.tsx
   'use client'
   
   import { useEffect, useState } from 'react'
   import { getCalculations, deleteCalculation } from '@/lib/database'
   import { useAuth } from '@/components/AuthProvider'
   import { useRouter } from 'next/navigation'
   
   export default function HistoryPage() {
     const { user, loading } = useAuth()
     const router = useRouter()
     const [calculations, setCalculations] = useState([])
   
     useEffect(() => {
       if (!loading && !user) {
         router.push('/auth')
       } else if (user) {
         loadCalculations()
       }
     }, [user, loading])
   
     const loadCalculations = async () => {
       const data = await getCalculations()
       setCalculations(data)
     }
   
     const handleDelete = async (id: string) => {
       await deleteCalculation(id)
       loadCalculations()
     }
   
     return (
       <div className="container mx-auto p-8">
         <h1 className="text-2xl font-bold mb-6">계산 기록</h1>
         <div className="space-y-4">
           {calculations.map((calc) => (
             <div key={calc.id} className="border p-4 rounded">
               <h3>{calc.calculator_type}</h3>
               <pre>{JSON.stringify(calc.result_data, null, 2)}</pre>
               <button onClick={() => handleDelete(calc.id)}>삭제</button>
             </div>
           ))}
         </div>
       </div>
     )
   }
   ```

9. 계산기에 저장 기능 추가
   ```typescript
   // 계산 후 저장 버튼
   const handleSave = async () => {
     try {
       await saveCalculation(
         'dday',
         { startDate },
         { day100, day500, day1000 }
       )
       alert('저장되었습니다!')
     } catch (error) {
       console.error('Error:', error)
       alert('저장 실패')
     }
   }
   ```

학습 포인트:
- 백엔드 없이 Supabase로 DB 구축
- 인증 시스템의 중요성
- Row Level Security로 보안 강화
- CRUD 작업 구현
- 비동기 처리 (async/await)

테스트 시나리오:
1. 회원가입 → 로그인
2. 계산기 사용 → 저장
3. 기록 페이지에서 확인
4. 기록 삭제
5. 로그아웃 → 다시 로그인 → 기록 유지 확인
```

---

## 📁 Lesson 10: GitHub & CI/CD

**학습 목표:**
- Git 기본 명령어
- GitHub 저장소 관리
- 브랜치 전략
- Pull Request 워크플로우
- GitHub Actions (CI/CD)
- 자동 배포 파이프라인

**만들 기능:**
- Git 버전 관리
- GitHub에 코드 푸시
- 자동 테스트
- 자동 배포

**프롬프트:**
```
lesson-10 폴더를 생성하고 GitHub를 사용한 버전 관리 및 CI/CD 파이프라인을 구축해주세요.

요구사항:
1. Git 초기 설정
   ```bash
   # Git 설치 확인
   git --version
   
   # 사용자 정보 설정
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   
   # 기본 브랜치 이름 설정
   git config --global init.defaultBranch main
   ```

2. 프로젝트 Git 초기화
   ```bash
   cd lesson-10
   git init
   ```

3. .gitignore 파일 생성
   ```gitignore
   # .gitignore
   
   # 의존성
   node_modules/
   
   # Next.js
   .next/
   out/
   build/
   
   # 환경 변수
   .env
   .env*.local
   .env.production
   
   # 로그
   npm-debug.log*
   yarn-debug.log*
   yarn-error.log*
   pnpm-debug.log*
   
   # 운영체제
   .DS_Store
   Thumbs.db
   
   # IDE
   .vscode/
   .idea/
   *.swp
   *.swo
   
   # 테스트 커버리지
   coverage/
   
   # Vercel
   .vercel
   ```

4. README.md 작성
   ```markdown
   # Easy Count - 생활 계산기
   
   일상생활에 필요한 다양한 계산을 한 곳에서!
   
   ## 🚀 기능
   
   - 📅 날짜 계산기 (100일, 살아온 날)
   - 💰 연봉 실수령액 계산기
   - 💝 커플 기념일 계산기
   - 📊 할인율 계산기
   
   ## 🛠️ 기술 스택
   
   - **Framework**: Next.js 14 (App Router)
   - **Language**: TypeScript
   - **Styling**: Tailwind CSS
   - **Database**: Supabase
   - **Authentication**: Supabase Auth
   - **Deployment**: Vercel
   
   ## 📦 설치 및 실행
   
   ### 필수 요구사항
   - Node.js 18+
   - pnpm 8+
   
   ### 설치
   \`\`\`bash
   # 저장소 클론
   git clone https://github.com/your-username/easy-count.git
   cd easy-count
   
   # 의존성 설치
   pnpm install
   
   # 환경 변수 설정
   cp .env.example .env.local
   # .env.local 파일을 열어 값 입력
   
   # 개발 서버 실행
   pnpm dev
   \`\`\`
   
   브라우저에서 http://localhost:3000 열기
   
   ## 🌍 환경 변수
   
   \`\`\`.env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   \`\`\`
   
   ## 📝 스크립트
   
   - \`pnpm dev\`: 개발 서버 실행
   - \`pnpm build\`: 프로덕션 빌드
   - \`pnpm start\`: 프로덕션 서버 실행
   - \`pnpm lint\`: ESLint 실행
   - \`pnpm test\`: 테스트 실행
   
   ## 🤝 기여하기
   
   1. Fork the Project
   2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
   3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
   4. Push to the Branch (\`git push origin feature/AmazingFeature\`)
   5. Open a Pull Request
   
   ## 📄 라이선스
   
   MIT License
   
   ## 👤 작성자
   
   Your Name - [@yourtwitter](https://twitter.com/yourtwitter)
   
   프로젝트 링크: [https://github.com/your-username/easy-count](https://github.com/your-username/easy-count)
   ```

5. .env.example 파일 생성
   ```env
   # .env.example
   # 이 파일을 복사해서 .env.local 생성
   
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url-here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key-here
   
   # Site
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   
   # Analytics (optional)
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

6. Git 기본 명령어 학습
   ```bash
   # 1. 파일 상태 확인
   git status
   
   # 2. 파일 스테이징
   git add .                    # 모든 변경사항
   git add src/app/page.tsx     # 특정 파일만
   
   # 3. 커밋
   git commit -m "feat: 100일 계산기 추가"
   
   # 4. 커밋 히스토리 확인
   git log
   git log --oneline
   
   # 5. 변경사항 확인
   git diff
   ```

7. GitHub 저장소 생성 및 연결
   ```bash
   # GitHub에서 저장소 생성 후
   
   # 원격 저장소 추가
   git remote add origin https://github.com/your-username/easy-count.git
   
   # 확인
   git remote -v
   
   # 첫 푸시
   git push -u origin main
   ```

8. 브랜치 전략 (Git Flow 간소화 버전)
   ```bash
   # main: 프로덕션 코드
   # develop: 개발 브랜치
   # feature/*: 새 기능
   # fix/*: 버그 수정
   
   # develop 브랜치 생성
   git checkout -b develop
   
   # 새 기능 개발
   git checkout -b feature/salary-calculator
   
   # 작업 완료 후
   git add .
   git commit -m "feat: 연봉 계산기 구현"
   git push origin feature/salary-calculator
   
   # GitHub에서 Pull Request 생성
   # 리뷰 후 develop에 merge
   
   # develop → main 병합 (릴리즈)
   git checkout main
   git merge develop
   git push origin main
   ```

9. Conventional Commits (커밋 메시지 규칙)
   ```bash
   # 형식: <type>(<scope>): <subject>
   
   # 타입:
   # feat: 새 기능
   # fix: 버그 수정
   # docs: 문서 변경
   # style: 코드 스타일 (포맷팅)
   # refactor: 리팩토링
   # test: 테스트 추가
   # chore: 빌드, 설정 변경
   
   # 예시:
   git commit -m "feat(calculator): 100일 계산기 추가"
   git commit -m "fix(salary): 세금 계산 오류 수정"
   git commit -m "docs(readme): 설치 방법 추가"
   git commit -m "style(format): Prettier 적용"
   git commit -m "refactor(date): 날짜 계산 로직 개선"
   git commit -m "test(calculator): 유닛 테스트 추가"
   git commit -m "chore(deps): Next.js 14.1로 업데이트"
   ```

10. GitHub Actions (CI/CD) 설정
    
    a) 워크플로우 파일 생성
    ```yaml
    # .github/workflows/ci.yml
    name: CI/CD Pipeline
    
    on:
      push:
        branches: [ main, develop ]
      pull_request:
        branches: [ main, develop ]
    
    jobs:
      lint:
        name: Lint
        runs-on: ubuntu-latest
        
        steps:
          - name: Checkout code
            uses: actions/checkout@v4
          
          - name: Setup pnpm
            uses: pnpm/action-setup@v2
            with:
              version: 8
          
          - name: Setup Node.js
            uses: actions/setup-node@v4
            with:
              node-version: '18'
              cache: 'pnpm'
          
          - name: Install dependencies
            run: pnpm install
          
          - name: Run ESLint
            run: pnpm lint
      
      build:
        name: Build
        runs-on: ubuntu-latest
        needs: lint
        
        steps:
          - name: Checkout code
            uses: actions/checkout@v4
          
          - name: Setup pnpm
            uses: pnpm/action-setup@v2
            with:
              version: 8
          
          - name: Setup Node.js
            uses: actions/setup-node@v4
            with:
              node-version: '18'
              cache: 'pnpm'
          
          - name: Install dependencies
            run: pnpm install
          
          - name: Build project
            run: pnpm build
            env:
              NEXT_PUBLIC_SUPABASE_URL: ${{ secrets.NEXT_PUBLIC_SUPABASE_URL }}
              NEXT_PUBLIC_SUPABASE_ANON_KEY: ${{ secrets.NEXT_PUBLIC_SUPABASE_ANON_KEY }}
      
      test:
        name: Test
        runs-on: ubuntu-latest
        needs: lint
        
        steps:
          - name: Checkout code
            uses: actions/checkout@v4
          
          - name: Setup pnpm
            uses: pnpm/action-setup@v2
            with:
              version: 8
          
          - name: Setup Node.js
            uses: actions/setup-node@v4
            with:
              node-version: '18'
              cache: 'pnpm'
          
          - name: Install dependencies
            run: pnpm install
          
          - name: Run tests
            run: pnpm test
    ```
    
    b) 자동 배포 워크플로우
    ```yaml
    # .github/workflows/deploy.yml
    name: Deploy to Vercel
    
    on:
      push:
        branches: [ main ]
    
    jobs:
      deploy:
        name: Deploy
        runs-on: ubuntu-latest
        
        steps:
          - name: Checkout code
            uses: actions/checkout@v4
          
          - name: Deploy to Vercel
            uses: amondnet/vercel-action@v25
            with:
              vercel-token: ${{ secrets.VERCEL_TOKEN }}
              vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
              vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
              vercel-args: '--prod'
    ```

11. GitHub Secrets 설정
    ```
    GitHub 저장소 → Settings → Secrets and variables → Actions
    
    추가할 Secrets:
    - NEXT_PUBLIC_SUPABASE_URL
    - NEXT_PUBLIC_SUPABASE_ANON_KEY
    - VERCEL_TOKEN
    - VERCEL_ORG_ID
    - VERCEL_PROJECT_ID
    ```

12. Pull Request 템플릿
    ```markdown
    # .github/pull_request_template.md
    
    ## 변경 사항
    <!-- 이 PR에서 무엇을 변경했나요? -->
    
    ## 변경 이유
    <!-- 왜 이 변경이 필요한가요? -->
    
    ## 스크린샷 (선택사항)
    <!-- UI 변경이 있다면 스크린샷 추가 -->
    
    ## 체크리스트
    - [ ] 코드가 lint 규칙을 통과함
    - [ ] 빌드가 성공함
    - [ ] 테스트를 작성하고 통과함
    - [ ] README나 문서를 업데이트함 (필요시)
    - [ ] 변경사항을 로컬에서 테스트함
    
    ## 관련 이슈
    <!-- Closes #이슈번호 -->
    ```

13. 협업 워크플로우
    ```bash
    # 1. 최신 코드 가져오기
    git checkout develop
    git pull origin develop
    
    # 2. 새 기능 브랜치 생성
    git checkout -b feature/new-calculator
    
    # 3. 작업 진행
    # ... 코드 작성 ...
    
    # 4. 커밋
    git add .
    git commit -m "feat: 새로운 계산기 추가"
    
    # 5. 원격에 푸시
    git push origin feature/new-calculator
    
    # 6. GitHub에서 Pull Request 생성
    # - develop 브랜치로 PR 생성
    # - 리뷰어 지정
    # - 라벨 추가
    
    # 7. CI/CD 통과 확인
    # - Lint 통과
    # - Build 성공
    # - Test 통과
    
    # 8. 리뷰 승인 후 Merge
    # - Squash and merge 추천
    
    # 9. 로컬 브랜치 정리
    git checkout develop
    git pull origin develop
    git branch -d feature/new-calculator
    ```

학습 포인트:
- Git의 중요성과 버전 관리 개념
- 브랜치 전략으로 안전한 협업
- CI/CD로 자동화된 품질 관리
- GitHub Actions 워크플로우
- 시크릿 관리의 중요성
- 코드 리뷰 프로세스

프로젝트 완성 체크리스트:
- [ ] Git 저장소 초기화
- [ ] GitHub에 코드 푸시
- [ ] CI/CD 파이프라인 설정
- [ ] 자동 배포 성공
- [ ] README 작성
- [ ] 라이선스 추가
- [ ] 기여 가이드 작성
```

---

## 🎓 학습 완료 후

### 포트폴리오로 활용하기
1. **GitHub 저장소 정리**
   - 깔끔한 README
   - 스크린샷/GIF 추가
   - 라이브 데모 링크

2. **블로그 포스팅**
   - 개발 과정 정리
   - 기술적 챌린지
   - 배운 점 공유

3. **이력서에 추가**
   - 프로젝트 설명
   - 사용 기술 스택
   - 성과 (방문자 수, 기능 등)

### 다음 단계 학습 주제
- TypeScript 고급 기법
- 테스트 (Jest, Testing Library)
- 성능 최적화
- 접근성 (a11y)
- 국제화 (i18n)
- PWA (Progressive Web App)
- GraphQL
- Docker & 컨테이너화

---

**총 학습 기간 예상: 10-12주**
- Lesson 01-04: 각 1주
- Lesson 05-07: 각 1-2주
- Lesson 08-10: 각 1주

**행운을 빕니다! 🚀**

