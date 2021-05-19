import React from 'react';
import { Nav } from "react-bootstrap";


const NavBar = () => {
    return (
        <Nav justify variant="tabs" defaultActiveKey="#hero" className="sticky-top navigation">
            <Nav.Item>
                <Nav.Link className="title_text title_text--small" href="#hero">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="title_text title_text--small"  href="#coins" eventKey="link-1">Coins</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="title_text title_text--small"  href="#contact" eventKey="link-2">Contact Us</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default NavBar;