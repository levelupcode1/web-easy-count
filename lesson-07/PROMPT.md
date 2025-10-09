# Lesson 07: SEO 최적화 + BMI 계산기

## 🎯 학습 목표
- SEO가 무엇이고 왜 중요한지 이해하기
- Next.js Metadata API 활용하기
- 구조화된 데이터 (JSON-LD) 적용하기
- sitemap.xml과 robots.txt 생성하기
- Open Graph 태그로 SNS 최적화하기
- BMI 계산기 추가하며 기능 확장하기

## 📚 배울 내용
1. SEO의 중요성
2. 메타 태그 최적화
3. Open Graph Protocol
4. JSON-LD 구조화된 데이터
5. sitemap과 robots 설정
6. BMI 계산 로직

## 🚀 실습 프롬프트

```
lesson-07 폴더에 Lesson 06을 복사하고 SEO를 최적화하며 
BMI 계산기를 추가하세요.

요구사항:

1. 프로젝트 준비
   ```bash
   # Lesson 06을 lesson-07로 복사
   cp -r lesson-06 lesson-07
   cd lesson-07
   pnpm install
   ```

2. 메타 태그 최적화
   
   a) 루트 레이아웃 (src/app/layout.tsx)
   ```typescript
   import type { Metadata } from 'next'
   
   export const metadata: Metadata = {
     title: {
       default: 'Easy Count - 생활 계산기',
       template: '%s | Easy Count'
     },
     description: '날짜, 급여, 할인율, BMI 등 일상생활에 필요한 모든 계산을 한 곳에서! 무료 온라인 계산기.',
     keywords: ['계산기', '날짜계산', '연봉계산', '디데이', '할인율', 'BMI', '실수령액'],
     authors: [{ name: 'Easy Count' }],
     creator: 'Easy Count',
     publisher: 'Easy Count',
     formatDetection: {
       email: false,
       address: false,
       telephone: false,
     },
     metadataBase: new URL('https://easycount.com'),
     alternates: {
       canonical: '/',
     },
     openGraph: {
       type: 'website',
       locale: 'ko_KR',
       url: 'https://easycount.com',
       title: 'Easy Count - 생활 계산기',
       description: '일상생활에 필요한 모든 계산을 한 곳에서!',
       siteName: 'Easy Count',
     },
     twitter: {
       card: 'summary_large_image',
       title: 'Easy Count - 생활 계산기',
       description: '일상생활에 필요한 모든 계산을 한 곳에서!',
     },
     robots: {
       index: true,
       follow: true,
       googleBot: {
         index: true,
         follow: true,
         'max-video-preview': -1,
         'max-image-preview': 'large',
         'max-snippet': -1,
       },
     },
   }
   ```
   
   b) 디데이 계산기 페이지 메타 (src/app/date/dday/page.tsx)
   ```typescript
   import type { Metadata } from 'next'
   import DDayCalculator from '@/components/calculators/DDayCalculator'
   
   export const metadata: Metadata = {
     title: '100일 계산기 - 커플 디데이 기념일 계산',
     description: '연애 시작일을 입력하면 100일, 200일, 500일, 1000일 기념일 날짜를 자동으로 계산해드립니다. 커플 필수 계산기!',
     keywords: ['100일계산기', '디데이계산기', '커플기념일', '연애기념일', '1000일'],
     openGraph: {
       title: '100일 계산기 - 커플 디데이',
       description: '연애 기념일을 놓치지 마세요!',
       type: 'website',
       url: '/date/dday',
     },
     alternates: {
       canonical: '/date/dday',
     },
   }
   
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
   
   c) 연봉 계산기 페이지 메타 (src/app/salary/page.tsx)
   ```typescript
   export const metadata: Metadata = {
     title: '연봉 실수령액 계산기 - 4대보험·세금 제외 월급 계산',
     description: '연봉을 입력하면 4대보험, 소득세를 제외한 실제 월 수령액을 정확하게 계산해드립니다. 2025년 최신 세율 적용.',
     keywords: ['연봉계산기', '실수령액', '월급계산', '4대보험', '소득세', '세후급여'],
     openGraph: {
       title: '연봉 실수령액 계산기',
       description: '정확한 월 실수령액을 확인하세요!',
       url: '/salary',
     },
   }
   ```

3. JSON-LD 구조화된 데이터
   
   a) 홈페이지 (src/app/page.tsx)
   ```typescript
   export default function Home() {
     const jsonLd = {
       '@context': 'https://schema.org',
       '@type': 'WebApplication',
       name: 'Easy Count',
       description: '날짜 계산, 급여 계산, 할인율 계산 등 생활 계산기 서비스',
       url: 'https://easycount.com',
       applicationCategory: 'UtilityApplication',
       operatingSystem: 'All',
       offers: {
         '@type': 'Offer',
         price: '0',
         priceCurrency: 'KRW',
       },
       aggregateRating: {
         '@type': 'AggregateRating',
         ratingValue: '4.8',
         reviewCount: '1250',
       },
     }
   
     return (
       <>
         <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
         />
         <div className="container mx-auto px-4 py-16">
           {/* ... 기존 내용 ... */}
         </div>
       </>
     )
   }
   ```
   
   b) 계산기 페이지용 JSON-LD
   ```typescript
   // src/app/date/dday/page.tsx
   export default function DDayPage() {
     const jsonLd = {
       '@context': 'https://schema.org',
       '@type': 'SoftwareApplication',
       name: '100일 계산기',
       applicationCategory: 'UtilityApplication',
       description: '커플 기념일 계산기',
       offers: {
         '@type': 'Offer',
         price: '0',
       },
     }
   
     return (
       <>
         <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
         />
         {/* ... 기존 내용 ... */}
       </>
     )
   }
   ```

