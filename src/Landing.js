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
    loadEURates();
    loadJPRates();
    loadINRates();
    loadHKRates();
    loadGBRates();
    setInterval(() => {
      loadRates();
      loadEURates();
      loadJPRates();
      loadINRates();
      loadHKRates();
      loadGBRates();
    }, 60000);
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

  function loadJPRates() {
    fetch(
      "https://api.exchangeratesapi.io/latest?base=JPY&symbols=USD,EUR,GBP,JPY,INR,HKD"
    )
      .then((res) => res.json())
      .then((data) => {
        setJpyRate(data.rates);
        console.log(data.rates);
      })
      .catch(console.log);
  }

  function loadGBRates() {
    fetch(
      "https://api.exchangeratesapi.io/latest?base=GBP&symbols=USD,EUR,GBP,JPY,INR,HKD"
    )
      .then((res) => res.json())
      .then((data) => {
        setGbpRate(data.rates);
        console.log(data.rates);
      })
      .catch(console.log);
  }

  function loadHKRates() {
    fetch(
      "https://api.exchangeratesapi.io/latest?base=HKD&symbols=USD,EUR,GBP,JPY,INR,HKD"
    )
      .then((res) => res.json())
      .then((data) => {
        setHkdRate(data.rates);
        console.log(data.rates);
      })
      .catch(console.log);
  }

  function loadINRates() {
    fetch(
      "https://api.exchangeratesapi.io/latest?base=INR&symbols=USD,EUR,GBP,JPY,INR,HKD"
    )
      .then((res) => res.json())
      .then((data) => {
        setInrRate(data.rates);
        console.log(data.rates);
      })
      .catch(console.log);
  }

  function loadEURates() {
    fetch("https://api.exchangeratesapi.io/latest?symbols=USD,GBP,JPY,INR,HKD")
      .then((res) => res.json())
      .then((data) => {
        setEuRate(data.rates);
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
        <div className="Header__Logo-top">INDORIA LABS</div>
        <div className="Header__Logo-bottom">NORTH AMERICA</div>
        <div className="Header__Logo-short">ILNA</div>
      </div>
      <div className="Header__Title">
        <div className="Header__Title-main">FELICITY</div>
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
          from{" "}
          <a alt="European Central Bank Link" href="https://www.ecb.europa.eu">
            European Central Bank
          </a>{" "}
          and are updated every 60 seconds. Currently, major currency pairs are
          USD, GBP, EUR, JPY, HKD, and INR.
        </div>
      </div>
      <div className="CurrencyCards">
        <Card
          countryname="UNITED STATES"
          currencyName="United States Dollar"
          usdrate={americanRate.USD}
          gbprate={americanRate.GBP}
          eurrate={americanRate.EUR}
          jpyrate={americanRate.JPY}
          hkdrate={americanRate.HKD}
          inrrate={americanRate.INR}
        ></Card>
        <Card
          countryname="EUROPEAN UNION"
          currencyName="Euro"
          usdrate={euRate.USD}
          gbprate={euRate.GBP}
          eurrate="1"
          jpyrate={euRate.JPY}
          hkdrate={euRate.HKD}
          inrrate={euRate.INR}
        ></Card>
        <Card
          countryname="JAPAN"
          currencyName="Japanese Yen"
          usdrate={jpyRate.USD}
          gbprate={jpyRate.GBP}
          eurrate={jpyRate.EUR}
          jpyrate={jpyRate.JPY}
          hkdrate={jpyRate.HKD}
          inrrate={jpyRate.INR}
        ></Card>
        <Card
          countryname="HONG KONG"
          currencyName="Hong Kong Dollar"
          usdrate={hkdRate.USD}
          gbprate={hkdRate.GBP}
          eurrate={hkdRate.EUR}
          jpyrate={hkdRate.JPY}
          hkdrate={hkdRate.HKD}
          inrrate={hkdRate.INR}
        ></Card>
        <Card
          countryname="UNITED KINGDOM"
          currencyName="Pound Sterling"
          usdrate={gbpRate.USD}
          gbprate={gbpRate.GBP}
          eurrate={gbpRate.EUR}
          jpyrate={gbpRate.JPY}
          hkdrate={gbpRate.HKD}
          inrrate={gbpRate.INR}
        ></Card>
        <Card
          countryname="INDIA"
          currencyName="Indian Rupee"
          usdrate={inrRate.USD}
          gbprate={inrRate.GBP}
          eurrate={inrRate.EUR}
          jpyrate={inrRate.JPY}
          hkdrate={inrRate.HKD}
          inrrate={inrRate.INR}
        ></Card>
      </div>
    </div>
  );
}

export default Landing;
