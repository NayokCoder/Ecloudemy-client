import React, { useState, useEffect } from "react";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const Count2 = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(0);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchEventData = async () => {
      const res = await axiosSecure.get("/api/countdown");
      const data = res.data[0];

      setEventName(data.eventName);
      setEventDate(data.eventDate);

      const eventTime = new Date(data.eventDate).getTime();
      const currentTime = new Date().getTime();
      setTimeRemaining(eventTime - currentTime);
    };

    fetchEventData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prev) => (prev > 0 ? prev - 1000 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    return (
      <div className="countdown-display flex gap-4 justify-center bg-secondary">
        <div>
          <span className="text-4xl font-bold">{days}</span>
          <br /> Days
        </div>
        <div>
          <span className="text-4xl font-bold">{hours}</span>
          <br /> Hours
        </div>
        <div>
          <span className="text-4xl font-bold">{minutes}</span>
          <br /> Minutes
        </div>
        <div>
          <span className="text-4xl font-bold">{seconds}</span>
          <br /> Seconds
        </div>
      </div>
    );
  };

  return (
    <div className="countdown-container bg-secondary text-center text-base text-white space-y-3 rounded-2xl h-32 p-5">
      <h2 className="countdown-title text-center">{eventName || "Ms 365 Dynamic"}</h2>
      {timeRemaining > 0 ? (
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

export default Count2;
