import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import * as XLSX from "xlsx";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { useNavigate } from "react-router";

const AdminDash = () => {
  // Countdown part
  // const [eventName, setEventName] = useState(localStorage.getItem("eventName") || "");
  // const [eventDate, setEventDate] = useState(localStorage.getItem("eventDate") || "");
  // Countdown part2

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

  const [searchQuery, setSearchQuery] = useState("");
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/info/users");
      return res.data;
    },
  });

  // -------------------
  const handleDelete = async (id) => {
    console.log(id);
    const res = await axiosSecure.delete(`/delete/users/${id}`); // Replace with your API endpoint for deleting a user (e.g., `/api/users/${id}` + id`);
    refetch();
    if (res.data.deletedCount > 0) {
      refetch();
    }
    // Delete logic here
    console.log("Deleting user", id);
  };

  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(users);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
    XLSX.writeFile(workbook, "users_data.xlsx");
  };

  const filteredUsers = users.filter((user) => user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) || user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) || user.email.toLowerCase().includes(searchQuery.toLowerCase()));

  // // countdawnpart
  // useEffect(() => {
  //   localStorage.setItem("eventName", eventName);
  //   localStorage.setItem("eventDate", eventDate);
  // }, [eventName, eventDate]);

  // const handleSetCountdown = () => {
  //   if (!eventName || !eventDate) {
  //     alert("Please enter event name and date!");
  //     return;
  //   }
  //   localStorage.setItem("countdownStarted", "true");
  //   alert("Countdown Started!");
  // };

  // const handleResetCountdown = () => {
  //   localStorage.removeItem("eventName");
  //   localStorage.removeItem("eventDate");
  //   localStorage.removeItem("countdownStarted");
  //   localStorage.removeItem("timeRemaining");
  //   setEventName("");
  //   setEventDate("");
  //   alert("Countdown Reset!");
  // };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">Admin Dashboard</h1>
        <div className="mb-6 flex justify-between items-center">
          <input type="text" className="w-full md:w-2/3 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm" placeholder="Search Users..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <button onClick={handleDownload} className="ml-4 bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-700 transition duration-300">
            Download Excel
          </button>
        </div>
        {/* count----1----down */}
        {/* ----------- */}
        {/* <div className="admin-panel">
          <h2>Admin Panel - Set Countdown</h2>

          <label>Event Name</label>
          <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} placeholder="Enter event name" />

          <label>Event Date</label>
          <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />

          <button onClick={handleSetCountdown}>Start Countdown</button>
          <button onClick={handleResetCountdown}>Reset Countdown</button>
        </div> */}
        {/* count----2----down */}
        <div>
          <h2>Admin Panel - Set Countdown</h2>
          <input type="text" placeholder="Event Name" value={eventName} onChange={(e) => setEventName(e.target.value)} />
          <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
          <button onClick={handleSave}>Start Countdown</button>
          <button onClick={handleReset}>Reset Countdown</button>
        </div>
        <div className="text-center mb-6">
          <p className="text-lg font-semibold text-gray-900 bg-white p-3 rounded-lg shadow-md inline-block">
            Total Users: <span className="text-indigo-200">{users.length}</span>
          </p>
        </div>
        <div className="overflow-hidden bg-white shadow-lg rounded-lg p-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-indigo-200 text-gray-900">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">First Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Last Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Country</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{user.firstName}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{user.lastName}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{user.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{user.country}</td>
                  <td className="px-6 py-4 text-sm text-red-500">
                    <button onClick={() => handleDelete(user.id)} className="bg-red-500 text-white px-3 py-1 rounded-md shadow hover:bg-red-700 transition duration-300">
                      <RiDeleteBin4Fill />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
