import React from "react";
import NewsItem from "../NewsItem/NewsItem";
const NewsList = ({ news }) => {
  console.log(news);
  return (
    <div>
      {news && news.length === 0 && <h4>There Is No News</h4>}

      {news && news.map((item) => <NewsItem key={item.title} item={item} />)}
    </div>
  );
};

export default NewsList;
