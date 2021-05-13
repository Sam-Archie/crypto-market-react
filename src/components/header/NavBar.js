import React from 'react';
import { Nav } from "react-bootstrap";


const NavBar = () => {
    return (
        <Nav justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link className="title_text title_text--small" href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="title_text title_text--small"  eventKey="link-1">Contact Us</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default NavBar;