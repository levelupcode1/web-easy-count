// 날짜 포맷팅 함수: Date 객체를 "YYYY년 MM월 DD일" 형식으로 변환
function formatDate(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1
    const day = date.getDate();
    return `${year}년 ${month}월 ${day}일`;
}

// D-day 계산 함수: 목표 날짜까지 남은 일수 또는 경과한 일수 계산
function getDday(targetDate) {
    const today = new Date();
    // 시간을 00:00:00으로 설정하여 날짜만 비교
    today.setHours(0, 0, 0, 0);
    const target = new Date(targetDate);
    target.setHours(0, 0, 0, 0);
    
    // 날짜 차이를 밀리초로 계산 후 일수로 변환
    const diff = target - today;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    
    if (days > 0) {
        return `D-${days}`; // 앞으로 다가올 날
    } else if (days === 0) {
        return "D-day!"; // 오늘이 기념일
    } else {
        return `${Math.abs(days)}일 전`; // 이미 지난 날
    }
}

// 기념일 계산 함수: 시작일로부터 100일, 200일, 500일, 1000일 계산
function calculateAnniversaries(startDate) {
    const start = new Date(startDate);
    
    // 100일 기념일 계산
    const day100 = new Date(start);
    day100.setDate(start.getDate() + 100);
    
    // 200일 기념일 계산
    const day200 = new Date(start);
    day200.setDate(start.getDate() + 200);
    
    // 500일 기념일 계산
    const day500 = new Date(start);
    day500.setDate(start.getDate() + 500);
    
    // 1000일 기념일 계산
    const day1000 = new Date(start);
    day1000.setDate(start.getDate() + 1000);

    // 2000일 기념일 계산
    const day2000 = new Date(start);
    day1000.setDate(start.getDate() + 2000);
    
    return { day100, day200, day500, day1000, day2000 };
}

// 결과 표시 함수: 계산된 기념일을 화면에 표시
function displayResult(result) {
    const resultDiv = document.getElementById('result');
    
    // 각 기념일의 상태에 따라 이모지 선택
    const getEmoji = (date) => {
        const dday = getDday(date);
        return dday.includes('일 전') ? '✅' : '💯';
    };
    
    // 결과를 HTML로 구성하여 화면에 표시
    resultDiv.innerHTML = `
        <h3>💕 우리의 기념일</h3>
        <p>${getEmoji(result.day100)} 100일: ${formatDate(result.day100)} (${getDday(result.day100)})</p>
        <p>${getEmoji(result.day200)} 200일: ${formatDate(result.day200)} (${getDday(result.day200)})</p>
        <p>🎉 500일: ${formatDate(result.day500)} (${getDday(result.day500)})</p>
        <p>🎊 1000일: ${formatDate(result.day1000)} (${getDday(result.day1000)})</p>
    `;
}

// 버튼 클릭 이벤트 리스너 등록
document.getElementById('calculateBtn').addEventListener('click', () => {
    // 입력된 날짜 가져오기
    const startDate = document.getElementById('startDate').value;
    
    // 날짜 입력 여부 확인
    if (!startDate) {
        alert('연애 시작일을 입력해주세요!');
        return;
    }
    
    // 미래 날짜 입력 체크
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(startDate);
    selectedDate.setHours(0, 0, 0, 0);
    
    if (selectedDate > today) {
        alert('미래 날짜는 입력할 수 없습니다! 오늘 이전의 날짜를 선택해주세요.');
        return;
    }
    
    // 기념일 계산 및 결과 표시
    const result = calculateAnniversaries(startDate);
    displayResult(result);
    
    // 디버깅용: 콘솔에 계산 결과 출력
    console.log('계산된 기념일:', result);
});

