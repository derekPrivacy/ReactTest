import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import {
    ValidationForm,
    TextInput,
} from "react-bootstrap4-form-validation";

import { postApiQ3 } from '../api/post'

async function postHandler(e, inputs) {
    e.preventDefault();
    e.target.reset();
    console.log(inputs);


    var map = {}

    map["student"] = inputs[0]

    console.log("my map" + JSON.stringify(map))

    var result = await postApiQ3("http://localhost:3001/api/suspend", map)

    console.log("whats result + " + JSON.stringify(result))

    if (result.isAxiosError) {
        window.alert(`${result} \n ${JSON.stringify(result.response.data.errors)}`);
    }
    else {
        window.alert("suspended");
    }

}

const studentList = ["student"];

class Q3 extends Component {

    state = {
        array: studentList,
    }

    componentDidMount() {
        postHandler = postHandler.bind(this)
        console.log(this.state.array)
    }

    render() {
        return (
            <>
                <ValidationForm onSubmit={(e, inputs) => postHandler(e, inputs)}>
                    <h4>Suspend a specified student</h4>

                    {this.state.array.map(
                        (arrayE, index) => (
                            <div className="form-group">
                                <label htmlFor={index}>{arrayE}</label>
                                <TextInput name={index} id={index} type="email" required />
                            </div>
                        )
                    )}

                    <div className="form-group">
                        <button className="btn btn-primary">Suspend</button>
                    </div>
                </ValidationForm>
            </>
        );
    }
    nextPath(path) {
        this.props.history.push(path);
    }
}

export default withRouter(Q3);