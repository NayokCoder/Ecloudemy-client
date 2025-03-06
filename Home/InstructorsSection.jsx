import React from "react";
// import INS1 from "../public/assets";

const instructors = [
  {
    name: "Andrei Neagoie",
    title: "Lead Instructor",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Yihua Zhang",
    title: "React Instructor",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Daniel Schifano",
    title: "Design Instructor",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Daniel Bourke",
    title: "Machine Learning Instructor",
    image: "https://via.placeholder.com/150",
  },
];

const InstructorsSection = () => {
  return (
    <section className="py-12 px-6 bg-white mt-[450px] md:mt-[260px] lg:mt-[220px] xl:mt-[260px]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl font-semibold text-gray-700 uppercase">OUR WORLD CLASS INSTRUCTORS</h2>
        <h1 className="text-3xl font-bold text-gray-900 mt-2">Learn from real-world experts</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Our instructors are actual experts with years of real-world experience. They make complex topics feel simple and motivate you to succeed.</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4 justify-center">
        {instructors.map((instructor, index) => (
          <div key={index} className="relative bg-gray-100 p-4 rounded-xl shadow-lg text-center">
            <img src={instructor.image} alt={instructor.name} className="w-24 h-24 mx-auto rounded-full" />
            <h3 className="mt-4 text-lg font-bold text-gray-800">{instructor.name}</h3>
            <p className="text-sm text-gray-500">{instructor.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstructorsSection;
