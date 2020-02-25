import React from "react";
import "./UserList.scss";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

const UserList = props => {
  const { items } = props;

  if (items.length === 0) {
    return (
      <div className="container">
        <Card>
          <h2 className="center">No users found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <div className="container">
      <ul className="users-list">
        {items.map(user => (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            libraryCount={user.libraryCount}
          />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
