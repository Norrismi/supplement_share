import React, { Component } from "react";
import TopNav from "../Navigation/TopNav/TopNav";
import "./AuthForm.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../Store/Actions/authActions";

class SignUp extends Component {
  state = {
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.signUp(this.state);
  };

  render() {
    // let { formErrors } = this.state;

    const { auth, authError } = this.props;

    if (auth.uid) return <Redirect to="/" />;

    return (
      <div>
        <TopNav />
        <div className="auth-container">
          <div className="auth-form">
            <form onSubmit={this.handleSubmit}>
              <h5 className="auth-title">Sign Up</h5>
              <div>
                <input
                  id="auth-input"
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  placeholder="First Name"
                />
              </div>
              <br />

              <div>
                <input
                  id="auth-input"
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  placeholder="Last Name"
                />
              </div>
              <br />
              <div>
                <input
                  id="auth-input"
                  type="password"
                  name="password"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="Password"
                  required
                />
              </div>
              <br />
              <div>
                <input
                  id="auth-input"
                  type="email"
                  name="email"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="abc@email.com"
                  required
                />
              </div>

            {authError ?   <p>{authError}</p> : null}

              <br />

              <div className="auth-btn-container">
                <button className="auth-sub" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
