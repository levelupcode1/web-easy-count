/**
 * 숫자 포맷팅 유틸리티
 */

export function formatNumber(num) {
  if (typeof num !== 'number' || isNaN(num)) {
    return '0';
  }
  return num.toLocaleString('ko-KR');
}

export function formatCurrency(num) {
  return `${formatNumber(num)}원`;
}

export function formatPercentage(num) {
  return `${num}%`;
}

