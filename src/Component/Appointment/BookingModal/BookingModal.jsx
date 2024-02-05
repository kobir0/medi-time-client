import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../Shared-Compo/UserContext";

import { toast } from "react-toastify";

const BookingModal = ({
  treatment,
  selectedDate,
  slots,
  setTreatment,
  refetch,
}) => {
  const { user } = useContext(AuthContext);
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const slot = form.slot.value;
    if (slot === "Select Your Time") {
      alert("select your time");
      return;
    } else setTreatment(null);

    const booking = {
      patient: name,
      email,
      phone,
      treatment: treatment.name,
      apppointmentDate: date,
      slot,
    };
    fetch("https://meditime-2-server.onrender.com/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          toast(data.message);
          refetch();
        } else {
          toast.error(data.message);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-5">{treatment.name}</h3>
          <form
            onSubmit={handleBooking}
            action=""
            className="grid grid-cols-1 gap-3"
          >
            <input
              type="text"
              value={format(selectedDate, "PP")}
              disabled
              name="date"
              className="input input-bordered w-full  "
            />

            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              disabled
              placeholder="your email"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name="name"
              required
              placeholder="your name"
              defaultValue={user?.displayName}
              className="input input-bordered w-full "
            />

            <input
              type="text"
              name="phone"
              required
              placeholder="your contact number"
              className="input input-bordered w-full "
            />
            <select
              name="slot"
              required
              className="select select-bordered w-full "
            >
              <option disabled selected>
                Select Your Time
              </option>
              {slots?.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>

            <br />
            <button className="btn  btn-success w-full shadow-xl">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
