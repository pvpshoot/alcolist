'use strict';
import React from 'react';
import mui from 'material-ui';

var {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} = mui;

class TableDrink extends React.Component {
    constructor(){
        super();
        this.state = {
            fixedHeader: true,
            fixedFooter: true,
            displaySelectAll: false,
            displayRowCheckbox: false,
            height: '300px'
        }
    }

    render() {
        return(
            <Table
                height={this.state.height}
                fixedHeader={this.state.fixedHeader}
                fixedFooter={this.state.fixedFooter}>
                <TableHeader displaySelectAll={this.state.displaySelectAll}>
                    <TableRow>
                        <TableHeaderColumn colSpan="2" tooltip='Super Header' style={{textAlign: 'center'}}>
                            Super Header
                        </TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={this.state.displayRowCheckbox}>
                    <TableRow>
                        <TableRowColumn>John Smith</TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
        )
    }
}

module.exports = TableDrink;