import React, { Component } from "react";
import { render } from "react-dom";
import got from "./got";
import HouseList from "./HouseList";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  state = {
    houses: got.houses
  };
  render() {
    const houseList = this.state.houses.map((house, index) => (
      <li key={index}>
        <h4>{house.familyName}</h4>
        <img src={house.banner} alt="house.banner" />
      </li>
    ));
    return (
      <div style={styles}>
        <h2>
          Game of Thrones Houses {"\u2694"} Rad! {"\u2694"}
        </h2>
        {/* <HouseList houses={this.state.houses} /> */}
        <ul>{houseList}</ul>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
