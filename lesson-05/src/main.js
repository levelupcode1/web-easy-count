/**
 * 메인 진입점
 * 모든 모듈을 import하고 이벤트 리스너 등록
 */

// 모듈 import
import { calculateDiscount } from './modules/discount.js';
import { calculateVAT } from './modules/vat.js';
import { displayDiscountResult, displayVATResult, showError } from './ui/display.js';
import './styles/main.css'; // CSS도 import 가능!

console.log('🚀 Easy Count 애플리케이션 시작!');

// 할인율 계산기 이벤트
document.getElementById('discountBtn').addEventListener('click', () => {
  try {
    const originalPrice = parseInt(document.getElementById('originalPrice').value);
    const discountRate = parseInt(document.getElementById('discountRate').value);
    
    const result = calculateDiscount(originalPrice, discountRate);
    displayDiscountResult(result);
  } catch (error) {
    showError('discountResult', error.message);
  }
});

// 부가세 계산기 이벤트
document.getElementById('vatBtn').addEventListener('click', () => {
  try {
    const amount = parseInt(document.getElementById('amount').value);
    const vatType = document.querySelector('input[name="vatType"]:checked').value;
    const includesVAT = vatType === 'include';
    
    const result = calculateVAT(amount, includesVAT);
    displayVATResult(result);
  } catch (error) {
    showError('vatResult', error.message);
  }
});

// HMR (Hot Module Replacement) - 개발 중 자동 새로고침
if (import.meta.hot) {
  import.meta.hot.accept();
}

