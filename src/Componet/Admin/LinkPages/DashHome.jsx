import React, { useState } from "react";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
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
    Swal.fire({
      title: "User Data Downloaded",
      icon: "success",
    });
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
    <div className=" flex flex-col items-center justify-center bg-gray-900 p-6 w-full">
      <section className="grid grid-cols-3 gap-6 mb-6">
        <div className="stat bg-indigo-400 text-black rounded-2xl">
          <div className="stat-figure text-primary">
            <img src="/public/assets/Icon/icons8-user-80.png" alt="" className="w-12 h-13" />
          </div>
          <div className="stat-title text-gray-300 font-bold">Total Users</div>
          <div className="stat-value text-gray-700 ">{users.length}</div>
          <div className="stat-desc text-gray-300 font-bold">21% more than last month</div>
        </div>
        <div className="stat color3 text-black rounded-2xl">
          <div className="stat-figure text-primary">
            <img src="/public/assets/Icon/icons8-mail-50.png" alt="" />
          </div>
          <div className="stat-title text-gray-300 font-bold">Total Mail</div>
          <div className="stat-value text-gray-400 ">{users.length}</div>
          <div className="stat-desc text-gray-300 font-bold"></div>
        </div>
        <div className="stat color3 text-black rounded-2xl">
          <div className="stat-figure text-primary">
            <img src="/public/assets/Icon/icons8-download-48.png" alt="" />
          </div>
          <div className="stat-title text-gray-300 font-bold">User info </div>
          <main onClick={handleDownload} className="py-2 text-white rounded-lg font-semibold transition btn btn-wide color3 shadow-info-content hover:bg-blue-900 border-0">
            Download Excel
          </main>
          <div className="stat-desc text-gray-300 font-bold"></div>
        </div>

        <div className="stat color3 text-black rounded-2xl col-span-2">
          <div className="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
          <div className="stat-title text-gray-300 font-bold">Total Users</div>
          <div className="stat-value text-gray-400 ">{users.length}</div>
          <div className="stat-desc text-gray-300 font-bold">21% more than last month</div>
        </div>
        <div className="stat color3 text-black rounded-2xl ">
          <div className="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
          <div className="stat-title text-gray-300 font-bold">Total Users</div>
          <div className="stat-value text-gray-400 ">{users.length}</div>
          <div className="stat-desc text-gray-300 font-bold">21% more than last month</div>
        </div>
      </section>

      <div className="mt-6 p-6 color3 text-gray-200 rounded-xl">
        <h2 className="text-xl font-semibold  mb-4">Set Countdown</h2>
        <input type="text" placeholder="Event Name  " value={eventName} onChange={(e) => setEventName(e.target.value)} className="w-full bg-gray-500 p-3  rounded-lg mb-4 " />
        <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} className="w-full bg-gray-500 p-3  rounded-lg mb-4 " />
        <div className="flex justify-between">
          <button onClick={handleSave} className="py-2 text-white rounded-lg font-semibold transition btn  bg-blue-900 shadow-info-content hover:bg-blue-900 border-0">
            Start Countdown
          </button>
          <button onClick={handleReset} className="py-2 text-white rounded-lg font-semibold transition btn  bg-red-900 shadow-info-content hover:bg-blue-900 border-0">
            Reset Countdown
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashHome;
