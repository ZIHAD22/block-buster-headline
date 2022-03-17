import React from "react";

const getDateString = (dataTimeString) => {
  return new Date(dataTimeString).toDateString();
};

const NewsItem = ({ item }) => {
  return (
    <div className="card mb-4">
      {item.urlToImage && (
        <img className="card-img-top" src={item.urlToImage} alt={item.title} />
      )}
      <div className="card-body">
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#424242" }}
        >
          <h5 className="card-title">{item.title}</h5>
        </a>
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#424242" }}
        >
          {item.content}
        </a>
        <div>
          <small className="mt-2 d-flex align-items-center justify-content-between">
            <strong>published at {getDateString(item.publishedAt)} </strong>
            <div
              style={{
                padding: "0.25rem 0.5rem",
                background: "#ededed",
                color: "#424242",
                borderRadius: "0.25rem",
                display: "inline-block",
              }}
              className="ms-auto"
            >
              <small>{item.source.name}</small>
            </div>
          </small>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
