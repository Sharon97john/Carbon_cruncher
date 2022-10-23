import Navbar from "../Navbar";
import Card from "../Cards";
import { Container } from "../../main";
import { CardWrapper } from "./styled";
import MonthlyGraph from "../MonthlyGraph";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Dashboard = () => {
  const devices = [
    {
      name: "Alexa",
      logosrc: "/images/alexa.png",
      status: 1,
    },
    {
      name: "Google Mini",
      logosrc: "/images/alexa.png",
      status: 2,
    },,
    {
      name: "Google Mini",
      logosrc: "/images/alexa.png",
      status: 2,
    },
    {
      name: "Google Mini",
      logosrc: "/images/alexa.png",
      status: 2,
    },
  ];
  return (
    <Container>
      <Container className="adjustment">
        <CardWrapper className="ad-clr">
          <Card {...{ name: "", logosrc: "/images/add.png" }} />
          {devices.length > 0 &&
            devices.map((device, index) => {
              //   console.log(device);
              return <Card key={index} {...device} />;
            })}
        </CardWrapper>
        <MonthlyGraph></MonthlyGraph>
      </Container>
    </Container>
  );
};

export default Dashboard;
