"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styled = require("./styled");

var _chart = require("chart.js");

var _reactChartjs = require("react-chartjs-2");

var _main = require("../../main");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MonthlyGraph = function MonthlyGraph(props) {
  console.log(props); // const consumptions = datapoints ? datapoints : [1, 2, 100, 40, 90, 6, 25000];
  // trees = trees ? trees : 250;
  // console.log(months,datapoints, consumption, trees)
  // const options = {
  //   responsive: true,
  //   // maintainAspectRatio: false,
  //   plugins: {
  //     legend: {
  //       position: false,
  //     },
  //     title: {
  //       display: true,
  //       // text: "Chart.js Bar Chart",
  //     },
  //   },
  // };
  // ChartJS.register(
  //   CategoryScale,
  //   LinearScale,
  //   PointElement,
  //   LineElement,
  //   Title,
  //   Tooltip,
  //   Legend
  // );
  // const labels = months ? months :[
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  // ];
  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: "Dataset 1",
  //       borderColor: "red",
  //       data: consumptions,
  //       backgroundColor: "red",
  //     },
  //   ],
  // };
  // const month = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];
  // const d = new Date();
  // let name = month[d.getMonth()];
  // return (
  //   <GraphWrapper>
  //     <h4>
  //       Your Carbon Emission Chart (CO<sub>2</sub>e)
  //     </h4>
  //     <BarWrapper>
  //       <Line options={options} data={data} />
  //     </BarWrapper>
  //     <h4>
  //       Carbon Emission for {name}
  //       <Container>
  //         <CosumpCard>
  //           <h5>{consumption} <span>(CO<sub>2</sub>e)</span></h5>
  //         </CosumpCard>
  //         <TreesCard>
  //           <img src="/images/tree.png" />
  //           <h5>{trees}</h5>
  //         </TreesCard>
  //       </Container>
  //     </h4>
  //   </GraphWrapper>
  // );
};

var _default = MonthlyGraph;
exports["default"] = _default;