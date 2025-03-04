import dynamic from "next/dynamic";
import React from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ColumnChart = ({
  data,
  categories,
  minutes,
  width,
  height,
  barWidth,
}: any) => {
 
  const options = {
    chart: {
      type: "bar",
      toolbar: {
        show: false, // Set to false to hide the menu icon
      },
    },
    colors: ["#C6C7F8"],
    plotOptions: {
      bar: {
        columnWidth: `${barWidth ? barWidth : "30px"}`,
        colors: {
          ranges: [
            {
              from: 0,
              to: 1500,
              color: `${barWidth ? "#fff" : "#95A4FC"}`, // Red color for values between 0 and 100
            },
            {
              from: 1600,
              to: 2499,
              color: "#BAEDBD", // Green color for values between 101 and 200
            },
            {
              from: 2500,
              to: 3500,
              color: "#B1E3FF", // Green color for values between 101 and 200
            },
            // Add more ranges and colors as needed
          ],
        },
        borderRadius: `${barWidth ? 2 : 6}`,
        dataLabels: {
            position:'',
            show:false,
          enabled: false, // Set to false to hide data labels inside the bars
        },
        stroke: {
          show: false,
        },
      },
    },

    xaxis: {
      categories: categories,
        //       labels: {
        //     show: false, // Set to false to hide X-axis labels
        //   },
          axisBorder: {
            show: barWidth?false:true, // Set to false to hide the horizontal grid lines along the X-axis
          },
      labels: {
        show:barWidth?false:true,
        style: {
          fontFamily: "Helvetica",
          fontSize: "13px", // Adjust the font size as needed
          fontWeight: "normal",
          textDecoration: "none",
          fontStyle: "normal",
          colors: "#fff",
        },
      },
    },
    grid: {
      show: barWidth?false:true,
      borderColor: '#ffffff10', // Set the color of the grid lines
    },
    tooltip: {
      enabled: false, // Set to false to disable tooltips
    },

    yaxis: {
      labels: {
        formatter: function (value: any) {
          return `${value}${minutes ? " min" : ""}`
        },
        style: {
          fontSize: "12px", // Adjust the font size as needed
          fontWeight: "normal",
          textDecoration: "none",
          fontStyle: "normal",
          colors: ["#fff"], // Array of colors for each category
        },
      },
      title: {
        text: "",
      },
    },
  };
  return (
    <Chart
      options={options} series={[{ data }]} type="bar" width={width ? width : 420} height={height ? height : 250} />
  );
};

export default ColumnChart;
