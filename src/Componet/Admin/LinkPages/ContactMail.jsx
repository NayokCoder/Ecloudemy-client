import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import { FaRegEnvelope, FaEnvelopeOpen } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ContactMail = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedMail, setSelectedMail] = useState(null);

  // Fetching data with useQuery
  const { data: contacts = [], refetch } = useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      const response = await axiosSecure.get("/info/contact");
      return response.data;
    },
  });

  // Handle marking mail as "read"
  const handleRead = async (mail) => {
    if (mail.status === "read") return;

    await axiosSecure.patch(`/update/mail/${mail.idcontact}`, { status: "read" });
    refetch(); // Refresh data
  };

  return (
    <div className="min-h-screen bg-slate-100 py-8 mt-5">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Incoming Mail Information</h2>

        {/* Table */}
        <div className="overflow-x-auto color3 shadow-lg rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-indigo-600 text-gray-200 uppercase text-sm">
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Message</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts
                  .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort newest first
                  .map((mail) => (
                    <tr
                      key={mail.idcontact}
                      className="border-b border-gray-700 text-gray-200 hover:bg-gray-800 cursor-pointer"
                      onClick={() => {
                        setSelectedMail(mail);
                        handleRead(mail);
                      }}
                    >
                      <td className="px-6 py-4 font-semibold text-indigo-300">{mail.name}</td>
                      <td className="px-6 py-4">
                        {mail.message
                          .split(" ")
                          .slice(0, 20)
                          .join(" ")}
                        {mail.message.split(" ").length > 20 ? "..." : ""}
                      </td>
                      <td className="px-6 py-4 flex items-center gap-2">{mail.status === "pending" ? <FaRegEnvelope className="text-red-500" /> : <FaEnvelopeOpen className="text-green-400" />}</td>
                      <td className=" py-4 text-gray-400">{new Date(mail.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short" })}</td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-200 font-semibold">
                    No messages found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedMail && (
          <motion.div className="fixed inset-0 flex items-center justify-center  bg-opacity-60 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            {/* Modal Box */}
            <motion.div className="bg-gray-800 p-6 rounded-lg shadow-lg w-[90%] md:w-1/3" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
              {/* Modal Content */}
              <h3 className="text-lg font-bold text-white">Subject: {selectedMail.subject}</h3>
              <p className="py-2 text-gray-300">From: {selectedMail.email}</p>
              <p className="py-4 text-gray-300">{selectedMail.message}</p>
              <h3 className="text-lg font-bold text-gray-300">{selectedMail.name}</h3>
              <p className="py-2 text-gray-400">{selectedMail.mobile}</p>

              {/* Close Button */}
              <button onClick={() => setSelectedMail(null)} className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition-all">
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactMail;
