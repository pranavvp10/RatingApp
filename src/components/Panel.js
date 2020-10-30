import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';

export class Panel extends Component {
    constructor(props){
        super(props);

    };

    render() {
        return (
                <Card  className="bg-dark text-center m-2 border-primary">
                    <Card.Img  variant='top' src={this.props.imgsrc} width='300' height='600' onClick={this.props.parentMethod} />
                    <Card.Body>
                        <Card.Text className='text-white h2' >{this.props.player}</Card.Text>
                    </Card.Body>
                </Card>
        )
    }
}

export default Panel
