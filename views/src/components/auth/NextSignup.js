import React from "react";
import signup from "../../img/signup.jpg";

const NextSignup = () => {
  return (
    <div className="bg-signup-2">
      <div className="signup">
        <img src={signup} alt="signup" className="imgLeft" />
        <form className="form-signup">
          <h1>Sign Up</h1>
          <span className="inputs">
            <div className="form_group">
              <label htmlFor="firstname">First Name</label>
              <input
                className="form_input"
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Firstname"
                required
              />
            </div>
            <div className="form_group">
              <label htmlFor="lastname">Last Name</label>
              <input
                className="form_input"
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Lastname"
                required
              />
            </div>
            <div className="form_group">
              <label htmlFor="role">Role</label>
              <span>
                <select required className="custom-select" id="role">
                  <option selected>Choose...</option>
                  <option value="1">Visitor</option>
                  <option value="2">Exhibitor</option>
                </select>
              </span>
            </div>
            <div className="form_group">
              <label htmlFor="desgnation">Designation</label>
              <input
                className="form_input"
                type="text"
                name="Desgnation"
                id="desgnation"
                placeholder="Designation"
                required
              />
            </div>
            <div className="form_group" id="check">
              <label htmlFor="cname">Company/Institution Name</label>
              <input
                className="form_input"
                type="text"
                name="cname"
                id="cname"
                placeholder="Company Name"
                required
              />
            </div>
            <div className="form_group">
              <label htmlFor="area">Area of Interests</label>
              <input
                className="form_input"
                type="text"
                name="area"
                id="area"
                placeholder="Interest"
                required
              />
            </div>
            <div className="form_group">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                name="date"
                id="dob"
                required
                className="form_input"
              />
            </div>
            <div className="form_group">
              <label htmlFor="gender">Gender</label>
              <span>
                <select required className="custom-select" id="gender">
                  <option selected>Choose...</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Others</option>
                </select>
              </span>
            </div>
            <a href="/signup" id="link">
              <button type="button" className="btn btn-primary btn-block next">
                Back
              </button>
            </a>
            <a href="/signupnext" id="link">
              <button type="submit" className="btn btn-primary btn-block next">
                Next
              </button>
            </a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default NextSignup;
