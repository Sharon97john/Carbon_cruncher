import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Card from "../Cards";
import { Container } from "../../main";
import { CardWrapper } from "./styled";
import MonthlyGraph from "../MonthlyGraph";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { carbonfootprint_calculation } from "../../api";
const Dashboard = () => {
  const [response, setresponse] = useState({});
  useEffect(() => {
    callcarbonfootprint_calculation();
  }, []);
  const callcarbonfootprint_calculation = async () => {
    try {
      let data = await carbonfootprint_calculation();
      // console.log(response);
      setresponse(data.data);
      // console.log(response);
    } catch (err) {
    } finally {
    }
  };
  // const devices = [
  //   {
  //     name: "Alexa",
  //     logosrc: "/images/alexa.png",
  //     status: 1,
  //   },
  //   {
  //     name: "Google Mini",
  //     logosrc: "/images/mini.png",
  //     status: 2,
  //   },
  //   ,
  //   {
  //     name: "Philis Hue",
  //     logosrc: "/images/hue.png",
  //     status: 2,
  //   },
  //   {
  //     name: "Google Mini",
  //     logosrc: "/images/alexa.png",
  //     status: 2,
  //   },
  // ];
  return (
    <Container>
      <Container className="adjustment">
        <CardWrapper className="ad-clr">
          <Card {...{ device_name: "", imgurl: "/images/add.png" }} />
          {response &&
            response?.devices?.length > 0 &&
            response?.devices.map((device, index) => {
              //   console.log(device);
              return <Card key={index} {...device} />;
            })}
        </CardWrapper>
        {response != null && <MonthlyGraph {...response}></MonthlyGraph>}
      </Container>
    </Container>
  );
};

export default Dashboard;
