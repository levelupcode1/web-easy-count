# Lesson 03: CSS 디자인 + 살아온 날 계산기 추가

## 🎯 학습 목표
- CSS로 아름다운 UI 만들기
- Flexbox 레이아웃 활용
- 반응형 디자인 (모바일 대응)
- 두 번째 계산기 추가하기

## 📚 배울 내용
1. CSS Flexbox
2. 카드 디자인 (box-shadow, border-radius)
3. 버튼 스타일링 (hover, active)
4. 색상 팔레트 정의
5. 반응형 미디어 쿼리
6. 여러 계산기 통합

## 🚀 실습 프롬프트

```
lesson-03 폴더에 CSS로 디자인된 2개의 계산기를 만들어주세요.

요구사항:

1. HTML 파일 (index.html)
   - 헤더: "Easy Count - 생활 계산기"
   - 2개의 섹션 (카드 형태로 나란히 배치):
     a) 커플 기념일 계산기 (Lesson 02)
     b) 살아온 날 계산기 (새로 추가)
   
   구조:
   ```html
   <body>
     <header>
       <h1>Easy Count</h1>
       <p>생활에 필요한 모든 계산</p>
     </header>
     
     <main class="container">
       <!-- 계산기 1: 커플 기념일 -->
       <section class="card">
         <h2>💕 커플 기념일 계산기</h2>
         <!-- 입력 폼 -->
         <!-- 결과 표시 -->
       </section>
       
       <!-- 계산기 2: 살아온 날 -->
       <section class="card">
         <h2>🎂 살아온 날 계산기</h2>
         <!-- 입력 폼 -->
         <!-- 결과 표시 -->
       </section>
     </main>
     
     <footer>
       <p>© 2025 Easy Count</p>
     </footer>
   </body>
   ```

2. CSS 파일 (styles.css)
   
   a) 기본 스타일:
   ```css
   /* CSS 변수 정의 */
   :root {
     --primary-color: #4F46E5;
     --secondary-color: #F3F4F6;
     --accent-color: #10B981;
     --text-color: #1F2937;
     --border-radius: 16px;
   }
   
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   
   body {
     font-family: 'Pretendard', -apple-system, sans-serif;
     background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
     color: var(--text-color);
     min-height: 100vh;
   }
   ```
   
   b) 레이아웃:
   ```css
   .container {
     max-width: 1200px;
     margin: 0 auto;
     padding: 40px 20px;
     display: flex;
     gap: 30px;
   }
   
   /* 모바일: 세로 배치 */
   @media (max-width: 768px) {
     .container {
       flex-direction: column;
     }
   }
   ```
   
   c) 카드 스타일:
   ```css
   .card {
     background: white;
     border-radius: var(--border-radius);
     padding: 30px;
     box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
     flex: 1;
     transition: transform 0.3s ease;
   }
   
   .card:hover {
     transform: translateY(-5px);
     box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
   }
   ```
   
   d) 입력 필드:
   ```css
   input[type="date"] {
     width: 100%;
     padding: 12px 16px;
     border: 2px solid var(--secondary-color);
     border-radius: 8px;
     font-size: 16px;
     transition: border-color 0.3s;
   }
   
   input:focus {
     outline: none;
     border-color: var(--primary-color);
   }
   ```
   
   e) 버튼:
   ```css
   button {
     width: 100%;
     padding: 14px 24px;
     background: var(--primary-color);
     color: white;
     border: none;
     border-radius: 8px;
     font-size: 16px;
     font-weight: 600;
     cursor: pointer;
     transition: all 0.3s;
   }
   
   button:hover {
     background: #4338CA;
     transform: translateY(-2px);
   }
   
   button:active {
     transform: translateY(0);
   }
   ```

3. JavaScript 파일 (script.js)
   
   a) 살아온 날 계산 함수 추가:
   ```javascript
   function calculateLivedDays(birthday) {
     const birth = new Date(birthday);
     const today = new Date();
     
     // 밀리초 차이 계산
     const diff = today - birth;
     
     // 일수 계산
     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
     
     // 주수 계산
     const weeks = Math.floor(days / 7);
     
     // 개월수 계산 (대략)
     const months = Math.floor(days / 30.44);
     
     // 년수 계산
     const years = Math.floor(days / 365.25);
     
     // 다음 생일까지 남은 일수
     const nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
     if (nextBirthday < today) {
       nextBirthday.setFullYear(today.getFullYear() + 1);
     }
     const daysToNextBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
     
     return { days, weeks, months, years, daysToNextBirthday };
   }
   ```
   
   b) 결과 표시:
   ```javascript
   function displayLivedDays(result) {
     const resultDiv = document.getElementById('livedResult');
     resultDiv.innerHTML = `
       <div class="result-box">
         <h3>🎂 당신은 지금까지...</h3>
         <p class="stat">📅 총 <strong>${result.days.toLocaleString()}일</strong>을 살았습니다</p>
         <p class="stat">📆 약 <strong>${result.weeks.toLocaleString()}주</strong>를 살았습니다</p>
         <p class="stat">🗓️ 약 <strong>${result.months}개월</strong>을 살았습니다</p>
         <p class="stat">🎉 약 <strong>${result.years}년</strong>을 살았습니다</p>
         <p class="next-birthday">다음 생일까지 ${result.daysToNextBirthday}일 남았습니다!</p>
       </div>
     `;
   }
   ```

4. 결과 영역 스타일:
   ```css
   .result-box {
     margin-top: 20px;
     padding: 20px;
     background: var(--secondary-color);
     border-radius: 12px;
   }
   
   .stat {
     font-size: 18px;
     margin: 12px 0;
     line-height: 1.6;
   }
   
   .stat strong {
     color: var(--primary-color);
     font-size: 24px;
   }
   
   .next-birthday {
     margin-top: 20px;
     padding: 12px;
     background: var(--accent-color);
     color: white;
     border-radius: 8px;
     text-align: center;
     font-weight: 600;
   }
   ```

파일 구조:
lesson-03/
  ├── index.html
  ├── styles.css
  └── script.js

완성 후:
- 아름다운 카드 디자인 확인
- 모바일에서도 잘 보이는지 확인 (브라우저 창 크기 조절)
- 두 계산기 모두 정상 작동 확인
```

## ✅ 완성 확인 사항

- [ ] CSS 파일을 HTML에 연결할 수 있다
- [ ] Flexbox로 레이아웃을 만들 수 있다
- [ ] 반응형 디자인을 구현할 수 있다
- [ ] 두 개의 독립적인 계산기를 만들 수 있다
- [ ] 숫자에 천단위 콤마를 표시할 수 있다 (toLocaleString())

## 🎨 디자인 팁
- Chrome 개발자 도구 (F12)로 스타일 실시간 수정
- 색상 조합은 [Coolors](https://coolors.co) 참고
- 아이콘은 이모지로 간단하게!

## ⏭️ 다음 단계
Lesson 04에서는 연봉 실수령액 계산기를 만들며 복잡한 계산 로직을 배웁니다!

