import { UserCard, useUser } from "entities/user";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const { user } = useUser();
  return (
    <div className="container pt-2">
      <Card className="p-2">
        <Container className="d-flex justify-content-between align-items-center p-0">
          <div>{`${user?.last_name} ${user?.first_name}`}</div>

          <Link to={"/profile/edit"}>
            <Button>Редактировать</Button>
          </Link>
        </Container>
      </Card>
      {user && <UserCard user={user} className="mt-2" />}
    </div>
  );
};

export default ProfilePage;
