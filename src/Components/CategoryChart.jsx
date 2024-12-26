import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required elements
ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryChart = ({ data }) => {
  const chartData = {
    labels: data.map(expense => expense.category), // Assume 'category' field in expense
    datasets: [
      {
        data: data.map(expense => expense.amount), // Assume 'amount' field in expense
        backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0'], // Custom colors
      },
    ],
  };

  return (
    <div>
      <h3>Expense Category Distribution</h3>
      <Pie data={chartData} />
    </div>
  );
};

export default CategoryChart;
