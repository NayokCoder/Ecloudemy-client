import React, { useState, useEffect } from "react";

const CoutDown = () => {
  const [eventName, setEventName] = useState(localStorage.getItem("eventName") || "");
  const [eventDate, setEventDate] = useState(localStorage.getItem("eventDate") || "");
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [countdownStarted, setCountdownStarted] = useState(localStorage.getItem("countdownStarted") === "true");

  useEffect(() => {
    if (eventDate && countdownStarted) {
      const updateTimer = () => {
        const eventTime = new Date(eventDate).getTime();
        const currentTime = new Date().getTime();
        const remainingTime = eventTime - currentTime;

        if (remainingTime <= 0) {
          setTimeRemaining(0);
          localStorage.removeItem("countdownStarted");
        } else {
          setTimeRemaining(remainingTime);
        }
      };

      updateTimer();
      const interval = setInterval(updateTimer, 1000);
      return () => clearInterval(interval);
    }
  }, [eventDate, countdownStarted]);

  const formatTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    return (
      <div className="countdown-display flex gap-4 justify-center bg-secondary ">
        <div>
          <span className="text-4xl font-bold">{days}</span>
          <br />
          Days
        </div>
        <div>
          {" "}
          <span className="text-4xl font-bold">{hours}</span>
          <br />
          Hours
        </div>
        <div>
          {" "}
          <span className="text-4xl font-bold">{minutes}</span>
          <br />
          Minutes
        </div>
        <div>
          <span className="text-4xl font-bold">{seconds}</span>
          <br />
          Seconds
        </div>
      </div>
    );
  };

  return (
    <div className="countdown-container bg-secondary text-center text-base text-white  space-y-3 rounded-2xl p-5">
      <h2 className="countdown-title text-center">{eventName || "Ms 365 Dynamic"}</h2>
      {countdownStarted ? (
        <>
          <p>{new Date(eventDate).toDateString()} @ 11.00 AM </p>
          {formatTime(timeRemaining)}
        </>
      ) : (
        <p>Count Down Will Start Soon</p>
      )}
    </div>
  );
};

export default CoutDown;
