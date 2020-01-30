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
    console.log(inputs);

    var map = new Map()

    map["teacher"] = "gg@gmial.com"
    map["students"] = ["hehhe.com", "haha.com"]

    console.log("my map" + JSON.stringify(map))

    await postApi("http://localhost:3001/api/register", map)
}

function shoot() {
    console.log("shotted?");
}


class Q1 extends Component {

    array = ["student", "student", "student"]

    async componentDidMount() {
        let details = await getApi(`http://localhost:3001/userside/getUserDataTable`)
        if (details) {
            this.setState({
                data: details
            })
        }
        // console.log(details)
        // console.log("yoyo!!" + JSON.stringify(this.state.data));
    }

    render() {
        return (
            <>
                <div >
                    <button className="btn btn-primary" onClick={shoot}>add more student</button>
                </div>
                <ValidationForm onSubmit={(e, inputs) => postHandler(e, inputs)}>
                    <h4>Im Q1</h4>

                    <div className="form-group">
                        <label htmlFor="teacher">teacher</label>
                        <TextInput name="teacher" id="teacher" required />
                    </div>

                    {this.array.map(arrayE =>
                        <div className="form-group">
                            <label htmlFor={arrayE}>student</label>
                            <TextInput name={arrayE} id={arrayE} required />
                        </div>
                    )}
                    {/* <div className="form-group">
                        <label htmlFor="student0">student0</label>
                        <TextInput name="student0" id="student0" required />
                    </div> */}

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