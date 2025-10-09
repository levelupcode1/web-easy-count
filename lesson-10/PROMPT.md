# Lesson 10: GitHub & CI/CD 자동 배포

## 🎯 학습 목표
- Git 기본 명령어 마스터하기
- GitHub 저장소 관리하기
- 브랜치 전략 이해하기
- Pull Request 워크플로우 익히기
- GitHub Actions로 CI/CD 구축하기
- 자동 배포 파이프라인 만들기

## 📚 배울 내용
1. Git이 왜 필요한가?
2. 버전 관리의 중요성
3. GitHub 협업 방법
4. Conventional Commits
5. GitHub Actions 워크플로우
6. 자동 테스트와 배포

## 🚀 실습 프롬프트

```
lesson-10 폴더에 Lesson 09를 복사하고 GitHub 저장소를 만들어 
CI/CD 파이프라인을 구축하세요.

요구사항:

1. Git 초기 설정
   ```bash
   # Git 버전 확인
   git --version
   
   # 사용자 정보 설정 (처음 한 번만)
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   
   # 기본 브랜치 이름 설정
   git config --global init.defaultBranch main
   
   # 설정 확인
   git config --list
   ```

2. .gitignore 파일 생성
   ```gitignore
   # See https://help.github.com/articles/ignoring-files/ for more about ignoring files.
   
   # dependencies
   /node_modules
   /.pnp
   .pnp.js
   
   # testing
   /coverage
   
   # next.js
   /.next/
   /out/
   
   # production
   /build
   
   # misc
   .DS_Store
   *.pem
   
   # debug
   npm-debug.log*
   yarn-debug.log*
   yarn-error.log*
   pnpm-debug.log*
   
   # local env files
   .env
   .env*.local
   .env.production
   
   # vercel
   .vercel
   
   # typescript
   *.tsbuildinfo
   next-env.d.ts
   ```

3. README.md 작성
   ```markdown
   # Easy Count - 생활 계산기
   
   일상생활에 필요한 다양한 계산을 한 곳에서!
   
   [![Vercel](https://img.shields.io/badge/Deploy-Vercel-black)](https://vercel.com)
   [![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
   [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
   
   ## 🚀 기능
   
   - 💕 **커플 디데이** - 100일, 500일, 1000일 기념일 계산
   - 🎂 **살아온 날** - 생년월일로 총 일수 계산
   - 💰 **연봉 계산기** - 4대보험, 세금 제외 실수령액
   - 🛍️ **쇼핑 계산기** - 할인율, 부가세 계산
   - 💪 **BMI 계산기** - 체질량지수 및 적정 체중
   - 📚 **학점 계산기** - GPA 평점 계산
   
   ## 🛠️ 기술 스택
   
   - **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
   - **Language**: [TypeScript](https://www.typescriptlang.org/)
   - **Styling**: [Tailwind CSS](https://tailwindcss.com/)
   - **Database**: [Supabase](https://supabase.com/)
   - **Authentication**: Supabase Auth
   - **Deployment**: [Vercel](https://vercel.com/)
   - **CI/CD**: GitHub Actions
   
   ## 📦 설치 및 실행
   
   ### 필수 요구사항
   - Node.js 18+
   - pnpm 8+
   
   ### 설치
   ```bash
   # 저장소 클론
   git clone https://github.com/your-username/easy-count.git
   cd easy-count
   
   # 의존성 설치
   pnpm install
   
   # 환경 변수 설정
   cp .env.example .env.local
   # .env.local 파일을 열어 Supabase 키 등 입력
   
   # 개발 서버 실행
   pnpm dev
   ```
   
   브라우저에서 http://localhost:3000 열기
   
   ## 🌍 환경 변수
   
   ```.env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
   
   ## 📝 스크립트
   
   - `pnpm dev` - 개발 서버 실행
   - `pnpm build` - 프로덕션 빌드
   - `pnpm start` - 프로덕션 서버 실행
   - `pnpm lint` - ESLint 검사
   
   ## 🤝 기여하기
   
   1. Fork the Project
   2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
   3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
   4. Push to the Branch (`git push origin feature/AmazingFeature`)
   5. Open a Pull Request
   
   ## 📄 라이선스
   
   MIT License
   
   ## 👤 작성자
   
   Your Name - [@yourtwitter](https://twitter.com/yourtwitter)
   
   프로젝트 링크: [https://github.com/your-username/easy-count](https://github.com/your-username/easy-count)
   
   ## 🙏 감사의 말
   
   - [Next.js](https://nextjs.org/)
   - [Supabase](https://supabase.com/)
   - [Tailwind CSS](https://tailwindcss.com/)
   - [Vercel](https://vercel.com/)
   ```

4. Git 저장소 초기화 및 첫 커밋
   ```bash
   cd lesson-10
   
   # Git 저장소 초기화
   git init
   
   # 모든 파일 스테이징
   git add .
   
   # 첫 커밋
   git commit -m "feat: initial commit - Easy Count 프로젝트 시작"
   
   # 브랜치 이름 확인 (main인지 확인)
   git branch
   ```

5. GitHub 저장소 생성 및 연결
   ```bash
   # GitHub에서 새 저장소 생성
   # - https://github.com/new 접속
   # - Repository name: easy-count
   # - Public 또는 Private 선택
   # - README, .gitignore 체크 안 함 (이미 있으므로)
   # - Create repository 클릭
   
   # 원격 저장소 추가
   git remote add origin https://github.com/your-username/easy-count.git
   
   # 확인
   git remote -v
   
   # GitHub에 푸시
   git push -u origin main
   ```

6. Conventional Commits 규칙
   
   커밋 메시지 형식: `<type>(<scope>): <subject>`
   
   타입:
   - `feat`: 새로운 기능
   - `fix`: 버그 수정
   - `docs`: 문서 변경
   - `style`: 코드 포맷팅 (기능 변경 없음)
   - `refactor`: 리팩토링
   - `test`: 테스트 추가
   - `chore`: 빌드, 설정 변경
   
   예시:
   ```bash
   git commit -m "feat(calculator): 100일 계산기 추가"
   git commit -m "fix(salary): 세금 계산 오류 수정"
   git commit -m "docs(readme): 설치 방법 추가"
   git commit -m "style(format): Prettier 적용"
   git commit -m "refactor(date): 날짜 계산 로직 개선"
   git commit -m "test(calculator): 유닛 테스트 추가"
   git commit -m "chore(deps): Next.js 14.1로 업데이트"
   ```

7. GitHub Actions CI/CD 설정
   
   a) 워크플로우 파일 생성
   ```bash
   mkdir -p .github/workflows
   ```
   
   b) CI 워크플로우 (.github/workflows/ci.yml)
   ```yaml
   name: CI
   
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
   ```
   
   c) GitHub Secrets 설정
   ```
   GitHub 저장소 → Settings → Secrets and variables → Actions
   
   "New repository secret" 클릭하여 추가:
   - NEXT_PUBLIC_SUPABASE_URL: your-supabase-url
   - NEXT_PUBLIC_SUPABASE_ANON_KEY: your-supabase-anon-key
   ```

8. Vercel 자동 배포 설정
   
   a) Vercel GitHub 연동
   - Vercel 대시보드 → Settings → Git
   - GitHub 저장소 연결
   - main 브랜치 푸시 시 자동 배포
   
   b) 환경 변수 설정
   - Vercel 프로젝트 → Settings → Environment Variables
   - GitHub Secrets과 동일하게 설정

9. 브랜치 전략 (Git Flow 간소화)
   
   ```bash
   # develop 브랜치 생성
   git checkout -b develop
   git push -u origin develop
   
   # 새 기능 개발
   git checkout -b feature/new-calculator
   
   # 작업 후 커밋
   git add .
   git commit -m "feat: 새 계산기 추가"
   
   # 원격에 푸시
   git push origin feature/new-calculator
   
   # GitHub에서 Pull Request 생성
   # - develop 브랜치로 PR 생성
   # - 리뷰어 지정 (선택)
   # - CI가 통과하는지 확인
   # - Merge pull request
   
   # develop → main 병합 (릴리즈)
   git checkout main
   git merge develop
   git push origin main
   ```

10. Pull Request 템플릿
    
    .github/pull_request_template.md
    ```markdown
    ## 변경 사항
    <!-- 이 PR에서 무엇을 변경했나요? -->
    
    ## 변경 이유
    <!-- 왜 이 변경이 필요한가요? -->
    
    ## 스크린샷
    <!-- UI 변경이 있다면 스크린샷 추가 -->
    
    ## 체크리스트
    - [ ] 코드가 lint 규칙을 통과함
    - [ ] 빌드가 성공함
    - [ ] 변경사항을 로컬에서 테스트함
    - [ ] README나 문서를 업데이트함 (필요시)
    
    ## 관련 이슈
    <!-- Closes #이슈번호 -->
    ```

11. 협업 워크플로우 예시
    
    ```bash
    # 1. 최신 코드 가져오기
    git checkout develop
    git pull origin develop
    
    # 2. 새 기능 브랜치 생성
    git checkout -b feature/bmi-calculator
    
    # 3. 작업 진행
    # ... 코드 작성 ...
    
    # 4. 상태 확인
    git status
    
    # 5. 변경사항 확인
    git diff
    
    # 6. 스테이징
    git add .
    
    # 7. 커밋
    git commit -m "feat(health): BMI 계산기 추가"
    
    # 8. 원격에 푸시
    git push origin feature/bmi-calculator
    
    # 9. GitHub에서 Pull Request 생성
    # - Title: "feat: BMI 계산기 추가"
    # - Base: develop
    # - Compare: feature/bmi-calculator
    # - Create pull request
    
    # 10. CI 통과 확인
    # - GitHub Actions가 자동 실행
    # - Lint ✓
    # - Build ✓
    
    # 11. 리뷰 및 Merge
    # - 리뷰어의 승인
    # - Squash and merge
    
    # 12. 로컬 브랜치 정리
    git checkout develop
    git pull origin develop
    git branch -d feature/bmi-calculator
    ```

최종 푸시:
```bash
# CI/CD 설정 파일 추가
git add .github/workflows/ci.yml
git commit -m "ci: GitHub Actions CI/CD 파이프라인 추가"
git push origin main
```

GitHub Actions 확인:
- GitHub 저장소 → Actions 탭
- 워크플로우 실행 확인
- ✓ 통과 확인
```

## ✅ 완성 확인 사항

- [ ] Git 저장소가 초기화되었는가?
- [ ] GitHub에 코드가 푸시되었는가?
- [ ] README.md가 작성되었는가?
- [ ] .gitignore가 올바르게 설정되었는가?
- [ ] GitHub Actions CI가 작동하는가?
- [ ] main 브랜치 푸시 시 Vercel에 자동 배포되는가?

## 📚 Git 명령어 요약

### 기본 명령어
```bash
git init                    # 저장소 초기화
git status                  # 상태 확인
git add .                   # 모든 파일 스테이징
git commit -m "메시지"      # 커밋
git log                     # 커밋 히스토리
git diff                    # 변경사항 확인
```

### 브랜치 관련
```bash
git branch                  # 브랜치 목록
git branch <name>           # 브랜치 생성
git checkout <name>         # 브랜치 전환
git checkout -b <name>      # 브랜치 생성 + 전환
git merge <name>            # 브랜치 병합
git branch -d <name>        # 브랜치 삭제
```

### 원격 저장소
```bash
git remote add origin <url> # 원격 저장소 추가
git remote -v               # 원격 저장소 확인
git push origin <branch>    # 푸시
git pull origin <branch>    # 풀
git clone <url>             # 클론
```

## 🎉 프로젝트 완성!

축하합니다! 10개의 레슨을 모두 완료했습니다!

이제 여러분은:
- ✅ HTML/CSS/JavaScript 마스터
- ✅ Next.js + TypeScript 개발자
- ✅ Supabase 데이터베이스 활용
- ✅ SEO 최적화 전문가
- ✅ Vercel 배포 경험
- ✅ Git & GitHub 협업 능력
- ✅ CI/CD 파이프라인 구축

## 📝 포트폴리오 활용하기

1. **README 완성도 높이기**
   - 스크린샷/GIF 추가
   - 배지(Shields.io) 추가
   - 라이브 데모 링크

2. **GitHub 프로필 꾸미기**
   - 프로필 README 작성
   - Pinned repositories에 추가

3. **블로그 작성**
   - 개발 과정 기록
   - 기술적 챌린지 공유

4. **이력서에 추가**
   - 프로젝트 설명
   - 사용 기술 스택
   - 성과 (방문자 수 등)

## 🚀 다음 학습 주제

- TypeScript 고급 타입
- 테스트 (Jest, React Testing Library)
- 성능 최적화 (Lighthouse)
- 접근성 (a11y, ARIA)
- PWA (Progressive Web App)
- Docker & 컨테이너화
- GraphQL & Apollo

**여러분은 이제 풀스택 개발자입니다! 🎊**

