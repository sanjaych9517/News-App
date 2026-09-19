import React from "react";
import Wraper from "./Wraper";

const Category = ({className}) => {
  const categories = [
    "business",
    "science",
    "entertainment",
    "sportst",
    "health",
    "general",
    "echnology",
  ];

  return (
    <div className={`${className}`}>
      <Wraper>
        <div
          className={`max-w-full w-fit m-auto flex overflow-x-auto px-4 scrollbar-none gap-5 `}
        >
          {categories.map((category) => {
            return (
              <button key={category} className="btn btn-primary">
                {category}
              </button>
            );
          })}
        </div>
      </Wraper>
    </div>
  );
};

export default Category;
