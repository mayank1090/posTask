import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import "./Piegraph.css"

const DonutChart = () => {
  const data = {
    labels: ['Total New Customers'],
    datasets: [
      {
        data: [65, 35],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
        borderWidth: [2,5], 
        hoverOffset: 4,
        borderAlign:"inner",
        borderJoinStyle:"miter",
        weight:4,
        
      },
    ],
  };

  const options = {
    responsive:true,
    maintainAspectRatio: false,
    cutoutPercentage: 50, 
    legend: {
      display: false, 
    },
    plugins: {
        legend: {
          display: false, 
        }
      },
  };

  return (
    <div className='p-4 overflow-y-auto h-full'>
        <div>
        <p className='upperpietext'>Customers</p>
        <p className='underupperpiecharttext'>Customer that buy products</p>
        </div>
        <div className='grapghparentofpiegraph pt-6 pb-6 flex '>
      <Doughnut className=' flex-1 h-full ' data={data} options={options} />
      </div>
    </div>
  );
};

export default DonutChart;
