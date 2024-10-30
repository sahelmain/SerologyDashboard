// src/pages/LeveyJenningsChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

function LeveyJenningsChart({ chartData }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        suggestedMin: 0,
        suggestedMax: 100,
        title: {
          display: true,
          text: 'Value',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Samples',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  return (
    <div className="container mx-auto mt-10 p-5">
      <h2 className="text-xl font-bold">Levey-Jennings Chart</h2>
      <div className="chart-container" style={{ height: '400px' }}>
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}

export default LeveyJenningsChart;
