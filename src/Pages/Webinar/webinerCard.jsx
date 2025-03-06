import { useState } from "react";
import { FaAngleDoubleUp, FaChartLine, FaGlobe, FaHandsHelping, FaUserGraduate } from "react-icons/fa";
import { FaAnglesDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const WebinarCard = ({ date, status, topic, details, time }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className=" pt-5 px-5 pb-5  ">
      <div className="bg-sky-900 mb-4 text-gray-200 p-6 rounded-xl  max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Webinar Information */}
          <div>
            <div className="flex gap-2">
              <img src="/public/assets/icons8-datew-100.png" alt="" className="w-6 h-6" />
              <p className="text-center text-lg font-semibold md:px-0 md:text-start ">{date || "N/A"}</p>
              <img src="/public/assets/icons8-timew-100.png" alt="" className="w-6 h-6" />
              <p className="text-center text-lg font-semibold md:px-0 md:text-start ">{time}</p>
            </div>

            <p className="text-lg font-semibold">Status : {status}</p>
            <p className="text-lg font-semibold">Topic : {topic}</p>
          </div>

          {/* Actions */}
          <div className="text-right mt-4 flex md:flex-col">
            <Link to="/register" className="text-gray-200  font-bold px-4 pl-0 md:pl-4 py-2 rounded-lg  transition">
              Register
            </Link>

            <button onClick={() => setIsOpen(!isOpen)} className="text-white bg-sky-900 underline md:mt-5 px-4 btn btn-wide rounded-xl" aria-expanded={isOpen}>
              {isOpen ? <FaAngleDoubleUp /> : <FaAnglesDown />}
            </button>
          </div>
        </div>

        {/* Details Section */}
      </div>
      <div className={`mt-2  p-4 max-w-3xl mx-auto font-bold bg-slate-200 text-gray-900 rounded-lg transition-all duration-300 ease-in-out ${isOpen ? "max-h-fit opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="max-w-4xl mx-auto  ">
          <h2 className="text-xl font-bold  text-gray-800">Webinar Key Discussion Agendas</h2>
          <div className="">
            <div className="p-4 ">
              <section>
                <div className="flex items-center space-x-4">
                  <FaChartLine className="text-blue-500 text-2xl" />
                  <h3 className="text-xl font-semibold text-gray-700">ERP and CRM Market in Bangladesh</h3>
                </div>
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li className="list-disc ml-6">Current state of ERP and CRM adoption in Bangladesh.</li>
                  <li className="list-disc ml-6">Key industries driving demand for Dynamics 365 professionals.</li>
                  <li className="list-disc ml-6">Challenges and growth potential in the local market.</li>
                </ul>
              </section>
            </div>

            <div className="p-4 ">
              <section>
                <div className="flex items-center space-x-4">
                  <FaGlobe className="text-green-500 text-2xl" />
                  <h3 className="text-xl font-semibold text-gray-700">Global Opportunities for Dynamics 365 professionals</h3>
                </div>
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li className="list-disc ml-6">Demand for Dynamics 365 skills in international markets.</li>
                  <li className="list-disc ml-6">How to position yourself for global roles (Certifications, Networking, etc.).</li>
                  <li className="list-disc ml-6">Remote work opportunities and freelancing in the ERP/CRM domain.</li>
                </ul>
              </section>
            </div>

            <div className="p-4 ">
              <section>
                <div className="flex items-center space-x-4">
                  <FaUserGraduate className="text-yellow-500 text-2xl" />
                  <h3 className="text-xl font-semibold text-gray-700">Career Growth with Dynamics 365</h3>
                </div>
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li className="list-disc ml-6">How Dynamics 365 skills can enhance your career locally and globally.</li>
                  <li className="list-disc ml-6">The importance of continuous learning and staying updated with industry trends.</li>
                </ul>
              </section>
            </div>

            <div className="p-4 ">
              <div>
                <div className="flex items-center space-x-4">
                  <FaHandsHelping className="text-purple-500 text-2xl" />
                  <h3 className="text-xl font-semibold text-gray-700">Ecloudemy Action to this Roadmap</h3>
                </div>
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li className="list-disc ml-6">Encouraging, assisting, mentoring and helping to grow professional communications.</li>
                  <li className="list-disc ml-6">Counselling clear pathways to technical & functional consultancy.</li>
                  <li className="list-disc ml-6">Helping to achieve necessary skills and certifications onto the journey.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarCard;
