import React from "react";
import { GraphWrapper, BarWrapper } from "./styled";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Container } from "../../main";

const MonthlyGraph = () => {
  const options = {
    responsive: true,
    // maintainAspectRatio: false,
    plugins: {
      legend: {
        position: false,
      },
      title: {
        display: true,
        // text: "Chart.js Bar Chart",
      },
    },
  };
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        borderColor: "red",
        data: [1, 2, 100, 40, 90, 6, 7],
        backgroundColor: "red",
      },
    ],
  };
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  let name = month[d.getMonth()];
  return (
    <GraphWrapper>
      <h4>
        Your Carbon Emission Chart (CO<sub>2</sub>e)
      </h4>
      <BarWrapper>
        <Line options={options} data={data} />
      </BarWrapper>
      <h4>
        Carbon Emission for {name} (CO<sub>2</sub>e)
        <Container></Container>
      </h4>
    </GraphWrapper>
  );
};

export default MonthlyGraph;
