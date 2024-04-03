import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useRef, useEffect } from "react";

const BookingGraph = () => {
  const chartRef = useRef(null);
  // Sample data for monthly earnings
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Monthly Earnings",
        data: [
          1200, 1400, 1600, 1300, 1500, 1700, 1800, 2200, 1900, 2000, 2100,
          2300,
        ],
        backgroundColor: [
          "rgb(197, 174, 219)",
          "rgb(197, 174, 219)",
          "rgb(197, 174, 219)",
          "rgb(197, 174, 219)",
          "rgb(197, 174, 219)",
          "rgb(197, 174, 219)",
          "rgb(197, 174, 219)",
          "rgb(168, 121, 212)",
          "rgb(197, 174, 219)",
          "rgb(197, 174, 219)",
          "rgb(197, 174, 219)",
          "rgb(197, 174, 219)",
        ],
        borderRadius: 10,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false, // This will remove the horizontal grid lines
        },
      },
      y: {
        stacked: true,
        display: false,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
        legend: {
          display: false,
          position: 'bottom',
        },
      },
  };


  return (
    <div className=" h-full p-4 ">
    <p className='upperpietext'>Customers</p>
        <p className='underupperpiecharttext'>Customer that buy products</p>
      <Bar
        style={{ width: "100%", maxHeight:"50vh"}}
        data={data}
        options={options}
        className="wecanhaveitbetter h-2/3" 
      />
    </div>
  );
};

export default BookingGraph;
