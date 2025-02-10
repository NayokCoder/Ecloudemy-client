import { useForm } from "react-hook-form";
import Banner10 from "../../public/assets/Screenshot (10).png";
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
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
      <h4>Learn, Earn & Grow</h4>
      <h2 className="text-2xl font-bold  text-gray-800">Webinar Register Form</h2>
      <img src={Banner10} alt="Banneer" />

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols md:grid-cols-2 gap-4 mt-4">
        {/* First Name */}
        <div>
          <label className="block text-gray-700 font-medium">First Name *</label>
          <input type="text" {...register("firstName", { required: "First name is required" })} className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Enter Name" />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
        </div>

        {/* Middle Name */}
        <div>
          <label className="block text-gray-700 font-medium">Middle Name</label>
          <input type="text" {...register("middleName")} className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Enter Name" />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-gray-700 font-medium">Last Name *</label>
          <input type="text" {...register("lastName", { required: "Last name is required" })} className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Enter Name" />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium">Email *</label>
          <input type="email" {...register("email", { required: "Email is required" })} className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Enter Email Address" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Country with Animated Dropdown */}
        <div>
          <label className="block text-gray-700 font-medium">Country *</label>
          <select {...register("country", { required: "Country is required" })} className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 transition-all ease-in-out duration-300 hover:bg-blue-50">
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
          <input type="tel" {...register("number")} className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Enter Mobile Number" />
        </div>

        {/* Profession */}
        <div>
          <label className="block text-gray-700 font-medium">Profession *</label>
          <input type="text" {...register("profession", { required: "Profession is required" })} className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Enter Value" />
          {errors.profession && <p className="text-red-500 text-sm">{errors.profession.message}</p>}
        </div>

        {/* Organization */}
        <div>
          <label className="block text-gray-700 font-medium">Organization/Institute Name *</label>
          <input type="text" {...register("organization", { required: "Organization is required" })} className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Enter Organization Name" />
          {errors.organization && <p className="text-red-500 text-sm">{errors.organization.message}</p>}
        </div>

        {/* Designation */}
        <div>
          <label className="block text-gray-700 font-medium">Designation/Degree Name *</label>
          <input type="text" {...register("designation", { required: "Designation is required" })} className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Enter Value" />
          {errors.designation && <p className="text-red-500 text-sm">{errors.designation.message}</p>}
        </div>

        {/* Referral Source with Animated Dropdown */}
        <div>
          <label className="block text-gray-700 font-medium">How Did You Find About This Webinar? *</label>
          <select {...register("categoryValue", { required: "This field is required" })} className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 transition-all ease-in-out duration-300 hover:bg-blue-50">
            <option value="">Select One</option>
            <option value="social-media">Social Media</option>
            <option value="email">Email</option>
            <option value="friends">Friends</option>
            <option value="website">Website</option>
          </select>
          {errors.referral && <p className="text-red-500 text-sm">{errors.referral.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="col-span-2 flex justify-center">
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all ease-in-out duration-300">
            Submit Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
