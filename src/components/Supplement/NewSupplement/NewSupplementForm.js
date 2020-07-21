import React, { Component } from "react";
import "./NS-Form-Styles.css";
import { createSupplement } from "../../Store/Actions/supplementActions";
import { connect } from "react-redux";

//Need to convert form to the supplementTracking project

class NewSupplementForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      benefit: "",
      description: "",
      createdDate: "",
    };
  }
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

  //   handleChange = (event) => {
  //     event.preventDefault();
  //     const { name, value } = event.target;
  //     let formErrors = this.state.formErrors;

  //     switch (name) {
  //       case "email":
  //         formErrors.email = emailRegex.test(value)
  //           ? null
  //           : "Please enter a valid email address";
  //         break;

  //       default:
  //         break;
  //     }
  //     this.setState({ formErrors, [name]: value });
  //   };

  handleChange = (event) => {
    console.log(event);
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ name: "", benefit: "", description: "", createdDate: "" });

    this.props.createSupplement(this.state);
    //console.log(this.state);
  };

  render() {
    // let { formErrors } = this.state;
    return (
      <div className="add-supplement">
        <div className="add-supplement-form">
          <form id="add-supplement-form" onSubmit={this.handleSubmit}>
            <h5 className="add-title-text">Add New Supplement</h5>
            <div className="supplement-name">
              <input
                id="add-sup-input"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="Supplement Name"
                required
              />
            </div>
            <br />
            <div className="supplement-benefit">
              <input
                id="add-sup-input"
                type="text"
                name="benefit"
                value={this.state.benefit}
                onChange={this.handleChange}
                placeholder="Supplement Benefit (ex. Better Sleep)"
                required
              />
            </div>
            <br />
            <div className="supplement-description">
              <textarea
                id="add-sup-textarea"
                className="textarea"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
                placeholder="Supplement Description"
                rows="20"
              ></textarea>
            </div>
            {/* {formErrors.phone ? <span>{formErrors.phone}</span> : null} */}
            {/* <div className="created-date">
              <label>Date Created</label>
              <br />
              <input 
              type="date" 
              id="created-date" 
              name="createdDate"
              value={this.state.description}
              onChange={this.handleChange} 
              />
            </div> */}
            {/* {formErrors.email ? <span>{formErrors.email}</span> : null} */}

            <br />
            <div className="add-btn-container">
              <button className="add-sup" type="submit">
                Add Supplement
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createSupplement: (supplement) => dispatch(createSupplement(supplement)),
  };
};

export default connect(null, mapDispatchToProps)(NewSupplementForm);
