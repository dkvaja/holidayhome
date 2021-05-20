import React from "react";
import CategoryBox from "../components/CategoryBox";
import Data from "../mockData/CategoryData";

const ThingsToDo = () => {
  return (
    <div className="things_to_do_container flex-column-center">
      <div className="things_to_do_box flex-column-center">
        <h1 className="section-heading">Things to do</h1>
        <div className="category_cantainer flex-row-center">
          {Data.map((item, index) => {
            return <CategoryBox key={index} payLoad={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ThingsToDo;
