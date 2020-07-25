import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../Store/Actions/authActions";

const SignedInLinks = (props) => {

  return (
    <ul className="right">
      <li>
        <NavLink to="/MyPage">My Page</NavLink>
      </li>
      <li>
        <a href="# " onClick={props.signOut}>
          Log Out
        </a>
      </li>
      <li>
        <NavLink to="/" className="btn-floating center  pink lighten-1">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    uid: state.firebase.auth.uid,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signOut: () => {
      dispatch(signOut());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
