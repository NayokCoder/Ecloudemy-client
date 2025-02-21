import { useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import { FaAnglesDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const WebinarCard = ({ date, status, topic, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className=" pt-5 px-5 lg:pt-14">
      <div className="bg-sky-900 text-gray-200 p-6 rounded-xl shadow-xl max-w-3xl mx-auto">
        <div className="flex justify-between items-start">
          {/* Webinar Information */}
          <div>
            <h2 className="text-xl font-bold">Date: {date || "N/A"}</h2>
            <p className="text-lg">Status: {status}</p>
            <p className="text-lg font-semibold">Topic: {topic}</p>
          </div>

          {/* Actions */}
          <div className="text-right mt-4">
            <Link to="/register" className="text-gray-200  font-bold px-4  py-2 rounded-lg  transition">
              Register
            </Link>
            <br />
            <button onClick={() => setIsOpen(!isOpen)} className="text-white bg-sky-900 underline mt-5 px-4 btn btn-wide rounded-xl" aria-expanded={isOpen}>
              {isOpen ? <FaAngleDoubleUp /> : <FaAnglesDown />}
            </button>
          </div>
        </div>

        {/* Details Section */}
      </div>
      <div className={`mt-2 p-4 max-w-3xl mx-auto font-bold bg-slate-200 text-gray-900 rounded-lg transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <p>{details}</p>
      </div>
    </section>
  );
};

export default WebinarCard;
