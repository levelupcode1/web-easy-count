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

