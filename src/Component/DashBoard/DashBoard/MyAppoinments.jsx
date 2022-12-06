import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Loading from "../../Shared-Compo/Loading";
import { AuthContext } from "../../Shared-Compo/UserContext";

const MyAppoinments = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage?.getItem("accessToken");

  const url = `https://medi-time.onrender.com/bookings?email=${user?.email}`;
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: { author: token },
      });
      const data = await res.json();
      return data.data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold m-4">My Appoinments</h1>

      <div>
        <div className="overflow-x-auto mt-4 mx-2">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Treatment</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((book, i) => (
                <tr key={i} className="hover">
                  <th>{i + 1}</th>
                  <td>{book.patient}</td>
                  <td>{book.treatment}</td>
                  <td>{book.apppointmentDate}</td>
                  <td>{book.slot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAppoinments;
