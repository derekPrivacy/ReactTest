import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import {
    ValidationForm,
    TextInput,
} from "react-bootstrap4-form-validation";

import { postApi } from '../api/post'

import CoolButton from '../atom/Button'

async function postHandler(e, inputs) {
    e.preventDefault();
    e.target.reset();
    console.log(inputs);

    // console.log(inputs["teacher"])

    var map = new Map()

    map["students"] = []

    Object.keys(inputs).map((key) => {
        if (key != "teacher") {
            console.log(key + inputs[key])
            map["students"].push(inputs[key])
        } else {
            map["teacher"] = inputs[key]
        }
    })

    console.log("my map" + JSON.stringify(map))

    await postApi("http://localhost:3001/api/register", map)

    this.setState({
        array: studentList
    })

    window.alert("record added");
}

const studentList = ["student", "student"];

class Q1 extends Component {

    state = {
        array: studentList
    }

    componentDidMount() {
        postHandler = postHandler.bind(this)
        console.log(this.state.array)
    }

    render() {
        return (
            <>
                <h4>Register teacher and one or more students</h4>
                <div>
                    <CoolButton label={"add student"} onClick={() => {
                        this.setState({ array: [...this.state.array, "student"] })
                        console.log(this.state.array)
                    }} />
                </div>
                {/* <div >
                    <button className="btn btn-primary" onClick={() => {
                        this.setState({ array: [...this.state.array, "student"] })
                        console.log(this.state.array)

                    }}>add student</button>
                </div> */}
                <ValidationForm onSubmit={(e, inputs) => postHandler(e, inputs)}>
                    <div className="form-group">
                        <label htmlFor="teacher">teacher</label>
                        <TextInput name="teacher" id="teacher" type="email" required />
                    </div>

                    {this.state.array.map(
                        (arrayE, index) => (
                            <div className="form-group">
                                <label htmlFor={index}>{arrayE}</label>
                                <TextInput name={index} id={index} type="email" required />
                            </div>
                        )
                    )}
                    <div className="form-group">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </ValidationForm></>
        );
    }
    nextPath(path) {
        this.props.history.push(path);
    }
}

export default withRouter(Q1);