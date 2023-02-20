import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useProfileForm } from "./model";

export const UserEditorForm = () => {
  const { register, submit } = useProfileForm();

  return (
    <Form onSubmit={submit}>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Фотография</Form.Label>
        <Form.Control type="file" {...register("photo")} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Фамилия</Form.Label>
        <Form.Control
          type="text"
          placeholder="Введите фамилию"
          {...register("last_name")}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Имя</Form.Label>
        <Form.Control
          type="text"
          placeholder="Введите имя"
          {...register("first_name")}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Отчество</Form.Label>
        <Form.Control
          type="text"
          placeholder="Введите отчество"
          {...register("middle_name")}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Сохранить
      </Button>
    </Form>
  );
};
