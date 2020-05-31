import React, { useState, useEffect } from "react";
import "./stylesheets/Landing.css";
import Card from "./Card";
import NumberFormat from "react-number-format";

function Landing() {
  const [mode, setMode] = useState("dark");
  const [americanRate, setAmericanRate] = useState([]);
  const [euRate, setEuRate] = useState([]);
  const [gbpRate, setGbpRate] = useState([]);
  const [jpyRate, setJpyRate] = useState([]);
  const [hkdRate, setHkdRate] = useState([]);
  const [inrRate, setInrRate] = useState([]);

  function colorToggle() {
    setMode((mode) => {
      if (mode === "dark") {
        return "light";
      } else {
        return "dark";
      }
    });
  }

  useEffect(() => {
    loadRates();
  }, []);

  function loadRates() {
    fetch(
      "https://api.exchangeratesapi.io/latest?base=USD&symbols=USD,EUR,GBP,JPY,INR,HKD"
    )
      .then((res) => res.json())
      .then((data) => {
        setAmericanRate(data.rates);
        console.log(data.rates);
      })
      .catch(console.log);
  }

  return (
    <div
      className="Landing"
      id="root"
      style={{ backgroundColor: mode === "light" ? "white" : "#1c1917" }}
    >
      <div
        className="Header__Logo"
        style={{ color: mode === "light" ? "black" : "#d7d7d7" }}
      >
        <div>INDORIA LABS</div>
        <div>NORTH AMERICA</div>
      </div>
      <div className="Header__Title">
        <div className="Header__Title-main">Felicity</div>
        <div className="Header__Title-sub">Current Currency Exchange Rates</div>
      </div>
      <div className="Header__DNC">
        <input type="checkbox" onClick={colorToggle}></input>
      </div>
      <div className="Description">
        <div
          className="Description__Text"
          style={{ color: mode === "light" ? "black" : "#d7d7d7" }}
        >
          Access real-time rates for all the major FX pairs. Rates are accessd
          from [INSERT-API] and are updated [INSERT-TIME]. Currently, major
          currency pairs are USD, GBP, EUR, JPY, HKD, and INR.
        </div>
      </div>
      <div className="CurrencyCards">
        <Card
          countryname="UNITED STATES"
          usdrate={americanRate.USD}
          gbprate={americanRate.GBP}
          eurrate={americanRate.EUR}
          jpyrate={americanRate.JPY}
          hkdrate={americanRate.HKD}
          inrrate={americanRate.INR}
        ></Card>
        <Card countryname="EUROPEAN UNION"></Card>
        <Card countryname="JAPAN"></Card>
        <Card countryname="HONG KONG"></Card>
        <Card countryname="UNITED KINGDOM"></Card>
        <Card countryname="INDIA"></Card>
      </div>
    </div>
  );
}

export default Landing;
