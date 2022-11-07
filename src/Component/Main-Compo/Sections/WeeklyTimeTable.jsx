import React from "react";

const WeeklyTimeTable = () => {
  return (
    <div className="mb-10 mt-5">
      <div className=" block lg:flex  ">
        <div className=" flex justify-center w-full lg:w-1/2 ">
          <h1 className="font-extrabold text-3xl ">
            <span className="text-teal-500 ">Weekly </span>
            Timetable
          </h1>
        </div>
        <div className="">
          <h1 className="text-lg font-bold">
            You can make an appoinment select the convient <br></br> time and
            choose your services.
          </h1>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-3 gap-4">
          <div className="div">
            <img
              className="w-48 h-48"
              src="https://thenounproject.com/api/private/icons/2264453/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABjaWot3UqIFU_iiDBPvudMw92IQfoxMMkFXh0u6CD3q1usLot0823QOWK-vVs5pJK5PiNNBI88thako6AzhXUl51G_DA%3D%3D"
              alt=""
            />
            <h1 className="text-2xl font-bold text-teal-700">Diagonisis</h1>
            <h1 className=" font-bold">Accurate approach</h1>
          </div>
          <div className="div">
            <img
              className="w-48 h-48"
              src="https://thenounproject.com/api/private/icons/3342037/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABjaWot3UqIFU_iiDBPvudMw92IQfoxMMkFXh0u6CD3q1usLot0823QOWK-vVs5pJK5PiNNBI88thako6AzhXUl51G_DA%3D%3D"
              alt=""
            />
            <h1 className="text-2xl font-bold  text-teal-700">Consultation</h1>
            <h1 className=" font-bold">By Professional</h1>
          </div>

          <div className="div">
            <img
              className="w-48 h-44"
              src="https://thenounproject.com/api/private/icons/3676199/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABjaWot3UqIFU_iiDBPvudMw92IQfoxMMkFXh0u6CD3q1usLot0823QOWK-vVs5pJK5PiNNBI88thako6AzhXUl51G_DA%3D%3D"
              alt=""
            />
            <h1 className="text-2xl font-bold  text-teal-700">Treatment</h1>
            <h1 className=" font-bold">Individual approach</h1>
          </div>
          <div className="div">
            <img
              className="w-48 h-44"
              src="https://thenounproject.com/api/private/icons/1153711/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABjaWrAnAuqcLeca8IXJfa8ieq8wRJLFG4ktEkAx4D18FLsq4so9NWErM2zEknL5NgN63s9lb_oyE8D9KsczMtp2trjnw%3D%3D"
              alt=""
            />
            <h1 className="text-2xl font-bold  text-teal-700">Online Hour </h1>
            <h1 className=" font-bold">24/7</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyTimeTable;
