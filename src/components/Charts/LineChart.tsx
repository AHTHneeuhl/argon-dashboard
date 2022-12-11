import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { lineChartData, lineChartOptions } from "variables/charts";

function LineChart() {
  const [chartData] = useState(lineChartData);
  const [chartOptions] = useState(lineChartOptions);

  return (
    <ReactApexChart
      options={chartOptions}
      series={chartData}
      type="area"
      width="100%"
      height="100%"
    />
  );
}

export default LineChart;
