import React from "react";
import Category from "./Category";

const SelectProductFromCatory = ({ categories }) => {
  return (
    <>
      <div>
        {categories?.map((category) => (
          <Category key={category._id} category={category} />
        ))}
      </div>
    </>
  );
};

export default SelectProductFromCatory;
