import { useState } from "react";
import Chart from "react-apexcharts";

function BarChart() {
  const [chartOptions] = useState({});
  const [chartData] = useState([]);

  return (
    <Chart
      options={chartOptions}
      series={chartData}
      type="bar"
      width="100%"
      height="100%"
    />
  );
}

export default BarChart;
