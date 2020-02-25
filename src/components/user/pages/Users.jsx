import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const DUMMY_USERS = [
    {
      id: "u1",
      name: "Sascha Walzenbach",
      image: "https://i.pravatar.cc/300",
      libraryCount: "3"
    }
  ];

  return <UserList items={DUMMY_USERS} />;
};

export default Users;
