import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Count2 from "./CountDown/Count2";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { FaGlobe, FaChartLine, FaUserGraduate, FaHandsHelping } from "react-icons/fa";

const Register = () => {
  const axiosSecure = useAxiosSecure();
  const [countryCodes, setCountryCodes] = useState([]); // countryCodes স্টেট ডিফাইন করা
  const [selectedCode, setSelectedCode] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log();

  const onSubmit = (data) => {
    console.log("Data:", data);
    const response = axiosSecure.post("/post/users-info", data);

    console.log("Form Submitted:", data);
    Swal.fire({
      title: "Congratulations! Your seat has been successfully booked",
      text: "Join Our WhatsApp Group",
      icon: "success",
      // confirmButtont: "Join Now",
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        window.open("https://chat.whatsapp.com/YOUR_GROUP_LINK", "_blank"); // Replace with your actual WhatsApp group link
      }
    });
  };

  useEffect(() => {
    const fetchCountryCodes = async () => {
      try {
        const response = await fetch("/country.json"); // আপনার country.json ফাইলের পাথ
        if (!response.ok) {
          throw new Error("Failed to fetch country codes");
        }
        const data = await response.json();
        setCountryCodes(data); // country কোড স্টেটে সেট করা
      } catch (error) {
        console.error("Error fetching country codes:", error);
      }
    };

    fetchCountryCodes();
  }, []);

  return (
    <div className=" bg-white  ">
      <div
        className=" "
        style={{
          backgroundImage: "url('/assets/Untitled-2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50%",
          width: "100%",
        }}
      >
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row ">
          <div className=" md:w-[50%] space-y-1 text-center md:text-left pt-10 md:py-10  md:pl-5 lg:pl-20 ">
            <p className="text-4xl xl:text-5xl font-bold text-orange-400 mx-auto tracking-wider">Webinar Topic :</p>
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mx-auto tracking-wide overflow">DYNAMICS 365 CAREER INSIGHTS.</p>

            <button className="text-white text-xl lg:text-2xl tracking-wide mt-1 lg:mt-4 ">
              <div className="flex justify-center md:justify-start gap-2">
                <img src="/assets/Icon/icons8-date-96.png" alt="" className="w-10 h-10" />
                <p className="text-center font-semibold md:px-0 md:text-start ">17th April 2025</p>
                <img src="/assets/Icon/icons8-time-96.png" alt="" className="w-10 h-10" />
                <p className="text-center font-semibold md:px-0 md:text-start ">9.30 PM</p>
              </div>
            </button>
            {/* Social Media Links */}
            <div className="flex justify-center md:justify-start space-x-2 text-white text-3xl md:mt-3">
              <a href="https://www.facebook.com/share/1GydGAaWtn/" target="_blank" rel="noopener noreferrer" title="https://www.facebook.com/share/1GydGAaWtn/">
                <img src="/assets/icons8-facebook-96.png" alt="" className="h-10 w-10" />
              </a>
              <a href="https://www.linkedin.com/company/ecloudemy/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/icons8-linkedin-96.png" alt="" className="h-10 w-10 " title="https://www.linkedin.com/company/ecloudemy/" />
              </a>
            </div>
          </div>
          <div className="overflow-visible md:w-[50%] px-5 py-2 md:p-0 md:pr-5 lg:pr-20  flex items-center">
            <img src="/assets/4.png" alt="" className="   p-3 object-cover " />
          </div>
        </div>{" "}
      </div>
      {/* Form Section  */}
      <div className="max-w-7xl mx-auto mb-5">
        {/* BOX DIV  */}
        <div className="flex flex-col md:flex-row gap-8   md:px-10 lg:px-20">
          {/* TIME Part */}
          <div className="mt-5 space-y-2 px-5 md:px-0 w-full md:w-[75%] lg:w-[50%] ">
            <h2 className="text-3xl  font-bold text-gray-800 mt-5">Register Now</h2>
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

          {/* Form Section */}
          <form onSubmit={handleSubmit(onSubmit)} className="  w-full h-fit md:w-[75%] lg:w-[50%] space-y-4 shadow-2xl rounded-lg  pt-0">
            <Count2 />

            {/* First Name */}
            <div className="px-4">
              <label className="block text-sm  text-gray-400 font-medium">First Name *</label>
              <input type="text" {...register("firstName", { required: "First name is required" })} className="w-full border  border-slate-200 rounded-lg p-2 mt-1  transition-all ease-in-out duration-300 hover:bg-blue-50" placeholder="Enter Name" />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
            </div>

            {/* Middle Name */}
            <div className="px-4">
              <label className="block text-sm  text-gray-400 font-medium">Middle Name</label>
              <input type="text" {...register("middleName")} className="w-full border  border-slate-200 rounded-lg p-2 mt-1  transition-all ease-in-out duration-300 hover:bg-blue-50" placeholder="Enter Name" />
            </div>

            {/* Last Name */}
            <div className="px-4">
              <label className="block text-sm  text-gray-400 font-medium">Last Name *</label>
              <input type="text" {...register("lastName", { required: "Last name is required" })} className="w-full border f border-slate-200 rounded-lg p-2 mt-1  transition-all ease-in-out duration-300 hover:bg-blue-50" placeholder="Enter Name" />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
            </div>

            {/* Email */}
            <div className="px-4">
              <label className="block text-sm font-semibold  text-gray-400 ">Email *</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Enter a valid email address",
                  },
                })}
                className="w-full border  border-slate-200 rounded-lg p-2 mt-1 transition-all ease-in-out duration-300 hover:bg-blue-50  focus:ring-blue-300"
                placeholder="Enter Email Address"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            {/* Country */}
            <div className="px-4 relative">
              <label className="block text-sm  text-gray-400 font-medium">Country *</label>
              <div className="relative">
                <select {...register("country", { required: "Country is required" })} className="w-full border border-slate-200 rounded-lg p-2 mt-1 pr-10 appearance-none transition-all ease-in-out duration-300 hover:bg-blue-50  focus:ring-blue-300">
                  <option value="">Select Country</option>
                  {countryCodes.map((country, index) => (
                    <option key={index} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
                {/* Custom Dropdown Icon */}
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500 transition-transform duration-300 ease-in-out group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
              {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
            </div>

            {/* Mobile Number */}
            <div className="px-4">
              <label className="block text-sm  text-gray-400 font-medium">Mobile Number (WhatsApp Number)</label>

              {/* Mobile Number Input */}
              <div className="flex items-center mt-2 mb-2">
                {/* Country Code Dropdown */}
                <div className="relative w-1/4">
                  <select
                    onChange={(e) => setSelectedCode(e.target.value)}
                    className="appearance-none w-full border border-slate-200 rounded-l-lg p-2 mt-1 pr-10" // pr-10 to make space for the arrow
                  >
                    <option value="">Code</option>
                    {countryCodes.map((country, index) => (
                      <option key={index} value={country.dial_code}>
                        ({country.dial_code})
                      </option>
                    ))}
                  </select>
                  {/* Custom Modern Arrow */}
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>

                {/* Mobile Number Input */}
                <input
                  type="tel"
                  {...register("number", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Only numbers are allowed",
                    },
                    minLength: {
                      value: 10,
                      message: "Number must be at least 10 digits",
                    },
                    maxLength: {
                      value: 15,
                      message: "Number cannot exceed 15 digits",
                    },
                  })}
                  className="w-3/4 border border-slate-200 rounded-r-lg p-2 mt-1 transition-all ease-in-out duration-300 hover:bg-blue-50 focus:ring-blue-300"
                  placeholder="Enter Mobile Number"
                />
              </div>

              {/* Error Message */}
              {errors.number && <p className="text-red-500 text-sm">{errors.number.message}</p>}
            </div>

            {/* Profession */}
            <div className="px-4">
              <label className="block text-sm  text-gray-400 font-medium">Profession *</label>
              <input type="text" {...register("profession", { required: "Profession is required" })} className="w-full border border-slate-200 rounded-lg p-2 mt-1  transition-all ease-in-out duration-300 hover:bg-blue-50" placeholder="Enter Value" />
              {errors.profession && <p className="text-red-500 text-sm">{errors.profession.message}</p>}
            </div>

            {/* Organization */}
            <div className="px-4">
              <label className="block text-sm  text-gray-400 font-medium">Organization/Institute Name *</label>
              <input type="text" {...register("organization", { required: "Organization is required" })} className="w-full border border-slate-200 rounded-lg p-2 mt-1  transition-all ease-in-out duration-300 hover:bg-blue-50" placeholder="Enter Organization Name" />
              {errors.organization && <p className="text-red-500 text-sm">{errors.organization.message}</p>}
            </div>

            {/* Designation */}
            <div className="px-4">
              <label className="block text-sm  text-gray-400 font-medium">Designation/Degree Name *</label>
              <input type="text" {...register("designation", { required: "Designation is required" })} className="w-full border border-slate-200 rounded-lg p-2 mt-1  transition-all ease-in-out duration-300 hover:bg-blue-50" placeholder="Enter Value" />
              {errors.designation && <p className="text-red-500 text-sm">{errors.designation.message}</p>}
            </div>
            {/* Years of Experience */}
            <div className="px-4 relative">
              <label className="block text-sm  text-gray-400 font-medium">Years of Experience *</label>
              <div className="relative">
                <select {...register("experience", { required: "Years of experience is required" })} className="w-full border border-slate-200 rounded-lg p-2 mt-1 pr-10 appearance-none transition-all ease-in-out duration-300 hover:bg-blue-50  focus:ring-blue-300">
                  <option value="">Select Experience</option>
                  <option value="0">0 Years</option>
                  <option value="1">1 Year</option>
                  <option value="2">2 Years</option>
                  <option value="3">3 Years</option>
                  <option value="4">4 Years</option>
                  <option value="5">5+ Years</option>
                </select>
                {/* Custom Dropdown Icon */}
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500 transition-transform duration-300 ease-in-out group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
              {errors.experience && <p className="text-red-500 text-sm">{errors.experience.message}</p>}
            </div>

            {/* Referral Source with Animated Dropdown */}
            <div className="px-4 relative">
              <label className="block text-sm  text-gray-400 font-medium">How Did You Find About This Webinar? *</label>
              <div className="relative">
                <select {...register("categoryValue", { required: "This field is required" })} className="w-full border border-slate-200 rounded-lg p-2 mt-1 pr-10 appearance-none transition-all ease-in-out duration-300 hover:bg-blue-50  focus:ring-blue-300">
                  <option value="">Select Referral Source</option>
                  <option value="facebook">Facebook</option>
                  <option value="instagram">Instagram</option>
                  <option value="linkedin">Linkedin</option>
                  <option value="email">Email</option>
                  <option value="friends">Friends</option>
                  <option value="website">Website</option>
                </select>
                {/* Custom Dropdown Icon */}
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
              {errors.categoryValue && <p className="text-red-500 text-sm">{errors.categoryValue.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="col-span-2 flex justify-start px-4 pb-4">
              <button type="submit" className="bg-blue-900 font-semibold text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-all ease-in-out duration-300">
                Book Your Seat
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
