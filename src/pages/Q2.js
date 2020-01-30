import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import {
    ValidationForm,
    TextInput,
} from "react-bootstrap4-form-validation";

import { getApi } from '../api/get'

async function postHandler(e, inputs) {
    e.preventDefault();
    e.target.reset();
    console.log(inputs);

    var requestString = ``;

    Object.keys(inputs).map((key) => {
        console.log(inputs[key])
        if (key == 0) {
            var para = `teacher=` + inputs[key]
            requestString += para;
        } else {
            var para = `&teacher=` + inputs[key]
            requestString += para;
        }
    })

    console.log('http://localhost:3001/api/commonstudents?' + requestString)

    var answer = await getApi(`http://localhost:3001/api/commonstudents?` + requestString)
    console.log(answer)

    this.setState({
        array: teacherList,
        result: answer
    })
}

const teacherList = ["teacher", "teacher"];
const searchResult = [];

class Q2 extends Component {

    state = {
        array: teacherList,
        result: searchResult
    }

    async componentDidMount() {
        postHandler = postHandler.bind(this)
        console.log(this.state.array)
    }

    render() {
        return (
            <>
                <div>
                    <button className="btn btn-primary" onClick={() => {
                        this.setState({ array: [...this.state.array, "teacher"] })
                        console.log(this.state.array)

                    }}>add teacher</button>
                </div>
                <ValidationForm onSubmit={(e, inputs) => postHandler(e, inputs)}>
                    <h4>Im Q2</h4>

                    {this.state.array.map(
                        (arrayE, index) => (
                            <div className="form-group">
                                <label htmlFor={index}>{arrayE}</label>
                                <TextInput name={index} id={index} type="email" required />
                            </div>
                        )
                    )}

                    <div className="form-group">
                        <button className="btn btn-primary">Search</button>
                    </div>
                </ValidationForm>
                <div>common students:</div>
                {this.state.result.map(
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

export default withRouter(Q2);