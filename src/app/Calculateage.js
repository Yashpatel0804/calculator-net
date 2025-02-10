"use client";

import { useState } from "react";
import { differenceInYears, differenceInMonths, differenceInDays, subMonths, subYears } from "date-fns";

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!birthDate) return;
    const birth = new Date(birthDate);
    const today = new Date();
    
    const years = differenceInYears(today, birth);
    const months = differenceInMonths(today, subYears(today, years));
    const days = differenceInDays(today, subMonths(subYears(today, years), months));
    
    setAge({ years, months, days });
  };  

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-xl font-bold text-center mb-4">Age Calculator</h1>
        <input
          type="date"
          className="w-full p-2 border rounded-md mb-4"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded-md"
          onClick={calculateAge}
        >
          Calculate Age
        </button>
        {age && (
          <div className="mt-1 p-4 bg-gray-50 border rounded-md text-center">
            <p className="text-lg font-semibold">Your Age:</p>
            <p>{age.years} Years, {age.months} Months, {age.days} Days</p>
          </div>
        )}
      </div>
    </div>
  );
}
