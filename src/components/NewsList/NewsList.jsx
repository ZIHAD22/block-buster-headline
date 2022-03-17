import React from "react";
import NewsItem from "../NewsItem/NewsItem";
const NewsList = ({ news }) => {
  return (
    <div>
      {news && news.length === 0 && (
        <h4 className="text-center">There Is No News</h4>
      )}

      {news && news.map((item) => <NewsItem key={item.title} item={item} />)}
    </div>
  );
};

export default NewsList;
