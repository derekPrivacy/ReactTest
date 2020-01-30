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

class UserTable extends Component {

  columns = [
    {
      dataField: "id",
      text: "id",
      sort: true
    },
    {
      dataField: "first_name",
      text: "first_name",
      sort: true
    },
    {
      dataField: "last_name",
      text: "last_name",
      sort: true
    }, {
      dataField: "dob",
      text: "dob",
      sort: true
    }, {
      dataField: "email",
      text: "email",
      sort: true
    }, {
      dataField: "contact",
      text: "contact",
      sort: true
    }, {
      dataField: "workshop",
      text: "workshop",
      sort: true
    }, {
      dataField: "region",
      text: "region",
      sort: true
    }, {
      dataField: "country",
      text: "country",
      sort: true
    }, {
      dataField: "role",
      text: "role",
      sort: true
    },
    {
      dataField: "View",
      isDummyField: true,
      text: "View",
      formatter: (cellContent, row) => {
        return (
          <button className="btn btn-success" onClick={() => updateHandler()}>
            View
          </button>
        );
      }
    },
    {
      dataField: "Update",
      isDummyField: true,
      text: "Update",
      formatter: (cellContent, row) => {

        return (
          <button className="btn btn-success" onClick={
            () => {
              // console.log(row.id)
              this.nextPath(`/uUser/${row.id}`)
              // return <div>hello</div>
            }
          }>
            Update
          </button>
        );
      }
    },
    {
      dataField: "Delete",
      isDummyField: true,
      text: "Delete",
      formatter: (cellContent, row) => {
        return (
          <button
            className="btn btn-success"
            onClick={() => deleteHandler(cellContent, row)}
          >
            Delete
          </button>
        );
      }
    }
  ];

  state = {
    data: []
  };

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
      <ToolkitProvider
        keyField="id"
        data={this.state.data}
        columns={this.columns}
        search
      >
        {props => (
          <div>
            <div>
              <h3>Input something at below input field:</h3>
              <SearchBar {...props.searchProps} />
              <ClearSearchButton {...props.searchProps} />
              <button
                className="btn btn-success"
                onClick={() => this.nextPath("/cUser")}
                style={{
                  float: "right",
                  marginRight: "5%",
                  backgroundColor: "purple"
                }}
              >
                Create
            </button>
              <hr />
              <BootstrapTable
                {...props.baseProps}
                defaultSorted={defaultSorted}
              />
            </div>

            <ExportCSVButton {...props.csvProps}>Export CSV!!</ExportCSVButton>


          </div>
        )}
      </ToolkitProvider>
    );
  }
  nextPath(path) {
    this.props.history.push(path);
  }
}

export default withRouter(UserTable);
