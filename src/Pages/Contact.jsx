import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-5 bg-gray-100 text-white">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="w-full max-w-lg">
        <div className=" text-gray-900 p-6 rounded-xl shadow-2xl">
          <div className="text-2xl font-bold bg-blue-950 text-white flex items-center justify-center rounded-lg text-center h-24 mb-4">
            <img src="/assets/icons8-contact-us-64.png" alt=" " className="w-14" />
            <h2>Contact Us</h2>
          </div>
          <form className="flex flex-col space-y-4">
            <input type="text" placeholder="Subject" className="p-3 border border-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950" />
            <input type="text" placeholder="Your Name" className="p-3 border border-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950" />
            <input type="email" placeholder="Your Email" className="p-3 border border-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950" />
            <input type="email" placeholder="Your Mobile Number " className="p-3 border border-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950" />

            <textarea placeholder="Your Message" className="p-3 border border-slate-400 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-950"></textarea>
            <button className="bg-blue-950 text-white p-3 rounded-lg hover:bg-blue-900 transition duration-300">Send Message</button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
