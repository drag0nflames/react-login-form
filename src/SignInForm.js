import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignInForm extends Component {
  render() {
    return (
      <div className="FormCenter">
        <form className="FormFields" onSubmit="this.handleSubmit">
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
              placeholder="Enter Your Password"
              name="password"
            />
          </div>

          <div>
            <button className="FormField__Button mr-20">Sign In</button>
            <Link to="/" className="FormField_Link">
              Create Account
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
