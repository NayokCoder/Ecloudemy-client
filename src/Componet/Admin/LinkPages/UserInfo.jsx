import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import { FcDeleteDatabase } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";
import Swal from "sweetalert2";
const UserInfo = () => {
  const axiosSecure = useAxiosSecure();
  const [searchQuery, setSearchQuery] = useState("");

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/info/users");
      return res.data;
    },
  });
  console.log(users);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      // Make this async
      if (result.isConfirmed) {
        try {
          await axiosSecure.delete(`/delete/users/${id}`);
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "User has been deleted successfully.",
            icon: "success",
          });
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "Failed to delete the user. Please try again.",
            icon: "error",
          });
        }
      }
    });
  };

  const filteredUsers = users.filter((user) =>
    [user.firstName, user.middleName, user.lastName, user.email]
      .filter(Boolean)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 bg-gray-900 text-white rounded-xl shadow-xl">
      {/* Search Box */}
      <div className="relative mb-4 flex items-center">
        <FaSearch className="absolute left-3 text-gray-400 text-sm" />
        <input type="text" className="w-full md:w-2/3 pl-9 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 text-sm text-white placeholder-gray-400 shadow" placeholder="Search Users..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="w-full bg-gray-800 text-white rounded-lg text-sm">
          <thead className="bg-indigo-500 text-gray-200 uppercase text-xs">
            <tr>
              <th className="px-3 py-2">#</th>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Email</th>
              <th className="px-3 py-2">Country</th>
              <th className="px-3 py-2">Mobile</th>
              <th className="px-3 py-2">Profession</th>
              <th className="px-3 py-2">Designation</th>
              <th className="px-3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user.id} className="border-b border-gray-700 hover:bg-gray-700 text-center">
                <td className="px-3 py-2">{index + 1}</td>
                <td className="px-3 py-2 font-medium">
                  {user.firstName} {user.middleName} {user.lastName}
                </td>
                <td className="px-3 py-2">{user.email}</td>
                <td className="px-3 py-2">{user.country}</td>
                <td className="px-3 py-2">{user.number}</td>
                <td className="px-3 py-2">{user.profession}</td>
                <td className="px-3 py-2">{user.designation}</td>
                <td className="px-3 py-2">
                  <button onClick={() => handleDelete(user.id)} className="px-2 py-1 bg-red-700 text-white rounded-md shadow hover:bg-red-600 flex items-center gap-1 text-xs">
                    <FcDeleteDatabase className="text-sm" /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserInfo;
