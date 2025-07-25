import React, { useEffect, useState } from "react";
import BarChartBox from "../components/BarChartBox";
import LineChartBox from "../components/LineChartBox";
import { barChartDataSet, lineChartDataSet } from "../data/chartData";

const Dashboard = () => {
  const [barData, setBarData] = useState([]);
  const [lineData, setLineData] = useState([]);

  // Load data from localStorage or fallback to dummy data
  useEffect(() => {
    const bar = JSON.parse(localStorage.getItem("barData"));
    const line = JSON.parse(localStorage.getItem("lineData"));

    setBarData(bar || barChartDataSet.last6Months);
    setLineData(line || lineChartDataSet.last7Days);
  }, []);

  const handleRefresh = () => {
    localStorage.removeItem("barData");
    localStorage.removeItem("lineData");
    setBarData(barChartDataSet.last6Months);
    setLineData(lineChartDataSet.last7Days);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">📊 Dashboard Overview</h1>
        <button
          onClick={handleRefresh}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
        >
          🔄 Reset Charts
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Sales (Last 6 Months)</h2>
          <BarChartBox data={barData} />
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">User Signups (Last 7 Days)</h2>
          <LineChartBox data={lineData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
