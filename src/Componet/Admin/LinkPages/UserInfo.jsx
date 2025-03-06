import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
// XLSX ইমপোর্ট

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
    const res = await axiosSecure.delete(`/delete/users/${id}`);
    refetch();
  };

  const filteredUsers = users.filter((user) => user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) || user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) || user.email.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <input type="text" className="w-full mx-auto md:w-2/3 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm" placeholder="Search Users..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>Mobile Number</th>
              <th>Profession</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <div>
                  <div className="font-bold">
                    {" "}
                    <td>
                      {user.firstName} {user.middleName} {user.lastName}
                    </td>
                  </div>
                  <div className="text-sm opacity-50">
                    <td>{user.country}</td>
                  </div>
                </div>

                <td>{user.email}</td>

                <td>{user.number}</td>
                <td>{user.profession}</td>
                <td>{user.organization}</td>

                <td>
                  <button onClick={() => handleDelete(user.id)} className="px-2 py-1 bg-red-500 text-white rounded">
                    Delete
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
