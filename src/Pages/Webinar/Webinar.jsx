import React from "react";
import WebinarCard from "./webinerCard";

const webinars = [
  {
    id: 1,
    date: "N/A",
    status: "Coming Soon",
    topic: "Microsoft Dynamics 365",
    details: "This webinar will cover the fundamentals and advanced features of Microsoft Dynamics 365.",
  },
];

const Webinar = () => {
  return (
    <div className=" h-svh bg-gray-100 ">
      <h1 className="text-center font-bold  text-gray-900 text-3xl py-5">Our Webinars</h1>
      <section className=" bg-white mx-auto  rounded-3xl h-[80vh] mb-5 shadow max-w-4xl ">
        {webinars.map((webinar) => (
          <WebinarCard key={webinar.id} {...webinar} />
        ))}
      </section>
    </div>
  );
};

export default Webinar;
