/**
 * UI 업데이트 담당 모듈
 */

import { formatCurrency, formatPercentage } from '../utils/format.js';

export function displayDiscountResult(result) {
  const resultDiv = document.getElementById('discountResult');
  
  resultDiv.innerHTML = `
    <div class="result-box">
      <h4>📊 계산 결과</h4>
      <div class="result-item">
        <span>원가</span>
        <span>${formatCurrency(result.originalPrice)}</span>
      </div>
      <div class="result-item discount">
        <span>할인 금액 (${formatPercentage(result.discountRate)})</span>
        <span>-${formatCurrency(result.discountAmount)}</span>
      </div>
      <div class="result-item final">
        <span>최종 가격</span>
        <span>${formatCurrency(result.finalPrice)}</span>
      </div>
      <div class="savings">
        🎉 ${formatCurrency(result.savedAmount)} 절약!
      </div>
    </div>
  `;
}

export function displayVATResult(result) {
  const resultDiv = document.getElementById('vatResult');
  
  resultDiv.innerHTML = `
    <div class="result-box">
      <h4>📊 계산 결과 (${result.type})</h4>
      <div class="result-item">
        <span>공급가액</span>
        <span>${formatCurrency(result.supplyAmount)}</span>
      </div>
      <div class="result-item vat">
        <span>부가세 (${formatPercentage(result.vatRate * 100)})</span>
        <span>${formatCurrency(result.vatAmount)}</span>
      </div>
      <div class="result-item final">
        <span>총 금액</span>
        <span>${formatCurrency(result.totalAmount)}</span>
      </div>
    </div>
  `;
}

export function showError(elementId, message) {
  const element = document.getElementById(elementId);
  element.innerHTML = `
    <div class="error-message">
      ⚠️ ${message}
    </div>
  `;
}

