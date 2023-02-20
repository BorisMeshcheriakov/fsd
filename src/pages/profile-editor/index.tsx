import React from "react";
import { Container } from "react-bootstrap";

import { UserEditorForm } from "features/user-editor-form";

const ProfileEditor: React.FC = () => {
  return (
    <Container className="pt-2">
      <UserEditorForm />
    </Container>
  );
};

export default ProfileEditor;
