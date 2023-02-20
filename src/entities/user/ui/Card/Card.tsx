import { User } from "entities/user";

import Card, { CardProps } from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Figure from "react-bootstrap/Figure";

interface Props extends CardProps {
  user: User;
}

export const UserCard: React.FC<Props> = ({ user, ...props }) => {
  return (
    <Card {...props}>
      <Container>
        <Row>
          <Col xs={2} className={"p-2"}>
            <Figure.Image
              className="m-0"
              width={168}
              height={168}
              rounded
              src={user?.photo}
            />
          </Col>
          <Col className={"p-2"}>
            <Card.Text>{user?.birth_date}</Card.Text>
            <Card.Text>{user?.gender}</Card.Text>
            <Card.Text>{user?.email}</Card.Text>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};
