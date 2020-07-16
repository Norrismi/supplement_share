import React, { Component } from "react";
import TopNav from "../../Navigation/TopNav/TopNav";
import "../../Supplement/SupplementCard/SC-Styles.css";
import SupplementCard from "../../Supplement/SupplementCard/SupplementCard";
import "./UserPageStyles.css";
import NewSupplementForm from "../../Supplement/NewSupplement/NewSupplementForm";

class UserPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <TopNav />
        <div className="user-container">
          <div className="left-side">
            <h3>About Me</h3>
            {/* If the paragraph wants to be kept a form is needed */}
            <p>
              Labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="right side">
            <h3>My Supplements</h3>
            <div className="supplement-card">
              <SupplementCard className="supplement-card" />
            </div>
          </div>
        </div>
        <div className="add-supplement-container">
          <div className="add-supplement">
         

            <NewSupplementForm/>
         
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;
