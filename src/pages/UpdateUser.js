import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import {
    ValidationForm,
    TextInput,
} from "react-bootstrap4-form-validation";
import { postApi } from '../api/post'


async function postHandler(e, inputs,props) {
    e.preventDefault();
    inputs.id = props.match.params.id;
    console.log(inputs);

    await postApi("http://localhost:3001/userside/updateOneUserRecord", inputs)
}

export default class UpdateUser extends Component {
    state = {
        data: null
    }

    async componentDidMount() {
        console.log("yo man")
        console.log("id is " + JSON.stringify(this.props.match.params))
        let details = await postApi(`http://localhost:3001/userside/getOneUserDataTable`, { id: this.props.match.params.id })
        if (details) {
            this.setState({
                data: details[0]
            })
        }
        // console.log(details)
        // console.log("yoyo!!" + JSON.stringify(this.state.data));
    }

    render() {
        return (
            <ValidationForm onSubmit={(e, inputs) => postHandler(e, inputs, this.props)}>
                <h4>Edit User Profile Page</h4>

                {(!!this.state.data) ? (
                    <div>
                        <div className="form-group">
                            <label htmlFor="first_name">
                                first_name
                            </label>
                            <TextInput name="first_name" id="first_name" defaultValue={this.state.data.first_name} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="last_name">last_name</label>
                            <TextInput name="last_name" id="last_name" defaultValue={this.state.data.last_name} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="dob">dob</label>
                            <TextInput name="dob" id="dob" defaultValue={this.state.data.dob} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">email</label>
                            <TextInput name="email" id="email" defaultValue={this.state.data.email} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact">contact</label>
                            <TextInput name="contact" id="contact" defaultValue={this.state.data.contact} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="workshop">workshop</label>
                            <TextInput name="workshop" id="workshop" defaultValue={this.state.data.workshop} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="region">region</label>
                            <TextInput name="region" id="region" defaultValue={this.state.data.region} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="country">country</label>
                            <TextInput name="country" id="country" defaultValue={this.state.data.country} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="role">role</label>
                            <TextInput name="role" id="role" defaultValue={this.state.data.role} required />
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary">Edit</button>
                        </div>
                    </div>
                ) : (<div />)

                }
            </ValidationForm>
        );
    }
}