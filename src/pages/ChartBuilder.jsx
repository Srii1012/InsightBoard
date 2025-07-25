import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ChartBuilder = () => {
  const navigate = useNavigate();

  const [barData, setBarData] = useState([
    { name: "", sales: "", date: new Date() }
  ]);

  const [lineData, setLineData] = useState([
    { day: "", signups: "", date: new Date() }
  ]);

  const handleAddBar = () => {
    setBarData([...barData, { name: "", sales: "", date: new Date() }]);
  };

  const handleAddLine = () => {
    setLineData([...lineData, { day: "", signups: "", date: new Date() }]);
  };

  const handleBarChange = (index, key, value) => {
    const updated = [...barData];
    updated[index][key] = value;
    setBarData(updated);
  };

  const handleLineChange = (index, key, value) => {
    const updated = [...lineData];
    updated[index][key] = value;
    setLineData(updated);
  };

  const handleSubmit = () => {
    localStorage.setItem("barData", JSON.stringify(barData));
    localStorage.setItem("lineData", JSON.stringify(lineData));
    navigate("/charts");
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold mb-4">📊 Build Your Chart Data</h2>

      {/* Bar Chart Data */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Sales (Bar Chart)</h3>
        {barData.map((item, idx) => (
          <div key={idx} className="flex gap-4 mb-2 items-center">
            <input
              type="text"
              placeholder="Month"
              value={item.name}
              onChange={(e) => handleBarChange(idx, "name", e.target.value)}
              className="p-2 rounded bg-white dark:bg-gray-700 w-1/3"
            />
            <input
              type="number"
              placeholder="Sales"
              value={item.sales}
              onChange={(e) => handleBarChange(idx, "sales", e.target.value)}
              className="p-2 rounded bg-white dark:bg-gray-700 w-1/3"
            />
            <DatePicker
              selected={new Date(item.date)}
              onChange={(date) => handleBarChange(idx, "date", date)}
              className="p-2 rounded bg-white dark:bg-gray-700 w-full max-w-xs"
              calendarClassName="!z-50"
              placeholderText="Select date"
            />
          </div>
        ))}
        <button
          onClick={handleAddBar}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          ➕ Add Month
        </button>
      </div>

      {/* Line Chart Data */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Signups (Line Chart)</h3>
        {lineData.map((item, idx) => (
          <div key={idx} className="flex gap-4 mb-2 items-center">
            <input
              type="text"
              placeholder="Day"
              value={item.day}
              onChange={(e) => handleLineChange(idx, "day", e.target.value)}
              className="p-2 rounded bg-white dark:bg-gray-700 w-1/3"
            />
            <input
              type="number"
              placeholder="Signups"
              value={item.signups}
              onChange={(e) =>
                handleLineChange(idx, "signups", e.target.value)
              }
              className="p-2 rounded bg-white dark:bg-gray-700 w-1/3"
            />
            <DatePicker
              selected={new Date(item.date)}
              onChange={(date) => handleLineChange(idx, "date", date)}
              className="p-2 rounded bg-white dark:bg-gray-700 w-full max-w-xs" calendarClassName="!z-50"
              placeholderText="Select date"
            />
          </div>
        ))}
        <button
          onClick={handleAddLine}
          className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          ➕ Add Day
        </button>
      </div>

      <button
        onClick={handleSubmit}
        className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        🚀 Generate Charts
      </button>
    </div>
  );
};

export default ChartBuilder;
