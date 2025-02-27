import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Count2 from "./CountDown/Count2";
import Swal from "sweetalert2";

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
    Swal.fire({
      title: "Congratulations! Your seat has been successfully booked ",
      text: "Join Our Whatsapp Group",
      icon: "success",
      draggable: true,
    });
  };

  const fetchCountries = async () => {
    const response = await axiosSecure.get("/public/country.json");
    console.log(response);
  };

  fetchCountries();

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
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mx-auto tracking-wide">DYNAMICS 365 </p>
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-sky-400 mx-auto tracking-wide">Career Insights</p>
            {/* <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mx-auto tracking-wide"></p> */}
            <button className="text-white text-2xl lg:text-3xl tracking-wide  mt-5">
              Date : <span className="text-sky-400">17th April 2025</span>
            </button>
            {/* Social Media Links */}
            <div className="flex justify-center md:justify-start space-x-4 text-white text-3xl mt-5">
              <a href="https://www.facebook.com/people/Ecloudemy/615710004812347" target="_blank" rel="noopener noreferrer" title="https://www.facebook.com/people/Ecloudemy/615710004812347">
                <img src="/assets/icons8-facebook-96.png" alt="" className="h-10 w-10" />
              </a>
              <a href="https://www.linkedin.com/company/ecloudemy/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/icons8-linkedin-96.png" alt="" className="h-10 w-10 " title="https://www.linkedin.com/company/ecloudemy/" />
              </a>
            </div>
          </div>
          <div className="overflow-visible md:w-[50%] p-5 md:p-0 md:pr-5 lg:pr-20  flex items-center">
            <img src="/assets/4.png" alt="" className="   p-3 object-cover " />
          </div>
        </div>{" "}
      </div>
      {/* Form Section  */}
      <div className="max-w-7xl mx-auto mb-5">
        {/* BOX DIV  */}
        <div className="flex flex-col md:flex-row gap-8   md:px-10 lg:px-20">
          {/* TIME Part */}
          <div className="mt-5 space-y-2 w-full md:w-[75%] lg:w-[50%] ">
            <h2 className="text-3xl text-center font-bold text-gray-800 mt-5">Webinar Register Now</h2>
            <p className="text-base mt-10 text-justify"></p>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit(onSubmit)} className="  w-full md:w-[75%] lg:w-[50%] space-y-4 shadow-2xl rounded-lg  pt-0">
            {/* <CoutDown /> */}
            <Count2 />

            {/* First Name */}
            <div className="px-4">
              <label className="block text-gray-700 font-medium">First Name *</label>
              <input type="text" {...register("firstName", { required: "First name is required" })} className="w-full border border-slate-200 rounded-lg p-2 mt-1  transition-all ease-in-out duration-300 hover:bg-blue-50" placeholder="Enter Name" />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
            </div>

            {/* Middle Name */}
            <div className="px-4">
              <label className="block text-gray-700 font-medium">Middle Name</label>
              <input type="text" {...register("middleName")} className="w-full border border-slate-200 rounded-lg p-2 mt-1  transition-all ease-in-out duration-300 hover:bg-blue-50" placeholder="Enter Name" />
            </div>

            {/* Last Name */}
            <div className="px-4">
              <label className="block text-gray-700 font-medium">Last Name *</label>
              <input type="text" {...register("lastName", { required: "Last name is required" })} className="w-full border border-slate-200 rounded-lg p-2 mt-1  transition-all ease-in-out duration-300 hover:bg-blue-50" placeholder="Enter Name" />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
            </div>

            {/* Email */}
            <div className="px-4">
              <label className="block text-gray-700 font-medium">Email *</label>
              <input type="email" {...register("email", { required: "Email is required" })} className="w-full border border-slate-200 rounded-lg p-2 mt-1  transition-all ease-in-out duration-300 hover:bg-blue-50" placeholder="Enter Email Address" />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Country with Animated Dropdown */}
            <div className="px-4">
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
            <div className="px-4">
              <label className="block text-gray-700 font-medium">Mobile Number</label>
              <input type="tel" {...register("number")} className="w-full border border-slate-200 rounded-lg p-2 mt-1  " placeholder="Enter Mobile Number" />
            </div>

            {/* Profession */}
            <div className="px-4">
              <label className="block text-gray-700 font-medium">Profession *</label>
              <input type="text" {...register("profession", { required: "Profession is required" })} className="w-full border border-slate-200 rounded-lg p-2 mt-1  transition-all ease-in-out duration-300 hover:bg-blue-50" placeholder="Enter Value" />
              {errors.profession && <p className="text-red-500 text-sm">{errors.profession.message}</p>}
            </div>

            {/* Organization */}
            <div className="px-4">
              <label className="block text-gray-700 font-medium">Organization/Institute Name *</label>
              <input type="text" {...register("organization", { required: "Organization is required" })} className="w-full border border-slate-200 rounded-lg p-2 mt-1  transition-all ease-in-out duration-300 hover:bg-blue-50" placeholder="Enter Organization Name" />
              {errors.organization && <p className="text-red-500 text-sm">{errors.organization.message}</p>}
            </div>

            {/* Designation */}
            <div className="px-4">
              <label className="block text-gray-700 font-medium">Designation/Degree Name *</label>
              <input type="text" {...register("designation", { required: "Designation is required" })} className="w-full border border-slate-200 rounded-lg p-2 mt-1  transition-all ease-in-out duration-300 hover:bg-blue-50" placeholder="Enter Value" />
              {errors.designation && <p className="text-red-500 text-sm">{errors.designation.message}</p>}
            </div>

            {/* Referral Source with Animated Dropdown */}
            <div className="px-4">
              <label className="block text-gray-700 font-medium">How Did You Find About This Webinar? *</label>
              <select {...register("categoryValue", { required: "This field is required" })} className="w-full border border-slate-200 rounded-lg p-2 mt-1  transition-all ease-in-out duration-300 hover:bg-blue-50">
                <option value="">Select One</option>
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="linkedin">Linkedin</option>
                <option value="email">Email</option>
                <option value="friends">Friends</option>
                <option value="website">Website</option>
              </select>
              {errors.referral && <p className="text-red-500 text-sm">{errors.referral.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="col-span-2 flex justify-start px-4 pb-4">
              <button type="submit" className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-all ease-in-out duration-300">
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
