import React from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";

import { useAuthForm } from "./model";

type Props = {};

export const LoginForm = (props: Props) => {
  const { register, submit } = useAuthForm();
  return (
    <Form onSubmit={submit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phonenumber</Form.Label>
        <Form.Control
          type="phone"
          placeholder="Enter phone"
          {...register("phonenumber")}
        />
        <Form.Text className="text-muted">
          We'll never share your phone with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          {...register("password")}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
