import { DayPicker } from "react-day-picker";

const AppoinmentBanner = ({ selectedDate, SetSelectedDate }) => {
  return (
    <header>
      <div className=" ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://t3.ftcdn.net/jpg/02/86/03/58/360_F_286035818_uyTiUqvQWtQjT4LT5Wwm8CDo4rVnxuli.jpg"
            className="max-w-md rounded-lg "
            alt=""
          />
          <div>
            <div className="mx-5">
              <DayPicker
                className=" rounded p-5 bg-slate-50 shadow-lg"
                mode="single"
                selected={selectedDate}
                onSelect={SetSelectedDate}
              ></DayPicker>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppoinmentBanner;
