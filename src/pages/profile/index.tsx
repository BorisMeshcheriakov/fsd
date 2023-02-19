import { UserCard } from "entities/user";
import React from "react";

type Props = {};

const ProfilePage = (props: Props) => {
  return (
    <h1 className="container pt-2">
      <UserCard />
    </h1>
  );
};

export default ProfilePage;
