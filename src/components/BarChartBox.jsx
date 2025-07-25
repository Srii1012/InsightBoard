import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';



const BarChartBox = ({ data }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 w-full max-w-xl">
      <h3 className="text-lg font-semibold mb-2">Sales</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartBox;