4. sitemap.xml 생성 (src/app/sitemap.ts)
   ```typescript
   import { MetadataRoute } from 'next'
   
   export default function sitemap(): MetadataRoute.Sitemap {
     const baseUrl = 'https://easycount.com'
     
     return [
       {
         url: baseUrl,
         lastModified: new Date(),
         changeFrequency: 'weekly',
         priority: 1,
       },
       {
         url: `${baseUrl}/date/dday`,
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 0.9,
       },
       {
         url: `${baseUrl}/date/birthday`,
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 0.9,
       },
       {
         url: `${baseUrl}/salary`,
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 0.9,
       },
       {
         url: `${baseUrl}/shopping`,
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 0.8,
       },
       {
         url: `${baseUrl}/health/bmi`,
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 0.8,
       },
     ]
   }
   ```

5. robots.txt 생성 (src/app/robots.ts)
   ```typescript
   import { MetadataRoute } from 'next'
   
   export default function robots(): MetadataRoute.Robots {
     return {
       rules: {
         userAgent: '*',
         allow: '/',
         disallow: '/api/',
       },
       sitemap: 'https://easycount.com/sitemap.xml',
     }
   }
   ```

6. BMI 계산기 추가
   
   a) 타입 정의 (src/types/index.ts에 추가)
   ```typescript
   export interface BMIResult {
     bmi: number;
     category: string;
     status: 'underweight' | 'normal' | 'overweight' | 'obese';
     healthyWeightRange: {
       min: number;
       max: number;
     };
     weightDifference: number;
     recommendation: string;
   }
   ```
   
   b) BMI 계산 로직 (src/lib/calculations/health.ts)
   ```typescript
   import type { BMIResult } from '@/types'
   
   export function calculateBMI(height: number, weight: number): BMIResult {
     // height는 cm, weight는 kg
     const heightInMeters = height / 100
     const bmi = weight / (heightInMeters ** 2)
     
     // BMI 분류 (WHO 기준)
     let category: string
     let status: BMIResult['status']
     let recommendation: string
     
     if (bmi < 18.5) {
       category = '저체중'
       status = 'underweight'
       recommendation = '균형잡힌 식사와 근력 운동을 통해 건강한 체중을 유지하세요.'
     } else if (bmi < 23) {
       category = '정상'
       status = 'normal'
       recommendation = '현재 체중을 잘 유지하고 있습니다. 꾸준한 운동과 건강한 식습관을 이어가세요!'
     } else if (bmi < 25) {
       category = '과체중'
       status = 'overweight'
       recommendation = '규칙적인 운동과 식이 조절로 건강한 체중으로 돌아가세요.'
     } else {
       category = '비만'
       status = 'obese'
       recommendation = '건강을 위해 체중 감량을 권장합니다. 전문가와 상담하세요.'
     }
     
     // 건강 체중 범위 (BMI 18.5 ~ 23)
     const healthyWeightRange = {
       min: Math.round(18.5 * (heightInMeters ** 2)),
       max: Math.round(23 * (heightInMeters ** 2)),
     }
     
     // 적정 체중과의 차이
     let weightDifference: number
     if (weight < healthyWeightRange.min) {
       weightDifference = healthyWeightRange.min - weight
     } else if (weight > healthyWeightRange.max) {
       weightDifference = weight - healthyWeightRange.max
     } else {
       weightDifference = 0
     }
     
     return {
       bmi: Math.round(bmi * 10) / 10,
       category,
       status,
       healthyWeightRange,
       weightDifference,
       recommendation,
     }
   }
   ```
   
   c) BMI 페이지 (src/app/health/bmi/page.tsx)
   ```typescript
   import type { Metadata } from 'next'
   import BMICalculator from '@/components/calculators/BMICalculator'
   
   export const metadata: Metadata = {
     title: 'BMI 계산기 - 체질량지수 및 적정 체중 계산',
     description: '키와 몸무게를 입력하면 BMI 지수와 건강 상태를 확인할 수 있습니다. 적정 체중 범위도 함께 제공합니다.',
     keywords: ['BMI계산기', '체질량지수', 'BMI', '적정체중', '비만도', '건강'],
   }
   
   export default function BMIPage() {
     return (
       <div className="container mx-auto px-4 py-8">
         <h1 className="text-3xl font-bold mb-8 text-center">
           💪 BMI 계산기
         </h1>
         <BMICalculator />
       </div>
     )
   }
   ```
   
   d) BMI 계산기 컴포넌트 (src/components/calculators/BMICalculator.tsx)
   ```typescript
   'use client'
   
   import { useState } from 'react'
   import { calculateBMI } from '@/lib/calculations/health'
   import type { BMIResult } from '@/types'
   
   export default function BMICalculator() {
     const [height, setHeight] = useState('')
     const [weight, setWeight] = useState('')
     const [result, setResult] = useState<BMIResult | null>(null)
     
     const handleCalculate = () => {
       const h = parseFloat(height)
       const w = parseFloat(weight)
       
       if (!h || h <= 0 || !w || w <= 0) {
         alert('키와 몸무게를 올바르게 입력해주세요!')
         return
       }
       
       const calculated = calculateBMI(h, w)
       setResult(calculated)
     }
     
     const getStatusColor = (status: BMIResult['status']) => {
       const colors = {
         underweight: 'bg-blue-100 text-blue-800',
         normal: 'bg-green-100 text-green-800',
         overweight: 'bg-yellow-100 text-yellow-800',
         obese: 'bg-red-100 text-red-800',
       }
       return colors[status]
     }
     
     return (
       <div className="max-w-2xl mx-auto">
         <div className="bg-white rounded-2xl shadow-lg p-8">
           <div className="grid grid-cols-2 gap-4 mb-6">
             <div>
               <label className="block text-gray-700 font-medium mb-2">
                 키 (cm)
               </label>
               <input
                 type="number"
                 value={height}
                 onChange={(e) => setHeight(e.target.value)}
                 placeholder="170"
                 className="w-full px-4 py-3 border border-gray-300 rounded-lg"
               />
             </div>
             <div>
               <label className="block text-gray-700 font-medium mb-2">
                 몸무게 (kg)
               </label>
               <input
                 type="number"
                 value={weight}
                 onChange={(e) => setWeight(e.target.value)}
                 placeholder="65"
                 className="w-full px-4 py-3 border border-gray-300 rounded-lg"
               />
             </div>
           </div>
           
           <button
             onClick={handleCalculate}
             className="w-full bg-indigo-600 text-white py-3 rounded-lg
                      font-semibold hover:bg-indigo-700"
           >
             BMI 계산하기
           </button>
           
           {result && (
             <div className="mt-8">
               <div className="text-center mb-6">
                 <div className="text-5xl font-bold text-indigo-600 mb-2">
                   {result.bmi}
                 </div>
                 <div className={`inline-block px-4 py-2 rounded-full font-semibold
                               ${getStatusColor(result.status)}`}>
                   {result.category}
                 </div>
               </div>
               
               <div className="space-y-4">
                 <div className="bg-gray-50 p-4 rounded-lg">
                   <div className="text-sm text-gray-600 mb-1">적정 체중 범위</div>
                   <div className="font-semibold">
                     {result.healthyWeightRange.min}kg ~ {result.healthyWeightRange.max}kg
                   </div>
                 </div>
                 
                 {result.weightDifference > 0 && (
                   <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                     <div className="font-medium text-yellow-800">
                       {result.status === 'underweight' 
                         ? `${result.weightDifference}kg 증량 권장`
                         : `${result.weightDifference}kg 감량 권장`
                       }
                     </div>
                   </div>
                 )}
                 
                 <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                   <div className="text-sm text-blue-800">
                     💡 {result.recommendation}
                   </div>
                 </div>
               </div>
             </div>
           )}
         </div>
       </div>
     )
   }
   ```

