import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';

export class TitleBar extends Component {
    render() {
        const style2={backgroundImage:"url('https://i.imgur.com/JLY4kT8.png')"}
        return (
            <Navbar style={style2}>
            <Navbar.Text className='text-white h1'>
                <div className='text-center'>🐐 🐐</div>
            </Navbar.Text>
            </Navbar>
        )
    }
}

export default TitleBar
