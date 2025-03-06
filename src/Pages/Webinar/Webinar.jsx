import React from "react";
import WebinarCard from "./webinerCard";

const webinars = [
  {
    id: 1,
    date: "17th April 2025",
    time: "9:30 PM",
    status: "Will live Soon",
    topic: "Dynamics 365 Career Insights",
    details: "This webinar will cover the fundamentals and advanced features of Microsoft Dynamics 365.",
  },
];

const Webinar = () => {
  return (
    <section className=" bg-white mx-auto lg:shadow-2xl  mt-5 min-h-dvh mb-5  max-w-4xl ">
      <div className="flex justify-center items-center ">
        <img src="/assets/Icon/webinar.png" alt="Webinar Icon" className="w-24 h-24 " />
        <h1 className="text-center font-black  text-gray-900 text-4xl py-5">Our Webinars</h1>
      </div>
      {webinars.map((webinar) => (
        <WebinarCard key={webinar.id} {...webinar} />
      ))}
    </section>
  );
};

export default Webinar;
