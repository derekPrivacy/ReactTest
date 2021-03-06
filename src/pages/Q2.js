import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import {
    ValidationForm,
    TextInput,
} from "react-bootstrap4-form-validation";

import { getApi } from '../api/get'

import Button from '../atom/Button'

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

    if (answer.isAxiosError) {
        window.alert(`${answer} \n ${JSON.stringify(answer.response.data.errors)}`);
        this.setState({
            array: teacherList,
            result: []
        })
    }
    else if (answer.length == 0) {
        window.alert("student records not found");
        this.setState({
            array: teacherList,
            result: []
        })
    } else {
        this.setState({
            array: teacherList,
            result: answer
        })
    }

}

const teacherList = ["teacher", "teacher"];
const searchResult = [];

class Q2 extends Component {

    state = {
        array: teacherList,
        result: searchResult
    }

    componentDidMount() {
        postHandler = postHandler.bind(this)
        console.log(this.state.array)
    }

    render() {
        return (
            <>
                <h4>Retrieve a list of students common to a given list of teachers</h4>
                <div>
                    <Button label={"add teacher"} onClick={() => {
                        this.setState({ array: [...this.state.array, "teacher"] })
                        console.log(this.state.array)
                    }} />
                </div>

                <ValidationForm onSubmit={(e, inputs) => postHandler(e, inputs)}>
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