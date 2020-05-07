import React from "react";
import { Route, Switch } from "react-router-dom";
import "./../styles/Header.css";
import img1 from "./../images/road-1209369_1280.jpg";
import img2 from "./../images/taxi-cab-381233_1280.jpg";
import img3 from "./../images/traffic-3612474_1280.jpg";

const Header = () => {
  return (
    <>
      <Switch>
        <Route path="/products" render={() => <img src={img3} alt="road" />} />
        <Route path="/contact" render={() => <img src={img2} alt="road" />} />
        <Route path="/admin" render={() => <img src={img1} alt="road" />} />
        <Route exact path="/" render={() => <img src={img1} alt="road" />} />
        <Route render={() => <img src={img2} alt="road" />} />
      </Switch>
      {/* <img src={img} alt="header" /> */}
    </>
  );
};

export default Header;
