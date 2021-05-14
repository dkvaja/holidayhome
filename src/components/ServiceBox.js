import React from "react";

const ServiceBox = (props) => {
  return (
    <>
      <div className="box flex-column-center">
        <props.icon  className="box_icon"/>
        <h2>
            {props.category}
        </h2>
      </div>
    </>
  );
};

export default ServiceBox;
