import React, { Component } from "react";
import TopNav from "../Navigation/TopNav/TopNav";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div>
        <TopNav />
        <h2>Hello from Dashboard</h2>
      </div>
    );
  }
}

export default Dashboard;
