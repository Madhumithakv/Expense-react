import React from "react";
import { Pie } from "react-chartjs-2";

function ExpensePieChart({ expenses }) {
  const categories = ["Food", "Travel", "Entertainment", "Other"];
  const categoryData = categories.map((category) =>
    expenses
      .filter((expense) => expense.category === category)
      .reduce((sum, expense) => sum + expense.amount, 0)
  );

  const data = {
    labels: categories,
    datasets: [
      {
        data: categoryData,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
      },
    ],
  };

  return (
    <div style={{ width: "400px", margin: "0 auto" }}>
      <Pie data={data} />
    </div>
  );
}

export default ExpensePieChart;
