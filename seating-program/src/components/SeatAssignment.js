"use client";

import React, { useState, useEffect } from 'react';

const SeatAssignment = () => {
  const names = [
    '강능요', '강민관', '강재준', '길유정', '김도희', '김미진', '김민서', 
    '김예나', '김은서', '김인선', '김현수', '남승혁', '남인우', '문규빈', 
    '문서아', '문해빈', '박시온', '박준용', '이규호', '임형석', '장다연', 
    '정성엽', '정성현', '조경은', '조민석', '조서현', '천혜민', '최강희'
  ];

  const [seats, setSeats] = useState(Array(28).fill(''));
  const [remainingNames, setRemainingNames] = useState([]);
  const [isAssigning, setIsAssigning] = useState(false);

  const getRandomInt = (max) => {
    // Web Crypto API를 사용하여 더 안전한 난수 생성
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0] % max;
  };

  const shuffleArray = (array) => {
    const newArray = [...array];
    // Fisher-Yates 알고리즘과 Web Crypto API를 결합
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = getRandomInt(i + 1);
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const getRandomEmptySeat = (emptySeats) => {
    return emptySeats[getRandomInt(emptySeats.length)];
  };

  const startAssignment = () => {
    setSeats(Array(28).fill(''));
    setRemainingNames(shuffleArray([...names]));
    setIsAssigning(true);
  };

  useEffect(() => {
    if (isAssigning && remainingNames.length > 0) {
      const timer = setTimeout(() => {
        const emptySeats = seats.map((seat, index) => seat === '' ? index : -1).filter(index => index !== -1);
        const randomSeatIndex = getRandomEmptySeat(emptySeats);
        
        setSeats(prevSeats => {
          const newSeats = [...prevSeats];
          newSeats[randomSeatIndex] = remainingNames[0];
          return newSeats;
        });
        
        setRemainingNames(prev => prev.slice(1));
      }, 1000);

      return () => clearTimeout(timer);
    } else if (remainingNames.length === 0) {
      setIsAssigning(false);
    }
  }, [isAssigning, remainingNames, seats]);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-center w-full bg-gray-200 p-4">screen</h1>
      </div>

      <div className="grid grid-cols-7 gap-4">
        {seats.map((name, index) => (
          <div
            key={index}
            className={`
              p-4 rounded-lg border-2 min-h-24 flex items-center justify-center text-center
              transition-all duration-300 ease-in-out text-lg font-semibold
              ${name ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}
            `}
          >
            {name || '-'}
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={startAssignment}
          disabled={isAssigning}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          배정 시작
        </button>
      </div>
    </div>
  );
};

export default SeatAssignment;