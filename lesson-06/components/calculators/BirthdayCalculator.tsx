'use client'

import { useState } from 'react'
import { calculateBirthday } from '@/lib/calculations/date'
import { formatNumber } from '@/lib/utils/format'
import type { BirthdayResult } from '@/types'

export default function BirthdayCalculator() {
  const [birthday, setBirthday] = useState('')
  const [result, setResult] = useState<BirthdayResult | null>(null)
  
  const handleCalculate = () => {
    if (!birthday) {
      alert('생년월일을 입력해주세요!')
      return
    }
    
    const calculated = calculateBirthday(new Date(birthday))
    setResult(calculated)
  }
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            생년월일
          </label>
          <input
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg
                     focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        
        <button
          onClick={handleCalculate}
          className="w-full bg-purple-600 text-white py-3 rounded-lg
                   font-semibold hover:bg-purple-700 transition-colors"
        >
          살아온 날 계산하기
        </button>
        
        {result && (
          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-bold text-center mb-4">
              🎂 당신은 지금까지...
            </h3>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg space-y-3">
              <p className="text-lg">
                📅 총 <strong className="text-purple-600 text-2xl">{formatNumber(result.totalDays)}일</strong>을 살았습니다
              </p>
              <p className="text-lg">
                📆 약 <strong className="text-purple-600 text-2xl">{formatNumber(result.totalWeeks)}주</strong>를 살았습니다
              </p>
              <p className="text-lg">
                🗓️ 약 <strong className="text-purple-600 text-2xl">{result.totalMonths}개월</strong>을 살았습니다
              </p>
              <p className="text-lg">
                🎉 약 <strong className="text-purple-600 text-2xl">{result.totalYears}년</strong>을 살았습니다
              </p>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-lg text-center font-semibold">
              다음 생일까지 {result.daysToNextBirthday}일 남았습니다! 🎂
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

