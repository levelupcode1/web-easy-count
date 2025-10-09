# Lesson 06: Next.js 프로젝트로 전환

## 🎯 학습 목표
- Next.js 프레임워크 이해하기
- 파일 기반 라우팅 활용하기
- TypeScript 기본 문법 익히기
- 컴포넌트 기반 아키텍처 설계하기
- App Router 사용하기
- Tailwind CSS로 빠른 스타일링

## 📚 배울 내용
1. Next.js가 React보다 좋은 이유
2. 파일 시스템 라우팅
3. TypeScript 기초
4. 서버 컴포넌트 vs 클라이언트 컴포넌트
5. Tailwind CSS 유틸리티 클래스
6. 레이아웃과 공통 컴포넌트

## 🚀 실습 프롬프트

```
lesson-06 폴더에 Next.js + TypeScript 프로젝트를 만들고 
Lesson 01-05의 모든 계산기를 통합하세요.

요구사항:

1. Next.js 프로젝트 생성
   ```bash
   pnpm create next-app lesson-06 --typescript --tailwind --app --eslint
   cd lesson-06
   pnpm install
   ```
   
   프로젝트 생성 시 옵션:
   - Would you like to use TypeScript? Yes
   - Would you like to use ESLint? Yes  
   - Would you like to use Tailwind CSS? Yes
   - Would you like to use `src/` directory? Yes
   - Would you like to use App Router? Yes
   - Would you like to customize the default import alias? No

2. 프로젝트 구조
   lesson-06/
     ├── package.json
     ├── tsconfig.json
     ├── next.config.js
     ├── tailwind.config.ts
     ├── src/
     │   ├── app/
     │   │   ├── layout.tsx         (루트 레이아웃)
     │   │   ├── page.tsx            (홈페이지)
     │   │   ├── globals.css
     │   │   ├── date/
     │   │   │   ├── dday/
     │   │   │   │   └── page.tsx   (100일 계산기)
     │   │   │   └── birthday/
     │   │   │       └── page.tsx   (살아온 날 계산기)
     │   │   ├── salary/
     │   │   │   └── page.tsx        (연봉 계산기)
     │   │   └── shopping/
     │   │       └── page.tsx        (할인/부가세 계산기)
     │   ├── components/
     │   │   ├── Header.tsx
     │   │   ├── Footer.tsx
     │   │   ├── Navigation.tsx
     │   │   └── calculators/
     │   │       ├── DDayCalculator.tsx
     │   │       ├── BirthdayCalculator.tsx
     │   │       ├── SalaryCalculator.tsx
     │   │       ├── DiscountCalculator.tsx
     │   │       └── VATCalculator.tsx
     │   ├── lib/
     │   │   ├── calculations/
     │   │   │   ├── date.ts
     │   │   │   ├── salary.ts
     │   │   │   ├── discount.ts
     │   │   │   └── vat.ts
     │   │   └── utils/
     │   │       └── format.ts
     │   └── types/
     │       └── index.ts
     └── public/
         └── images/

3. TypeScript 타입 정의 (src/types/index.ts)
   ```typescript
   // 날짜 계산 결과 타입
   export interface DDayResult {
     day100: Date;
     day200: Date;
     day500: Date;
     day1000: Date;
     daysTo100: number;
     daysTo200: number;
     daysTo500: number;
     daysTo1000: number;
   }
   
   export interface BirthdayResult {
     totalDays: number;
     totalWeeks: number;
     totalMonths: number;
     totalYears: number;
     daysToNextBirthday: number;
   }
   
   // 연봉 계산 결과 타입
   export interface InsuranceResult {
     nationalPension: number;
     healthInsurance: number;
     longTermCare: number;
     employmentInsurance: number;
     total: number;
   }
   
   export interface TaxResult {
     incomeTax: number;
     localTax: number;
     total: number;
   }
   
   export interface SalaryResult {
     monthlySalary: number;
     insurance: InsuranceResult;
     tax: TaxResult;
     totalDeduction: number;
     netSalary: number;
     annualNet: number;
   }
   
   // 할인/부가세 타입
   export interface DiscountResult {
     originalPrice: number;
     discountRate: number;
     discountAmount: number;
     finalPrice: number;
     savedAmount: number;
   }
   
   export interface VATResult {
     type: string;
     supplyAmount: number;
     vatAmount: number;
     totalAmount: number;
     vatRate: number;
   }
   ```

4. 루트 레이아웃 (src/app/layout.tsx)
   ```typescript
   import type { Metadata } from 'next'
   import { Inter } from 'next/font/google'
   import './globals.css'
   import Header from '@/components/Header'
   import Footer from '@/components/Footer'
   
   const inter = Inter({ subsets: ['latin'] })
   
   export const metadata: Metadata = {
     title: 'Easy Count - 생활 계산기',
     description: '일상생활에 필요한 다양한 계산을 한 곳에서!',
   }
   
   export default function RootLayout({
     children,
   }: {
     children: React.ReactNode
   }) {
     return (
       <html lang="ko">
         <body className={inter.className}>
           <Header />
           <main className="min-h-screen">
             {children}
           </main>
           <Footer />
         </body>
       </html>
     )
   }
   ```

5. 홈페이지 (src/app/page.tsx)
   ```typescript
   import Link from 'next/link'
   
   export default function Home() {
     const calculators = [
       {
         title: '💕 커플 디데이',
         description: '100일, 500일, 1000일 기념일 계산',
         href: '/date/dday',
         color: 'bg-pink-500'
       },
       {
         title: '🎂 살아온 날',
         description: '생년월일로 총 일수 계산',
         href: '/date/birthday',
         color: 'bg-purple-500'
       },
       {
         title: '💰 연봉 계산기',
         description: '4대보험, 세금 제외 실수령액',
         href: '/salary',
         color: 'bg-blue-500'
       },
       {
         title: '🛍️ 쇼핑 계산기',
         description: '할인율, 부가세 계산',
         href: '/shopping',
         color: 'bg-green-500'
       }
     ]
   
     return (
       <div className="container mx-auto px-4 py-16">
         <div className="text-center mb-12">
           <h1 className="text-5xl font-bold mb-4">
             Easy Count
           </h1>
           <p className="text-xl text-gray-600">
             일상생활에 필요한 모든 계산을 한 곳에서
           </p>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {calculators.map((calc) => (
             <Link
               key={calc.href}
               href={calc.href}
               className="group"
             >
               <div className={`${calc.color} p-6 rounded-2xl text-white 
                             transition-transform duration-300 
                             hover:scale-105 hover:shadow-xl`}>
                 <h2 className="text-2xl font-bold mb-2">{calc.title}</h2>
                 <p className="text-white/90">{calc.description}</p>
               </div>
             </Link>
           ))}
         </div>
       </div>
     )
   }
   ```

6. 헤더 컴포넌트 (src/components/Header.tsx)
   ```typescript
   import Link from 'next/link'
   import Navigation from './Navigation'
   
   export default function Header() {
     return (
       <header className="bg-white shadow-sm">
         <div className="container mx-auto px-4">
           <div className="flex items-center justify-between h-16">
             <Link href="/" className="text-2xl font-bold text-indigo-600">
               Easy Count
             </Link>
             <Navigation />
           </div>
         </div>
       </header>
     )
   }
   ```

7. 네비게이션 (src/components/Navigation.tsx)
   ```typescript
   'use client'
   
   import Link from 'next/link'
   import { usePathname } from 'next/navigation'
   
   export default function Navigation() {
     const pathname = usePathname()
     
     const links = [
       { href: '/', label: '홈' },
       { href: '/date/dday', label: '디데이' },
       { href: '/date/birthday', label: '생일' },
       { href: '/salary', label: '연봉' },
       { href: '/shopping', label: '쇼핑' },
     ]
     
     return (
       <nav className="flex gap-4">
         {links.map((link) => {
           const isActive = pathname === link.href
           return (
             <Link
               key={link.href}
               href={link.href}
               className={`px-3 py-2 rounded-md transition-colors
                 ${isActive 
                   ? 'bg-indigo-600 text-white' 
                   : 'text-gray-700 hover:bg-gray-100'
                 }`}
             >
               {link.label}
             </Link>
           )
         })}
       </nav>
     )
   }
   ```

8. 디데이 계산기 페이지 (src/app/date/dday/page.tsx)
   ```typescript
   import DDayCalculator from '@/components/calculators/DDayCalculator'
   
   export default function DDayPage() {
     return (
       <div className="container mx-auto px-4 py-8">
         <h1 className="text-3xl font-bold mb-8 text-center">
           💕 커플 디데이 계산기
         </h1>
         <DDayCalculator />
       </div>
     )
   }
   ```

9. 디데이 계산기 컴포넌트 (src/components/calculators/DDayCalculator.tsx)
   ```typescript
   'use client'
   
   import { useState } from 'react'
   import { calculateDDay } from '@/lib/calculations/date'
   import { formatDate } from '@/lib/utils/format'
   import type { DDayResult } from '@/types'
   
   export default function DDayCalculator() {
     const [startDate, setStartDate] = useState('')
     const [result, setResult] = useState<DDayResult | null>(null)
     
     const handleCalculate = () => {
       if (!startDate) {
         alert('날짜를 입력해주세요!')
         return
       }
       
       const calculated = calculateDDay(new Date(startDate))
       setResult(calculated)
     }
     
     return (
       <div className="max-w-2xl mx-auto">
         <div className="bg-white rounded-2xl shadow-lg p-8">
           <div className="mb-6">
             <label className="block text-gray-700 font-medium mb-2">
               연애 시작일 (만난 날)
             </label>
             <input
               type="date"
               value={startDate}
               onChange={(e) => setStartDate(e.target.value)}
               className="w-full px-4 py-3 border border-gray-300 rounded-lg
                        focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
             />
           </div>
           
           <button
             onClick={handleCalculate}
             className="w-full bg-indigo-600 text-white py-3 rounded-lg
                      font-semibold hover:bg-indigo-700 transition-colors"
           >
             기념일 계산하기
           </button>
           
           {result && (
             <div className="mt-8 space-y-4">
               <h3 className="text-xl font-bold text-center mb-4">
                 💕 우리의 기념일
               </h3>
               {[
                 { days: 100, date: result.day100, daysTo: result.daysTo100 },
                 { days: 200, date: result.day200, daysTo: result.daysTo200 },
                 { days: 500, date: result.day500, daysTo: result.daysTo500 },
                 { days: 1000, date: result.day1000, daysTo: result.daysTo1000 },
               ].map((item) => (
                 <div key={item.days} 
                      className="flex justify-between items-center p-4 
                               bg-gray-50 rounded-lg">
                   <span className="font-medium">
                     💯 {item.days}일 기념일
                   </span>
                   <div className="text-right">
                     <div className="font-semibold">{formatDate(item.date)}</div>
                     <div className="text-sm text-gray-600">
                       {item.daysTo > 0 ? `D-${item.daysTo}` : `${Math.abs(item.daysTo)}일 전`}
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           )}
         </div>
       </div>
     )
   }
   ```

10. 날짜 계산 로직 (src/lib/calculations/date.ts)
    ```typescript
    import type { DDayResult, BirthdayResult } from '@/types'
    
    export function calculateDDay(startDate: Date): DDayResult {
      const today = new Date()
      
      const day100 = new Date(startDate)
      day100.setDate(startDate.getDate() + 100)
      
      const day200 = new Date(startDate)
      day200.setDate(startDate.getDate() + 200)
      
      const day500 = new Date(startDate)
      day500.setDate(startDate.getDate() + 500)
      
      const day1000 = new Date(startDate)
      day1000.setDate(startDate.getDate() + 1000)
      
      const getDaysTo = (targetDate: Date) => {
        const diff = targetDate.getTime() - today.getTime()
        return Math.ceil(diff / (1000 * 60 * 60 * 24))
      }
      
      return {
        day100,
        day200,
        day500,
        day1000,
        daysTo100: getDaysTo(day100),
        daysTo200: getDaysTo(day200),
        daysTo500: getDaysTo(day500),
        daysTo1000: getDaysTo(day1000),
      }
    }
    
    export function calculateBirthday(birthday: Date): BirthdayResult {
      const today = new Date()
      const diff = today.getTime() - birthday.getTime()
      
      const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24))
      const totalWeeks = Math.floor(totalDays / 7)
      const totalMonths = Math.floor(totalDays / 30.44)
      const totalYears = Math.floor(totalDays / 365.25)
      
      const nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate())
      if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1)
      }
      const daysToNextBirthday = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
      
      return {
        totalDays,
        totalWeeks,
        totalMonths,
        totalYears,
        daysToNextBirthday,
      }
    }
    ```

11. 포맷팅 유틸리티 (src/lib/utils/format.ts)
    ```typescript
    export function formatNumber(num: number): string {
      return num.toLocaleString('ko-KR')
    }
    
    export function formatCurrency(num: number): string {
      return `${formatNumber(num)}원`
    }
    
    export function formatDate(date: Date): string {
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      return `${year}년 ${month}월 ${day}일`
    }
    ```

실행:
```bash
cd lesson-06
pnpm dev
```

http://localhost:3000 접속!
```

## ✅ 완성 확인 사항

- [ ] Next.js 프로젝트가 정상 실행되는가?
- [ ] 페이지 간 이동이 부드럽게 작동하는가?
- [ ] TypeScript 타입 체크가 작동하는가?
- [ ] Tailwind CSS 스타일이 적용되는가?
- [ ] 모든 계산기가 정상 작동하는가?

## 📚 Next.js 핵심 개념

### 1. 파일 기반 라우팅
```
app/page.tsx           → /
app/date/dday/page.tsx → /date/dday
app/salary/page.tsx    → /salary
```

### 2. 서버 vs 클라이언트 컴포넌트
```typescript
// 서버 컴포넌트 (기본)
export default function Page() { ... }

// 클라이언트 컴포넌트
'use client'
export default function Calculator() { ... }
```

### 3. TypeScript 타입
```typescript
// 타입 정의
interface Props {
  name: string;
  age: number;
}

// 사용
function Component({ name, age }: Props) { ... }
```

## ⏭️ 다음 단계
Lesson 07에서는 SEO 최적화를 배우고 BMI 계산기를 추가합니다!

