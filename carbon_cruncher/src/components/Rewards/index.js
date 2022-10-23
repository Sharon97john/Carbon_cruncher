import React from "react";
import { CardWrapper } from "./styled";
import Card from "../Cards";

const Rewards = () => {
  const devices = [
    { name: "15% Off", logosrc: "/images/train.png" },
    { name: "10% Off", logosrc: "/images/plantshop.png" },
    { name: "10% Off", logosrc: "/images/train.png" },
    { name: "10% Off", logosrc: "/images/plantshop.png" },
    { name: "10% Off", logosrc: "/images/bike.jpg" },
    { name: "10% Off", logosrc: "/images/train.png" },
    { name: "10% Off", logosrc: "/images/firstbus.png" },
    { name: "15% Off", logosrc: "/images/train.png" },
    { name: "15% Off", logosrc: "/images/plantshop.png" },
    { name: "15% Off", logosrc: "/images/firstbus.png" },
    { name: "15% Off", logosrc: "/images/plantshop.png" },
  ];
  return (
    <CardWrapper className="ad-clr rewards adjustment">
      {devices.length > 0 &&
        devices.map((device, index) => {
          //   console.log(device);
          return <Card key={index} {...device} />;
        })}
    </CardWrapper>
  );
};

export default Rewards;
