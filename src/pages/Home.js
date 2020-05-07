import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun?",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maxime ratione, numquam doloremque laboriosam libero, sapiente aut qui, esse magni omnis? Ab dolorum, illum nesciunt obcaecati quam optio iure distinctio.",
  },
  {
    id: 2,
    title: "Czym jest paradoks Fermiego?",
    author: "Krzysztof Kowalski",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maxime ratione, numquam doloremque laboriosam libero, sapiente aut qui, esse magni omnis? Ab dolorum, illum nesciunt obcaecati quam optio iure distinctio.",
  },
  {
    id: 3,
    title: "Ciemna materia i ciemnia energia?",
    author: "Piotr Sławek",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maxime ratione, numquam doloremque laboriosam libero, sapiente aut qui, esse magni omnis? Ab dolorum, illum nesciunt obcaecati quam optio iure distinctio.",
  },
];

const Home = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));

  return <div className="home">{artList}</div>;
};

export default Home;
