import React from "react";
import ServiceBox from "./ServiceBox";
import GroupIcon from "@material-ui/icons/Group";
import WifiIcon from '@material-ui/icons/Wifi';
import PetsIcon from '@material-ui/icons/Pets';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';

const Services = () => {
  return (
    <>
      <div className="service_container flex-column-center">
      <h1>Facilities Provided</h1>
      <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati necessitatibus possimus recusandae corporis laboriosam temporibus 
      </p>
        <div className="service_box flex-row-center">
          <ServiceBox category={"up to 10 guest"} icon={GroupIcon}/>
          <ServiceBox category={"Free Wifi"} icon={WifiIcon}/>
          <ServiceBox category={"Pets Allowed"} icon={PetsIcon}/>
          <ServiceBox category={"Garden"} icon={LocalFloristIcon}/>
          <ServiceBox category={"Dining"} icon={LocalDiningIcon}/>
        </div>
      </div>
    </>
  );
};

export default Services;
