import React, { Component } from "react";
import TopNav from "../Navigation/TopNav/TopNav";
import "./AuthForm.css";

class SignIn extends Component {
  state = {
    password: "",
    email: "",
  };
  // postDataHandler = (e) => {
  //     e.preventDefault();
  //     this.props.onSubmit(this.state);

  //     const data = this.state;

  //     data.phone && data.message
  //       ? api.post("/submission.json", data)
  //       : this.setState({
  //           name: "",
  //           phone: "",
  //           email: "",
  //           message: "",
  //           success: [],
  //         });
  //   };

  handleChange = (event) => {
    console.log(event);
    const { name, value } = event.target;
    //   let formErrors = this.state.formErrors;

    //   switch (name) {
    //     case "email":
    //       formErrors.email = emailRegex.test(value)
    //         ? null
    //         : "Please enter a valid email address";
    //       break;

    //     default:
    //       break;
    //   }
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    // let { formErrors } = this.state;
    return (
      <div>
        <TopNav />
        <div className="auth-container">
          <div className="auth-form">
            <form onSubmit={this.handleSubmit}>
              <h5 className="auth-title">Sign In</h5>
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

              {/* {formErrors.phone ? <span>{formErrors.phone}</span> : null} */}

              {/* {formErrors.email ? <span>{formErrors.email}</span> : null} */}

              <br />
              <div className="auth-btn-container">

              <button className='auth-sub' type="submit">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
