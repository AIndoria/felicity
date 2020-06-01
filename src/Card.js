import React, { Component } from "react";
import "./stylesheets/card.css";
import { mode } from "./Landing";

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <div
          className="Card__Listings"
          style={{ color: this.props.dayNightMode }}
        >
          <p>
            USD:<span>{this.props.usdrate}</span>{" "}
          </p>
          <p>
            GBP:<span>{this.props.gbprate}</span>{" "}
          </p>
          <p>
            EUR:<span>{this.props.eurrate}</span>{" "}
          </p>
          <p>
            JPY:<span>{this.props.jpyrate}</span>{" "}
          </p>
          <p>
            HKD:<span>{this.props.hkdrate}</span>{" "}
          </p>
          <p>
            INR:<span>{this.props.inrrate}</span>{" "}
          </p>
        </div>
        <div className="Card__Title">
          <div className={this.props.countryColor}>
            {this.props.countryname}
          </div>
          <div
            className="card_countryCurrency"
            style={{ color: this.props.dayNightMode }}
          >
            {this.props.currencyName}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
