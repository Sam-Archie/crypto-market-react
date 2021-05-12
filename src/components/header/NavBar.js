import React from 'react';
import { Nav } from "react-bootstrap";

const NavBar = () => {
    return (
        <Nav as="ul">
            <Nav.Item as="li">
                <Nav.Link href="#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#contact-us">Contact Us</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default NavBar;