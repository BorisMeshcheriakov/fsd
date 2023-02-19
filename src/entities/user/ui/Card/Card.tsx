import { User } from "entities/user";

import Card, { CardProps } from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/Image";

interface Props extends CardProps {
  user: User;
}

export const UserCard: React.FC<Props> = ({ user, ...props }) => {
  return (
    <Card {...props}>
      <Container className="p-2">
        <Row>
          <Col xs={3}>
            <Image fluid rounded src={user?.photo} />
          </Col>
          <Col>
            <Card.Text>{user?.birth_date}</Card.Text>
            <Card.Text>{user?.gender}</Card.Text>
            <Card.Text>{user?.email}</Card.Text>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};
