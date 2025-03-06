import React, { useState } from "react";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import * as XLSX from "xlsx";

const DashHome = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/info/users");
      return res.data;
    },
  });
  console.log(users);
  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(users);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
    XLSX.writeFile(workbook, "users_data.xlsx");
  };

  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");

  const handleSave = async () => {
    console.log(eventName, eventDate);
    const primeTime = await axiosSecure.post("/api/countdown", { eventName, eventDate });
    console.log(primeTime);
    alert("Countdown Saved!");
  };

  const handleReset = async () => {
    const timeDelete = await axiosSecure.delete("/api/countdown");
    console.log(timeDelete);
    alert("Countdown Reset!");
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-4xl">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="p-4 bg-blue-100 text-blue-700 rounded-lg text-center font-semibold">Total Users: {users.length}</div>
          <div className="p-4 bg-green-100 text-green-700 rounded-lg text-center font-semibold">Total Queries: {/* Add query count here */}</div>
        </div>
        <button onClick={handleDownload} className=" px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition">
          Download Excel
        </button>

        <div className="mt-6 p-6 bg-gray-50 rounded-xl">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Set Countdown</h2>
          <input type="text" placeholder="Event Name" value={eventName} onChange={(e) => setEventName(e.target.value)} className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-300" />
          <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-300" />
          <div className="flex justify-between">
            <button onClick={handleSave} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition">
              Start Countdown
            </button>
            <button onClick={handleReset} className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition">
              Reset Countdown
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashHome;
