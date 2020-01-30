import React, { Component } from "react";
import {
  ValidationForm,
  TextInput,
} from "react-bootstrap4-form-validation";

import { postApi } from '../api/post'

async function postHandler(e, inputs) {
  e.preventDefault();
  console.log(inputs);

  await postApi("http://localhost:3001/userside/post", inputs)

}

export default class CreateUser extends Component {
  componentDidMount() {
    var a = 1;
  }

  render() {
    return (
      <ValidationForm onSubmit={(e, inputs) => postHandler(e, inputs)}>
        <h4>Add new Admin user page</h4>

        <div className="form-group">
          <label htmlFor="first_name">first_name</label>
          <TextInput name="first_name" id="first_name" required />
        </div>

        <div className="form-group">
          <label htmlFor="last_name">last_name</label>
          <TextInput name="last_name" id="last_name" required />
        </div>

        <div className="form-group">
          <label htmlFor="dob">dob</label>
          <TextInput name="dob" id="dob" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">email</label>
          <TextInput name="email" id="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="contact">contact</label>
          <TextInput name="contact" id="contact" required />
        </div>

        <div className="form-group">
          <label htmlFor="workshop">workshop</label>
          <TextInput name="workshop" id="workshop" required />
        </div>

        <div className="form-group">
          <label htmlFor="region">region</label>
          <TextInput name="region" id="region" required />
        </div>

        <div className="form-group">
          <label htmlFor="country">country</label>
          <TextInput name="country" id="country" required />
        </div>

        <div className="form-group">
          <label htmlFor="role">role</label>
          <TextInput name="role" id="role" required />
        </div>

        <div className="form-group">
          <button className="btn btn-primary">Submit</button>
        </div>
      </ValidationForm>
    );
  }
}
