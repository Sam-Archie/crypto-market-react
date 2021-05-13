import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';

const Contact = () => {

    const [firstName, setFirstName] = useState("");
    const handleFirstName = (e) => setFirstName(e.currentTarget.value)

    const [lastName, setLastName] = useState("");
    const handleLastName = (e) => setLastName(e.currentTarget.value)

    const [email, setEmail] = useState("");
    const handleEmail = (e) => setEmail(e.currentTarget.value)

    const [message, setMessage] = useState("");
    const handleMessage = (e) => setMessage(e.currentTarget.value)

    const handleSubmit = (e) => {
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            message: message,
        }
        e.preventDefault();
        console.log(data)
        // POST the form data via axios
    }



    return (
        <section className="container flex flex-column" >
        <h2 className="title_text title_text--small mt-4">Contact Us</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="firstName" className="mt-4">
                <Form.Label className="paragraph_text paragraph_text--small">First Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="First Name" 
                    value={firstName}
                    onChange={handleFirstName}
                    />
            </Form.Group>
            <Form.Group controlId="lastName" className="mt-4">
                <Form.Label className="paragraph_text paragraph_text--small">Last Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Last Name"
                    value={lastName}
                    onChange={handleLastName}/>
            </Form.Group>
            <Form.Group controlId="email" className="mt-4">
                <Form.Label className="paragraph_text paragraph_text--small">Email</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="example@mail.com" 
                    value={email}
                    onChange={handleEmail}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="email" className="mt-4">
                <Form.Label className="paragraph_text paragraph_text--small">Message</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={3} 
                    placeholder="Your message here" 
                    value={message}
                    onChange={handleMessage}/>
            </Form.Group>
            <Button 
                className="mt-4 mb-4" 
                variant="secondary" 
                type="submit"
            >Submit</Button>
        </Form>
        </section>

    );
};

export default Contact;