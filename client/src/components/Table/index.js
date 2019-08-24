import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "./style.css";

class Table extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
        <TableHeaderColumn isKey dataField="orderId">
            Order ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField="itemId">
            Item ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField="ownerName">
            Owner Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField="itemName">Item Name</TableHeaderColumn>
          <TableHeaderColumn dataField="itemImage">
            Item Image
          </TableHeaderColumn>
          <TableHeaderColumn dataField="price">Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Table;
