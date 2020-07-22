import React, { Component } from "react";
import TopNav from "../Navigation/TopNav/TopNav";
import {connect} from 'react-redux'
import './DashboardStyles.css'
import SupplementCard from '../Supplement/SupplementCard/SupplementCard'

class Dashboard extends Component {
  render() {
    const { supplement } = this.props;
    return (
      <div>
            <TopNav />
        <div className=" row">
          <div className="col s12 m6">
            <h3>Supplement Community</h3>
            {/* If the paragraph wants to be kept a form is needed */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="col s12 m5 offset-m1">
            <h3>My Supplements</h3>
            <div className="supplement-card">
            {supplement &&
              supplement.map(supplement => {
                return <SupplementCard supplement={supplement} key={supplement.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    supplement: state.supplement.submission
  }
}

export default connect(mapStateToProps)(Dashboard);
