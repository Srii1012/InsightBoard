import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const Dashboard = () => {
  const [barData, setBarData] = useState([]);
  const [lineData, setLineData] = useState([]);

  useEffect(() => {
    // Fetches chart data from localStorage
    const bar = localStorage.getItem("barData");
    const line = localStorage.getItem("lineData");

    setBarData(bar ? JSON.parse(bar) : []);
    setLineData(line ? JSON.parse(line) : []);
  }, []);

  return (
    <div>
        <h1 className="text-3xl font-bold mb-6">Welcome to your Dashboard</h1>
        
        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bar Chart */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
            <h3 className="text-lg font-semibold mb-2">Sales (Bar Chart)</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Line Chart */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
            <h3 className="text-lg font-semibold mb-2">Signups (Line Chart)</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={lineData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="signups" stroke="#10b981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
    </div>
  );
};

export default Dashboard;
