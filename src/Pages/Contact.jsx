import React from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form"; // Import from react-hook-form
import useAxiosSecure from "../../Hook/useAxiosSecure";

const axiosSecure = useAxiosSecure();
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    // Automatically add date and status
    const currentDate = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format
    const status = "pending"; // Set your default status

    const formData = {
      ...data,
      date: currentDate,
      status: status,
    };

    console.log("Form Data:", formData);

    try {
      const response = await axiosSecure.post("/post/contact-info", formData);
      Swal.fire({
        title: "Form Submitted Successfully",
        icon: "success",
        allowOutsideClick: false,
      });

      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        title: "Error",
        text: "There was an issue submitting your information. Please try again.",
        icon: "error",
        confirmButtonText: "Close",
      });
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-5 bg-gray-100 text-white">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="w-full max-w-lg">
        <div className="text-gray-900 p-6 rounded-xl shadow-2xl">
          <div className="text-2xl font-bold p-5 bg-blue-950 text-white  rounded-lg text-center h-auto mb-4">
            <div className="flex items-center justify-center">
              <img src="/assets/icons8-contact-us-64.png" alt=" " className="w-14" />
              <h2>Contact Us</h2>
            </div>
            <div className="flex items-center justify-center gap-2">
              <img src="/assets/Icon/icons8-mail-96.png" alt="" className="w-8 h8" />
              <h2 className="text-base font-semibold bg-blue-950 text-white  rounded-lg text-center place-content-center h-auto ">ecloudemy@gmail.com</h2>
            </div>
            <div className="flex items-center justify-center gap-2">
              <img src="/assets/Icon/icons8-whatsapp-96.png" alt="" className="w-8" />
              <h2 className="text-base font-semibold bg-blue-950 text-white  rounded-lg text-center h-auto ">0123456789</h2>
            </div>
          </div>

          <form
            className="flex flex-col space-y-4"
            onSubmit={handleSubmit(onSubmit)} // Use react-hook-form's handleSubmit
          >
            <input type="text" placeholder="Subject" {...register("subject", { required: true })} className="p-3 border border-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950" />
            {errors.subject && <span className="text-red-500">This field is required</span>}

            <input type="text" placeholder="Your Name" {...register("name", { required: true })} className="p-3 border border-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950" />
            {errors.name && <span className="text-red-500">This field is required</span>}

            <input type="email" placeholder="Your Email" {...register("email", { required: true })} className="p-3 border border-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950" />
            {errors.email && <span className="text-red-500">This field is required</span>}

            <input type="text" placeholder="Your Mobile Number" {...register("mobile", { required: true })} className="p-3 border border-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950" />
            {errors.mobile && <span className="text-red-500">This field is required</span>}

            <textarea placeholder="Write your query within 400 words" {...register("message", { required: true })} className="p-3 border border-slate-400 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-950"></textarea>
            {errors.message && <span className="text-red-500">This field is required</span>}

            <button className="bg-blue-950 text-white p-3 rounded-lg hover:bg-blue-900 transition duration-300">Send Message</button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
