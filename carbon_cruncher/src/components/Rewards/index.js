import React from "react";
import { CardWrapper } from "./styled";
import Card from "../Cards";

const Rewards = () => {
  const devices = [
    { device_name: "15% Off", imgurl: "/images/train.png" },
    { device_name: "10% Off", imgurl: "/images/plantshop.png" },
    { device_name: "10% Off", imgurl: "/images/train.png" },
    { device_name: "10% Off", imgurl: "/images/plantshop.png" },
    { device_name: "10% Off", imgurl: "/images/bike.jpg" },
    { device_name: "10% Off", imgurl: "/images/train.png" },
    { device_name: "10% Off", imgurl: "/images/firstbus.png" },
    { device_name: "15% Off", imgurl: "/images/train.png" },
    { device_name: "15% Off", imgurl: "/images/plantshop.png" },
    { device_name: "15% Off", imgurl: "/images/firstbus.png" },
    { device_name: "15% Off", imgurl: "/images/plantshop.png" },
    { device_name: "5% Off", imgurl: "/images/train.png" },
    { device_name: "5% Off", imgurl: "/images/plantshop.png" },
    { device_name: "5% Off", imgurl: "/images/firstbus.png" },
    { device_name: "5% Off", imgurl: "/images/plantshop.png" },
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
