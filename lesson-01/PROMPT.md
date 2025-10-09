# Lesson 01: 순수 HTML 계산기

## 🎯 학습 목표
- HTML 기본 구조 이해하기
- Form 요소 사용법 익히기
- 날짜 입력 필드 활용하기
- 가장 간단한 계산기 UI 만들기

## 📚 배울 내용
1. HTML 문서의 기본 구조 (`<!DOCTYPE>`, `<html>`, `<head>`, `<body>`)
2. 메타 태그와 문자 인코딩
3. 제목 태그 (`<h1>`, `<h2>`)
4. 입력 폼 (`<form>`, `<input>`, `<button>`)
5. 날짜 입력 타입 (`<input type="date">`)
6. 시맨틱 HTML 태그

## 🚀 실습 프롬프트

```
순수 HTML만으로 작동하는 "100일 계산기" 웹 페이지를 만들어주세요.

요구사항:

1. 파일명: index.html

2. HTML 기본 구조:
   - DOCTYPE 선언
   - html 태그 (lang="ko")
   - head 섹션:
     * meta charset="UTF-8"
     * meta viewport (모바일 대응)
     * title 태그
   - body 섹션

3. 페이지 내용:
   - 제목: "100일 계산기" (<h1> 태그)
   - 부제목: "연애 시작일을 입력하세요" (<p> 태그)
   - 입력 폼:
     * 시작 날짜 입력 필드 (<input type="date">)
     * 라벨 추가 (<label>)
     * 계산 버튼 (<button>)
   - 결과 표시 영역:
     * 빈 div 또는 p 태그 (id="result")
     * "계산 결과가 여기 표시됩니다" 안내 문구

4. 주석 작성:
   - 각 섹션의 시작과 끝에 한글 주석
   - 중요한 태그에 설명 추가
   - 예: <!-- 페이지 제목 영역 -->

5. 코드 스타일:
   - 들여쓰기: 2칸 또는 4칸 일관성 유지
   - 태그는 소문자로 작성
   - 속성값은 쌍따옴표 사용

주의사항:
- JavaScript를 사용하지 마세요
- CSS를 사용하지 마세요 (인라인 스타일도 금지)
- 순수 HTML 구조만 작성하세요
- 계산 기능은 다음 단계에서 구현합니다

완성 후:
- 브라우저에서 index.html 파일을 열어보세요
- 날짜 입력 필드가 제대로 표시되는지 확인하세요
```

## ✅ 완성 예시 구조

```
HTML 문서
├── DOCTYPE 선언
├── html (lang="ko")
│   ├── head
│   │   ├── meta charset
│   │   ├── meta viewport
│   │   └── title
│   └── body
│       ├── h1 (제목)
│       ├── p (설명)
│       ├── form
│       │   ├── label
│       │   ├── input[type=date]
│       │   └── button
│       └── div#result
```

## 🔍 학습 확인 사항

이 단계를 마치면 다음을 할 수 있어야 합니다:
- [ ] HTML 기본 구조를 외우고 작성할 수 있다
- [ ] form 태그의 역할을 설명할 수 있다
- [ ] input 태그의 다양한 type을 알고 있다
- [ ] 브라우저에서 HTML 파일을 열 수 있다
- [ ] 개발자 도구(F12)를 열어 HTML 구조를 확인할 수 있다

## 📖 참고 자료
- [MDN HTML 기초](https://developer.mozilla.org/ko/docs/Learn/HTML)
- [HTML 입력 타입](https://developer.mozilla.org/ko/docs/Web/HTML/Element/input)

## ⏭️ 다음 단계
Lesson 02에서는 JavaScript를 추가하여 실제로 날짜를 계산하는 기능을 구현합니다!

