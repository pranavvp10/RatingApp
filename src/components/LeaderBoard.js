import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'

export class LeaderBoard extends Component {
    constructor(props){
        super(props);

    };
    render() 
    {
        return (
           <div> 
           <Table striped bordered hover variant="primary">
            <thead>
              <tr>
                <th>#</th>
                <th>Player</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>{this.props.sorarr[1][0]}</td>
                <td>{this.props.sorarr[1][1]}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>{this.props.sorarr[0][0]}</td>
                <td>{this.props.sorarr[0][1]}</td>
              </tr>
            </tbody>
          </Table></div>
        )
    }
}

export default LeaderBoard
