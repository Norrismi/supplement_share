import React, { Component } from "react";
import TopNav from "../../Navigation/TopNav/TopNav";
import "../../Supplement/SupplementCard/SC-Styles.css";
import SupplementCard from "../../Supplement/SupplementCard/SupplementCard";
import Typography from '@material-ui/core/Typography';

import "./UserPageStyles.css";
import NewSupplementForm from "../../Supplement/NewSupplement/NewSupplementForm";
import { connect } from "react-redux";

class UserPage extends Component {
  render() {
    const { supplement } = this.props;

    return (
      <div>
        <TopNav />
        <div className="user-container">
          <div className="left-side">
              <Typography variant="h4"> My Supplements</Typography>
            {/* <h3>About Me</h3> */}
            {/* If the paragraph wants to be kept a form is needed */}
            <p>
              Labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="right-side">
          <Typography variant="h4"> My Supplements</Typography>
          
            {/* <div className="supplement-card"> */}

            {/* supplementName={a.supplementName}
            benefit={a.benefit}
            description={a.description}
            submittedBy={a.submittedBy} */}

            {supplement &&
              supplement.map(supplement => {
                return <SupplementCard supplement={supplement} key={supplement.id} />;
              })}

            {/* <SupplementCard className="supplement-card" supplement={supplement}  /> */}
            {/* </div> */}
          </div>
        </div>
        <div className="add-supplement-container">
          <div className="add-supplement">
            <NewSupplementForm />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    supplement: state.supplement.submission,
  };
};

export default connect(mapStateToProps)(UserPage);



