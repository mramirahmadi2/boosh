import { Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Chart from "react-apexcharts";

const ApexChart = () => {
  const [options, setOptions] = useState({
    chart: {
      type: "polarArea",
    },
    stroke: {
      colors: ["#fff"],
    },
    fill: {
      opacity: 0.8,
    },
    responsive: [
      {
        breakpoint: 180,
        options: {
          chart: {
            width: 50,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    labels: [" رمان", " کتب دانشگاهی", " کتب آموزشی", " سرگرمی", " روانشناسی"],
  });

  const [series, setSeries] = useState([55, 52, 38, 35, 40]);

  return (
    <div id="chart">
      <Typography variant="h5">پر بازدید ترین کتاب ها</Typography>

      <Container sx={{ width: "700px" }}>
        <Chart options={options} series={series} type="polarArea" />
      </Container>
    </div>
  );
};

export default ApexChart;
