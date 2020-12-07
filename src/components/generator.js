import React, { Component } from "react";
import { Button, ListGroup } from 'react-bootstrap';
class Generator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tableData: [
                { name: "Pizza" },
                { name: "Larry" }
            ]
        }
        this.renderTableRows = this.renderTableRows.bind(this)
        this.addPerson = this.addPerson.bind(this)
    }
    addPerson() {
        const newPerson = { name: "dad" }
        const tableData = [
            ...this.state.tableData,
            newPerson
        ]
        this.setState({tableData});
    }
    renderTableRows() {
        const {tableData} = this.state
        if (!tableData) return null;
        let result = [];
        tableData.forEach(person => {
            result.push(
                <tr>
                    <td>{person.name}</td>
                </tr>
            )
        })
        return result;
    }

    render() { 
        return (
            <div>
                <h2>Welcome to the Generator!</h2>
                <p>This is the base setup for my name generator.</p>
                <Button onClick={this.addPerson}>Generate!</Button>{' '}
                <div className="playground">
                    <table>
                        <tr>
                            <th>Name</th>
                        </tr>
                        {this.renderTableRows()}
                    </table>
                </div>
            </div>
        );
    }
}

export default Generator;