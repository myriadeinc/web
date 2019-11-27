import React, { Component } from 'react';
import { Form, Button, Card } from 'react-bootstrap'

class SignUp extends Component {

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Form class="px-4 py-3">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
                <Card.Footer>
                    <Card.Text>New around here? <Card.Link href="#" eventKey="1">Sign up</Card.Link></Card.Text>
                    <br />
                    <Card.Link href="#" eventKey="2">Forgot Password?</Card.Link>
                </Card.Footer>
            </Card >
        )
    }
}

export default SignUp;
