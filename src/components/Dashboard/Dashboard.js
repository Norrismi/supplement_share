import React from "react";
import TopNav from "../Navigation/TopNav/TopNav";
import "./DashboardStyles.css";
import { connect } from "react-redux";
import SupplementCard from "../Supplement/SupplementCard/SupplementCard";
import { Redirect, Link } from "react-router-dom";
import shareSupplement from "../Store/Actions/supplementActions";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const Dashboard = (props) => {
  const { supplement, auth, id } = props;
  //const {sharedSupplement} = state. 
  console.log(props.sharedSupplement)

  if (!auth.uid) {
    return <Redirect to="/SignIn" />;
  }

  return (
    <div>
      <TopNav />
      <div className=" row">
        <div className="col s12 m6">
          <h3>Supplement Community</h3>
          {/* If the paragraph wants to be kept a form is needed */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="col s12 m5 offset-m1">
          <h3>My Supplements</h3>
          <div className="supplement-card">
            {supplement &&
              supplement.map((supplement) => {
                return (
                  <Link to={`/supplement/${supplement.id}`} key={supplement.id}>
                    <SupplementCard
                      supplement={supplement}
                      key={supplement.id}
                    />
                  </Link>
                );
              })}
          </div>
          <h3>Shared Supplements</h3>
          {supplement &&
              supplement.map((supplement) => {
                return (
           
                    <SupplementCard
                      supplement={supplement}
                      key={supplement.id}
                    />
               
                );
              })}
     
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchShareSupplement: (id) => dispatch(id),
});

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    //supplement: state.supplement.submission,
    auth: state.firebase.auth,
    sharedSupplement: state.firestore.ordered.supplements
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps),
firestoreConnect([{ collection: "supplements" }])
)(Dashboard);
