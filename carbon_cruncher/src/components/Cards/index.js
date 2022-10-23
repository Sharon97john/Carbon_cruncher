import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styled.js";
import { CardWrapperInner, LogoDevice } from "./styled.js";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

const Card = ({ device_name, imgurl, status }) => {
  return (
    <CardWrapperInner>
      <div className="device-icon">
        <LogoDevice className={!status ? "add-size" : ""} src={imgurl} />
      </div>
      {device_name && <div className="device-name">{device_name}</div>}
      {status && (
        <div className="device-status">
          {status == 1 && (
            <FontAwesomeIcon className="check-icon" icon={faCheck} />
          )}
          {status == 2 && (
            <FontAwesomeIcon className="cross-icon" icon={faTimes} />
          )}
          {<span>{status == 1 ? "Connected" : "Failed"}</span>}
        </div>
      )}
    </CardWrapperInner>
  );
};

export default Card;
