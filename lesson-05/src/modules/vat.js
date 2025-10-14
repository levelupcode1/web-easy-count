/**
 * 부가세 계산 모듈
 * 한국 부가세율 10% 적용
 */

const VAT_RATE = 0.1; // 10%

export function calculateVAT(amount, includesVAT = false) {
  if (!amount || amount <= 0) {
    throw new Error('금액은 0보다 커야 합니다');
  }
  
  if (includesVAT) {
    // 부가세 포함 금액 → 공급가액, 부가세 분리
    const supplyAmount = Math.floor(amount / 1.1);
    const vatAmount = amount - supplyAmount;
    
    return {
      type: '부가세 포함',
      totalAmount: amount,
      supplyAmount,
      vatAmount,
      vatRate: VAT_RATE
    };
  } else {
    // 공급가액 → 부가세, 총액 계산
    const supplyAmount = amount;
    const vatAmount = Math.floor(amount * VAT_RATE);
    const totalAmount = supplyAmount + vatAmount;
    
    return {
      type: '공급가액',
      supplyAmount,
      vatAmount,
      totalAmount,
      vatRate: VAT_RATE
    };
  }
}

// 부가세만 계산
export function getVATOnly(supplyAmount) {
  return Math.floor(supplyAmount * VAT_RATE);
}

// 공급가액만 계산 (부가세 포함 금액에서)
export function getSupplyAmountOnly(totalAmount) {
  return Math.floor(totalAmount / 1.1);
}

