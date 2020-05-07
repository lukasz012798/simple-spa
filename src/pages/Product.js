import React from "react";
import Product from "./../components/Product";
import { Link } from "react-router-dom";

const ProductPage = ({ match }) => {
  // console.log(match.params.id);
  return (
    <>
      <h1>Strona produktu</h1>
      <Product id={match.params.id} />
      <Link to="/products">Powrót do listy produktów</Link>
    </>
  );
};

export default ProductPage;
