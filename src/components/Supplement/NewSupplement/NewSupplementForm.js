import React, { Component } from "react";
import "./NS-Form-Styles.css";
import { createSupplement } from "../../Store/Actions/supplementActions";
import { connect } from "react-redux";


class NewSupplementForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      supplementName: "",
      benefit: "",
      description: "",
      createdDate: "",
    };
  }

  handleChange = (event) => {
    //console.log(event);
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      supplementName: "",
      benefit: "",
      description: "",
      createdDate: "",
    });

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
                name="supplementName"
                value={this.state.supplementName}
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

            <div className="created-date">
              <label>Date Created</label>
              <br />
              <input 
              type="date" 
              id="created-date" 
              name="createdDate"
              value={this.state.createdDate}
              onChange={this.handleChange} 
              />
            </div>
          

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
