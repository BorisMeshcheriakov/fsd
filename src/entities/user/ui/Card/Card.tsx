import { useUser } from "entities/user/model";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/Image";

export const UserCard = () => {
  const { user } = useUser();
  return (
    <Card>
      <Container className="p-2">
        <Row>
          <Col xs={3}>
            <Image fluid rounded src={user?.photo} />
          </Col>
          <Col>
            <Card.Text>{user?.last_name}</Card.Text>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};
