# Lesson 02: JavaScript로 100일, 500일, 1000일 계산하기

## 🎯 학습 목표
- JavaScript 기본 문법 익히기
- Date 객체로 날짜 계산하기
- DOM 조작 (화면에 결과 표시)
- 이벤트 리스너로 버튼 클릭 처리

## 📚 배울 내용
1. JavaScript 변수 (const, let)
2. 함수 만들기
3. Date 객체 사용법
4. DOM 요소 선택 (querySelector)
5. 이벤트 리스너 (addEventListener)
6. 템플릿 리터럴 (`${변수}`)

## 🚀 실습 프롬프트

```
lesson-02 폴더에 JavaScript로 작동하는 "커플 기념일 계산기"를 만들어주세요.

요구사항:

1. HTML 파일 (index.html)
   - 제목: "커플 기념일 계산기 - 100일, 500일, 1000일"
   - 설명: "연애 시작일을 입력하면 모든 기념일을 계산해드립니다!"
   - 입력 필드:
     * 라벨: "연애 시작일 (만난 날)"
     * input type="date" id="startDate"
   - 계산 버튼: <button id="calculateBtn">기념일 계산하기</button>
   - 결과 영역: <div id="result"></div>

2. JavaScript 파일 (script.js)
   
   a) 기념일 계산 함수:
   ```javascript
   function calculateAnniversaries(startDate) {
     const start = new Date(startDate);
     const today = new Date();
     
     // 기념일 날짜 계산
     const day100 = new Date(start);
     day100.setDate(start.getDate() + 100);
     
     const day200 = new Date(start);
     day200.setDate(start.getDate() + 200);
     
     const day500 = new Date(start);
     day500.setDate(start.getDate() + 500);
     
     const day1000 = new Date(start);
     day1000.setDate(start.getDate() + 1000);
     
     // D-day 계산 (남은 일수 또는 경과 일수)
     // ...
     
     return { day100, day200, day500, day1000 };
   }
   ```
   
   b) 날짜 포맷팅 함수:
   ```javascript
   function formatDate(date) {
     const year = date.getFullYear();
     const month = date.getMonth() + 1;
     const day = date.getDate();
     return `${year}년 ${month}월 ${day}일`;
   }
   ```
   
   c) D-day 계산 함수:
   ```javascript
   function getDday(targetDate) {
     const today = new Date();
     const diff = targetDate - today;
     const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
     
     if (days > 0) {
       return `D-${days}`;
     } else if (days === 0) {
       return "D-day!";
     } else {
       return `${Math.abs(days)}일 전`;
     }
   }
   ```
   
   d) 이벤트 리스너:
   ```javascript
   document.getElementById('calculateBtn').addEventListener('click', () => {
     const startDate = document.getElementById('startDate').value;
     
     if (!startDate) {
       alert('연애 시작일을 입력해주세요!');
       return;
     }
     
     const result = calculateAnniversaries(startDate);
     displayResult(result);
   });
   ```
   
   e) 결과 표시 함수:
   ```javascript
   function displayResult(result) {
     const resultDiv = document.getElementById('result');
     resultDiv.innerHTML = `
       <h3>💕 우리의 기념일</h3>
       <p>💯 100일: ${formatDate(result.day100)} (${getDday(result.day100)})</p>
       <p>💯 200일: ${formatDate(result.day200)} (${getDday(result.day200)})</p>
       <p>🎉 500일: ${formatDate(result.day500)} (${getDday(result.day500)})</p>
       <p>🎊 1000일: ${formatDate(result.day1000)} (${getDday(result.day1000)})</p>
     `;
   }
   ```

3. 표시 예시:
   ```
   💕 우리의 기념일
   
   💯 100일: 2025년 1월 15일 (D-30)
   💯 200일: 2025년 4월 25일 (D-130)
   🎉 500일: 2026년 3월 12일 (D-430)
   🎊 1000일: 2027년 8월 27일 (D-1005)
   ```

4. 추가 기능:
   - 입력값 유효성 검증 (날짜 비어있는지 체크)
   - 미래 날짜 입력 시 경고 메시지
   - 이미 지난 기념일은 "✅ 100일: 2024년 1월 15일 (50일 전)" 형식으로 표시

파일 구조:
lesson-02/
  ├── index.html
  └── script.js

완성 후:
- 브라우저에서 index.html 열기
- 날짜 입력 → 계산 버튼 클릭 → 결과 확인
- F12 개발자 도구로 JavaScript 동작 확인
```

## ✅ 완성 확인 사항

이 단계를 마치면 다음을 할 수 있어야 합니다:
- [ ] JavaScript 파일을 HTML에 연결할 수 있다
- [ ] Date 객체로 날짜를 계산할 수 있다
- [ ] 버튼 클릭 이벤트를 처리할 수 있다
- [ ] 계산 결과를 화면에 표시할 수 있다
- [ ] 조건문으로 입력값을 검증할 수 있다

## 🐛 디버깅 팁
- `console.log()`로 변수값 확인하기
- F12 개발자 도구 Console 탭 활용
- 오류 메시지 읽는 법 익히기

## 📖 참고 자료
- [JavaScript Date 객체](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [addEventListener](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener)

## ⏭️ 다음 단계
Lesson 03에서는 CSS로 예쁘게 디자인하고, 살아온 날 계산기를 추가합니다!

