export const barChartDataSet = {
  last6Months: [
    { name: "January", sales: 12 },
    { name: "February", sales: 19 },
    { name: "March", sales: 3 },
    { name: "April", sales: 5 },
    { name: "May", sales: 2 },
    { name: "June", sales: 3 },
  ],
  last3Months: [
    { name: "April", sales: 5 },
    { name: "May", sales: 2 },
    { name: "June", sales: 3 },
  ]
};

export const lineChartDataSet = {
  last7Days: [
    { day: "Mon", signups: 10 },
    { day: "Tue", signups: 15 },
    { day: "Wed", signups: 8 },
    { day: "Thu", signups: 12 },
    { day: "Fri", signups: 18 },
    { day: "Sat", signups: 5 },
    { day: "Sun", signups: 7 },
  ],
  last3Days: [
    { day: "Fri", signups: 18 },
    { day: "Sat", signups: 5 },
    { day: "Sun", signups: 7 },
  ]
};
export const chartData = {
  barChartDataSet,  
    lineChartDataSet
};

export default chartData;