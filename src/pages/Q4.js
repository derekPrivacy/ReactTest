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



const defaultSorted = [
    {
        dataField: "id",
        order: "asc"
    }
];

var data = [];

class Q4 extends Component {

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
            <div>Im Q4</div>
        );
    }
    nextPath(path) {
        this.props.history.push(path);
    }
}

export default withRouter(Q4);