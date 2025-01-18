import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="wrapper">
      <div className="wrapper-left">
        <Header />
      </div>

      <div className="wrapper-right">
        <Hero />
      </div>
    </div>
  );
}
