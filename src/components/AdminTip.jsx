import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
import '../styles/AdminTip.css'
import logo from '../img/logo.png'
import settings from '../img/settings.png'
import exit from '../img/exit.png'
import graph from '../img/graoh.png'
import plus from '../img/plus.png'
function AdminTip() {
    return (
        <div className="admin-tip">
           <Navbar bg="light">
            <Container className="logo-carry">
                <Navbar.Brand href="/">
                <img
                    src={logo}
                />
                </Navbar.Brand>
            </Container>
            </Navbar>

            <div className="sidebar">

                <div className="s-1">
                    <img src={settings} className="s-img img1"></img>
                    <img src={exit} className="s-img img2" ></img>
                </div>
                <hr className="brk"></hr>
                <ul className="s-list">
                    <li> <div className="s-div"> <img src={graph} className="s-img-img"></img> Expert Dashboard </div> </li>
                    <li> <div className="s-div"> <img src={plus} className="s-img-img"></img> Expert Dashboard </div> </li>
                    <li> <div className="s-div"> <img></img> Expert Dashboard </div> </li>
                    <li> <div className="s-div"> <img></img> Expert Dashboard </div> </li>
                    <li> <div className="s-div"> <img></img> Expert Dashboard </div> </li>
                </ul>
            </div>
        </div>
    )
}

export default AdminTip