7. 홈페이지에 BMI 계산기 추가
   ```typescript
   // src/app/page.tsx의 calculators 배열에 추가
   {
     title: '💪 BMI 계산기',
     description: '체질량지수와 적정 체중 계산',
     href: '/health/bmi',
     color: 'bg-orange-500'
   }
   ```

실행 및 SEO 확인:
```bash
pnpm dev
```

SEO 도구로 확인:
1. http://localhost:3000/sitemap.xml 접속
2. http://localhost:3000/robots.txt 접속
3. 페이지 소스 보기 (Ctrl+U)로 메타 태그 확인
```

## ✅ 완성 확인 사항

- [ ] sitemap.xml이 생성되는가?
- [ ] robots.txt가 생성되는가?
- [ ] 각 페이지에 고유한 title과 description이 있는가?
- [ ] JSON-LD가 페이지 소스에 표시되는가?
- [ ] BMI 계산기가 정상 작동하는가?
- [ ] Open Graph 태그가 올바르게 설정되었는가?

## 📊 SEO 성과 측정

### Google Search Console
1. https://search.google.com/search-console 접속
2. 속성 추가 → URL 입력
3. sitemap.xml 제출
4. 색인 생성 요청

### 확인 사항
- 검색 노출 수
- 클릭률 (CTR)
- 평균 게재 순위

## ⏭️ 다음 단계
Lesson 08에서는 Vercel에 실제 배포하고 GPA 계산기를 추가합니다!

