import React, { useEffect, useState } from "react";

export default function App() {
  const targetDate = new Date("2024-03-01T00:00:00Z").getTime(); // Fixed target date (March 1, 2024)
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Timer ended
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear interval when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-lg w-full">
        <h2 className="text-3xl font-bold text-blue-600">Countdown to Launch 🚀</h2>

        <div className="flex justify-center gap-6 text-2xl font-semibold text-blue-600 mt-4">
          <div className="text-center">
            <p className="text-4xl">{String(timeLeft.days).padStart(2, "0")}</p>
            <span className="text-sm text-gray-600">Days</span>
          </div>
          <div className="text-center">
            <p className="text-4xl">{String(timeLeft.hours).padStart(2, "0")}</p>
            <span className="text-sm text-gray-600">Hours</span>
          </div>
          <div className="text-center">
            <p className="text-4xl">{String(timeLeft.minutes).padStart(2, "0")}</p>
            <span className="text-sm text-gray-600">Minutes</span>
          </div>
          <div className="text-center">
            <p className="text-4xl">{String(timeLeft.seconds).padStart(2, "0")}</p>
            <span className="text-sm text-gray-600">Seconds</span>
          </div>
        </div>

        {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 && <p className="text-red-600 font-bold mt-4">🎉 The event has started! 🎉</p>}
      </div>
    </div>
  );
}
