import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Product from "./../pages/Product";
import ProductList from "./../pages/ProductList";
import Contact from "./../pages/Contact";
import Admin from "./../pages/Admin";
import Login from "./../pages/Login";
import ErrorPage from "../pages/ErrorPage";

const Page = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/products" exact component={ProductList} />
      <Route path="/product/:id" component={Product} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/admin" exact component={Admin} />
      <Route path="/login" component={Login} />
      <Route component={ErrorPage} />
    </Switch>
  );
};

export default Page;
