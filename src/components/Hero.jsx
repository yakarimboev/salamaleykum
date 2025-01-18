import React from 'react'
import './Hero.css'
import lupa from '../assets/lupa.svg'


export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-parent">
          <div className="up">
            <h2>Hello Evano 👋🏼</h2>
            <div className="inp">
              <img src={lupa} alt="" />
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className="down"></div>
        </div>
      </div>
    </section>
  );
}
