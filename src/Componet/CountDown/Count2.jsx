import React, { useState, useEffect } from "react";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const Count2 = () => {
  const [eventName, setEventName] = useState("Dynamics 365 Career Insights");
  const [eventDate, setEventDate] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(null);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const res = await axiosSecure.get("/api/countdown");
        const data = res.data[0];

        if (data?.eventDate) {
          setEventName(data.eventName);
          setEventDate(data.eventDate);

          const eventTime = new Date(data.eventDate).getTime();
          const currentTime = Date.now();
          setTimeRemaining(eventTime - currentTime);
        }
      } catch (error) {
        console.error("Error fetching countdown data:", error);
      }
    };

    fetchEventData();
  }, [axiosSecure]);

  useEffect(() => {
    if (timeRemaining === null) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => (prev > 1000 ? prev - 1000 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining]);

  return (
    <div className="countdown-container bg-secondary text-center text-white space-y-1 rounded-2xl p-5">
      <h2 className="countdown-title">{eventName}</h2>
      {eventDate && <p>{new Date(eventDate).toDateString()} @ 11.00 AM</p>}

      {timeRemaining > 0 ? (
        <div className="flex gap-4 justify-center bg-secondary rounded-lg">
          {[
            { label: "Days", value: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)) },
            { label: "Hours", value: Math.floor((timeRemaining / (1000 * 60 * 60)) % 24) },
            { label: "Minutes", value: Math.floor((timeRemaining / (1000 * 60)) % 60) },
            { label: "Seconds", value: Math.floor((timeRemaining / 1000) % 60) },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <span className="text-4xl font-bold">{item.value}</span>
              <br />
              {item.label}
            </div>
          ))}
        </div>
      ) : (
        <p>Countdown Will Start Soon</p>
      )}
    </div>
  );
};

export default Count2;
