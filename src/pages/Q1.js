import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
    Search,
    CSVExport
} from "react-bootstrap-table2-toolkit";
import axios from "axios";

import { withRouter } from "react-router-dom";
import { getApi } from '../api/get';
import { deleteApi } from '../api/delete';
import {
    ValidationForm,
    TextInput,
} from "react-bootstrap4-form-validation";

import { postApi } from '../api/post'


const { SearchBar, ClearSearchButton } = Search;
const { ExportCSVButton } = CSVExport;

function updateHandler() {
    // console.log("update");
}

async function deleteHandler(cellContent, row) {
    // console.log(cellContent);
    // console.log(row.id);
    // console.log("delete");

    await deleteApi(`http://localhost:3001/userside/delete`, { "id": row.id })
}

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

    async componentDidMount() {
        postHandler = postHandler.bind(this)
        console.log(this.state.array)
    }

    render() {
        return (
            <>
                <div >
                    <button className="btn btn-primary" onClick={() => {
                        this.setState({ array: [...this.state.array, "student"] })
                        console.log(this.state.array)

                    }}>add student</button>
                </div>
                <ValidationForm onSubmit={(e, inputs) => postHandler(e, inputs)}>
                    <h4>Im Q1</h4>

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