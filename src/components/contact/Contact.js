import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <>
        <h2 className="title_text title_text--small mt-4">Contact Us</h2>
        <Form>
            <Form.Group controlID="firstName" className="mt-4">
                <Form.Label className="paragraph_text paragraph_text--small">First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
            <Form.Group controlID="lastName" className="mt-4">
                <Form.Label className="paragraph_text paragraph_text--small">Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
            <Form.Group controlID="email" className="mt-4">
                <Form.Label className="paragraph_text paragraph_text--small">Email</Form.Label>
                <Form.Control type="email" placeholder="example@mail.com" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlID="email" className="mt-4">
                <Form.Label className="paragraph_text paragraph_text--small">Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Your message here" />
            </Form.Group>
            <Button className="mt-4 mb-4" variant="secondary" type="submit">Submit</Button>
        </Form>
        </>

    );
};

export default Contact;