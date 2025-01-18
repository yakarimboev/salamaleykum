import React from "react";
import "./Header.css";
import dash from '../assets/Dashboard.svg'

export default function Header() {
  return (
    <section className="header">
      <div className="container">
        <div className="header-parent">
          <div className="img">
            <img src={dash} alt="" />
          </div>
          <div className="a">
            <a href="">Dashboard</a>
            <a href="">Product</a>
            <a href="">Customers</a>
            <a href="">Income</a>
            <a href="">Promote</a>
            <a href="">Help</a>
          </div>
        </div>
      </div>
    </section>
  );
}
