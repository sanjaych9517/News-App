import React from "react";
import Wraper from "./Wraper";
import { useNewsContext } from "../context/NewsContext";

const Category = ({ className }) => {
  const { setNews, fetchNews } = useNewsContext();

  const categories = [
    "business",
    "science",
    "entertainment",
    "sportst",
    "health",
    "general",
    "echnology",
  ];

  const handleClick = async (e) => {
    const cat = e.target.value;
    const data = await fetchNews(`/everything?q=${cat}`);

    setNews(data.articles);
  };

  return (
    <div className={`${className}`}>
      <Wraper>
        <div
          className={`max-w-full w-fit m-auto flex overflow-x-auto px-4 scrollbar-none gap-5 `}
        >
          {categories.map((category) => {
            return (
              <button
                onClick={handleClick}
                key={category}
                value={category}
                className="btn btn-primary"
              >
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
