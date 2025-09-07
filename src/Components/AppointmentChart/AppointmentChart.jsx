import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const AppointmentChart = ({ appointmentList }) => {
  const chartData = appointmentList.map((appointment) => ({
    name: appointment.name,
    fee: appointment.fee,
  }));

  if (chartData.length === 0) {
    return (
      <p className="text-gray-500 text-center my-10 text-2xl font-semibold h-[50vh] items-center justify-center flex">
        No appointments booked yet.
      </p>
    );
  }

  // for rechart
  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
   Z`;

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div>
      <div className="flex justify-center my-10">
        <BarChart
          width={700}
          height={400}
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            formatter={(value) => [`${value} Taka`, "Fee"]}
            labelStyle={{ fontWeight: "bold" }}
          />
          <Bar dataKey="fee" fill="#8884d8" shape={<TriangleBar />} />
        </BarChart>
      </div>
      <div className="text-center py-10 space-y-5">
        <h1 className="text-3xl font-bold">My Today Appointments</h1>
        <p className="text-gray-500">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience.
        </p>
      </div>
    </div>
  );
};

export default AppointmentChart;
