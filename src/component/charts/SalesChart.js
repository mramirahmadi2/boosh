import { Typography } from "@mui/material";
import React, { useState } from "react";
import Chart from "react-apexcharts";

const SalesChart = () => {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: [ "قلعه حیوانات","صدسال تنهایی","کمیک تنتن","آموزش زبان فرانسوی","آموزش پایتون"]
    }
  });

  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [45,30,10,6,4]
    }
  ]);

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Typography variant="h5">پروفروش ترین کتاب های ماه</Typography>
          <Chart options={options} series={series} type="bar" width="500" />
        </div>
      </div>
    </div>
  );
};

export default SalesChart;
