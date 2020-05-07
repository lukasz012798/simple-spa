import React from "react";

const Article = ({ title, author, text }) => {
  const styles = {
    marginTop: 40,
  };
  const pStyles = {
    fontSize: 18,
  };
  return (
    <article style={styles}>
      <h3
        style={{
          marginBottom: 3,
          textTransform: "uppercase",
        }}
      >
        {title}
      </h3>
      <span
        style={{
          marginBottom: 10,
          display: "block",
          fontSize: 17,
        }}
      >
        Autor: {author}
      </span>
      <p style={pStyles}>{text}</p>
      <br />
    </article>
  );
};

export default Article;
