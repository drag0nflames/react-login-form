import React, { Component } from "react";

class SignUpForm extends Component {
  render() {
    return (
      <div>
        <form className="FormFields" onSubmit="this.handleSubmit">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="FormField__Input"
              placeholder="Enter your name"
              name="name"
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter your email address"
              name="email"
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              name="password"
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm_password"
              className="FormField__Input"
              name="confirm_password"
            />
          </div>

          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input
                className="FormField__Checkbox"
                type="checkbox"
                name="hasAgreed"
              />
              I agree to all the statements in{" "}
              <a href="_blank" className="FormField_TermsLink">
                terms of service
              </a>
            </label>
          </div>

          <div>
            <button className="FormField__Button mr-20">Sign Up</button>
            <a href="_blank" className="FormField_Link">
              I am already a member
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
