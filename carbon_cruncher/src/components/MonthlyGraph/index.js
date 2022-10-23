import React from "react";
import { GraphWrapper, BarWrapper,CosumpCard, TreesCard } from "./styled";
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

const MonthlyGraph = ({months, consumptions, trees}) => {
  consumptions = consumptions ? consumptions : [1, 2, 100, 40, 90, 6, 25000];
  trees = trees ? trees : 250;
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
  const labels = months ? months :[
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
        data: consumptions,
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
        Carbon Emission for {name}
        <Container>
          <CosumpCard>
            <h5>{consumptions[consumptions.length -1]} <span>(CO<sub>2</sub>e)</span></h5>
          </CosumpCard>
          <TreesCard>
            <img src="/images/tree.png" />
            <h5>{trees}</h5>
          </TreesCard>
        </Container>
      </h4>
    </GraphWrapper>
  );
};

export default MonthlyGraph;
