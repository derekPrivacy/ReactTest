import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import {
    ValidationForm,
    TextInput,
} from "react-bootstrap4-form-validation";

import { postApiQ4 } from '../api/post'

async function postHandler(e, inputs) {
    e.preventDefault();
    e.target.reset();
    console.log(inputs);

    var map = {}

    map["teacher"] = inputs[0]
    map["notification"] = inputs["notification"]

    console.log("my map" + JSON.stringify(map))


    var result = await postApiQ4("http://localhost:3001/api/retrievefornotifications", map)

    console.log("whats result + " + JSON.stringify(result))


    if (result.isAxiosError) {
        window.alert(result);
        this.setState({
            recipients: []
        })
    }
    else if (result.length == 0) {
        window.alert("student records not found");
        this.setState({
            recipients: []
        })
    } else {
        this.setState({
            recipients: result
        })
    }
}

const teacherList = ["teacher"];
const recipientList = [];

class Q4 extends Component {

    state = {
        array: teacherList,
        recipients: recipientList
    }

    componentDidMount() {
        postHandler = postHandler.bind(this)
        console.log(this.state.array)
    }

    render() {
        return (
            <>
                <ValidationForm onSubmit={(e, inputs) => postHandler(e, inputs)}>
                    <h4>Send a notification and showing the list of recipients</h4>

                    {this.state.array.map(
                        (arrayE, index) => (
                            <div className="form-group">
                                <label htmlFor={index}>{arrayE}</label>
                                <TextInput name={index} id={index} type="email" required />
                            </div>
                        )
                    )}

                    <div className="form-group">
                        <label htmlFor="notification">notification</label>
                        <TextInput name="notification" id="notification" required />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary">Send</button>
                    </div>
                </ValidationForm>
                <div>search results:</div>
                {this.state.recipients.map(
                    (arrayE, index) => (
                        <li>{arrayE}</li>
                    )
                )}
            </>
        );
    }
    nextPath(path) {
        this.props.history.push(path);
    }
}

export default withRouter(Q4);