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
    <div className="max-w-7xl mx-auto px-6 py-8 bg-gray-900 text-white rounded-lg shadow-lg">
      {/* Search Box */}
      <div className="relative mb-6 flex items-center">
        <FaSearch className="absolute left-4 text-gray-400" />
        <input type="text" className="w-full md:w-2/3 pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400 shadow-md" placeholder="Search Users..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="w-full bg-gray-800 text-white rounded-lg overflow-hidden">
          <thead className="bg-indigo-400 text-gry-200 uppercase text-sm">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Country</th>
              <th className="px-4 py-3">Mobile</th>
              <th className="px-4 py-3">Profession</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user.id} className="border-b text-center border-gray-700 hover:bg-gray-700">
                <td className="px-4 py-3 text-center">{index + 1}</td>
                <td className="px-4 py-3 font-semibold">
                  {user.firstName} {user.middleName} {user.lastName}
                </td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">{user.country}</td>
                <td className="px-4 py-3">{user.number}</td>
                <td className="px-4 py-3">{user.profession}</td>
                <td className="px-4 py-3 text-center flex items-center justify-center gap-4">
                  <button onClick={() => handleDelete(user.id)} className="px-3 py-2 bg-red-900 text-white rounded-lg shadow-md hover:bg-red-700 flex items-center gap-1">
                    <FcDeleteDatabase /> Delete
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
