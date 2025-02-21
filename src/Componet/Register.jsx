import { useForm } from "react-hook-form";

import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

import useAxiosSecure from "../../Hook/useAxiosSecure";

const Register = () => {
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const response = axiosSecure.post("/post/users-info", data);

    console.log("Form Submitted:", data);

    alert("Registration Successful!");
  };
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
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-400 mx-auto tracking-wider">Webinar Topic :</p>
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mx-auto tracking-wide">ELEVATE YOUR CARRER</p>
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-sky-400 mx-auto tracking-wide">IN MICROSOFT</p>
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mx-auto tracking-wide">DYNAMICS 365</p>
            <button className="text-white text-2xl lg:text-3xl tracking-wide  mt-5">
              Date : <span className="text-sky-400">14th April 2025</span>
            </button>
            {/* Social Media Links */}
            <div className="flex justify-center md:justify-start space-x-4 text-white text-3xl mt-5">
              <FaFacebook />
              <FaLinkedin />
              <FaSquareInstagram />
              <FaSquareXTwitter />
            </div>
          </div>
          <div className="overflow-visible md:w-[50%] p-5 md:p-0 md:pr-5 lg:pr-20  flex items-center">
            <img src="/assets/4.png" alt="" className="    object-cover " />
          </div>
        </div>{" "}
      </div>
      {/* Form Section  */}
      <div className="max-w-5xl mx-auto mb-5">
        <h2 className="text-3xl text-center font-bold text-gray-800 mt-5">Webinar Register Now</h2>
        {/* BOX DIV  */}
        <div className="flex flex-col md:flex-row gap-8 mt-8 px-4 md:px-10 lg:px-20">
          {/* TIME Part */}
          <div className="mt-4 space-y-2 w-full md:w-[85%] lg:w-[75%]">
            {/* <p className=" text-base">
              <span className="font-bold">Delivered Language(s) :</span> English
            </p>
            <p className="text-base md:text-base ">
              <span className="font-bold">Closed Captioning Language(s) :</span> English
            </p> */}
            {/* <p className="text-base mt-8">Singapore: 11:30am - 1:00pm SGT (GMT+8:00)</p>
            <p className="text-base">India: 9:00am - 10:30am IST (GMT+5:30)</p>
            <p className="text-base">Australia: 2:30pm - 4:00pm AEST (GMT+10:00)</p>
            <p className="text-base">New Zealand: 4:30pm - 6:00pm NZST (GMT+12:00)</p> */}

            <p className="text-base mt-10 text-justify">Join us for an insightful webinar on how to migrate and secure Linux, PostgreSQL, and MySQL workloads on Azure. This event is designed for IT Decision Makers (ITDMs), IT professionals, and Database Administrators.</p>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit(onSubmit)} className=" mt-4 w-full md:w-[75%] lg:w-[50%] space-y-4">
            {/* First Name */}
            <div>
              <label className="block text-gray-700 font-medium">First Name *</label>
              <input type="text" {...register("firstName", { required: "First name is required" })} className="w-full border border-slate-200 rounded-lg p-2 mt-1  transition-all ease-in-out duration-300 hover:bg-blue-50" placeholder="Enter Name" />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
            </div>

            {/* Middle Name */}
            <div>
              <label className="block text-gray-700 font-medium">Middle Name</label>
              <input type="text" {...register("middleName")} className="w-full border border-slate-200 rounded-lg p-2 mt-1  transition-all ease-in-out duration-300 hover:bg-blue-50" placeholder="Enter Name" />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-gray-700 font-medium">Last Name *</label>
              <input type="text" {...register("lastName", { required: "Last name is required" })} className="w-full border border-slate-200 rounded-lg p-2 mt-1  transition-all ease-in-out duration-300 hover:bg-blue-50" placeholder="Enter Name" />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium">Email *</label>
              <input type="email" {...register("email", { required: "Email is required" })} className="w-full border border-slate-200 rounded-lg p-2 mt-1  transition-all ease-in-out duration-300 hover:bg-blue-50" placeholder="Enter Email Address" />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Country with Animated Dropdown */}
            <div>
              <label className="block text-gray-700 font-medium">Country *</label>
              <select {...register("country", { required: "Country is required" })} className="w-full border border-slate-200 rounded-lg p-2 mt-1  transition-all ease-in-out duration-300 hover:bg-blue-50">
                <option value="">Select Country</option>
                <option value="USA">United States</option>
                <option value="Canada">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="India">India</option>
              </select>
              {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-gray-700 font-medium">Mobile Number</label>
              <input type="tel" {...register("number")} className="w-full border border-slate-200 rounded-lg p-2 mt-1  " placeholder="Enter Mobile Number" />
            </div>

            {/* Profession */}
            <div>
              <label className="block text-gray-700 font-medium">Profession *</label>
              <input type="text" {...register("profession", { required: "Profession is required" })} className="w-full border border-slate-200 rounded-lg p-2 mt-1  transition-all ease-in-out duration-300 hover:bg-blue-50" placeholder="Enter Value" />
              {errors.profession && <p className="text-red-500 text-sm">{errors.profession.message}</p>}
            </div>

            {/* Organization */}
            <div>
              <label className="block text-gray-700 font-medium">Organization/Institute Name *</label>
              <input type="text" {...register("organization", { required: "Organization is required" })} className="w-full border border-slate-200 rounded-lg p-2 mt-1  transition-all ease-in-out duration-300 hover:bg-blue-50" placeholder="Enter Organization Name" />
              {errors.organization && <p className="text-red-500 text-sm">{errors.organization.message}</p>}
            </div>

            {/* Designation */}
            <div>
              <label className="block text-gray-700 font-medium">Designation/Degree Name *</label>
              <input type="text" {...register("designation", { required: "Designation is required" })} className="w-full border border-slate-200 rounded-lg p-2 mt-1  transition-all ease-in-out duration-300 hover:bg-blue-50" placeholder="Enter Value" />
              {errors.designation && <p className="text-red-500 text-sm">{errors.designation.message}</p>}
            </div>

            {/* Referral Source with Animated Dropdown */}
            <div>
              <label className="block text-gray-700 font-medium">How Did You Find About This Webinar? *</label>
              <select {...register("categoryValue", { required: "This field is required" })} className="w-full border border-slate-200 rounded-lg p-2 mt-1  transition-all ease-in-out duration-300 hover:bg-blue-50">
                <option value="">Select One</option>
                <option value="social-media">Social Media</option>
                <option value="email">Email</option>
                <option value="friends">Friends</option>
                <option value="website">Website</option>
              </select>
              {errors.referral && <p className="text-red-500 text-sm">{errors.referral.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="col-span-2 flex justify-start">
              <button type="submit" className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-all ease-in-out duration-300">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
