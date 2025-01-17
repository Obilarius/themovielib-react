import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import "./UserItem.scss";

const UserItem = props => {
  const { image, name, libraryCount, id } = props;

  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${id}/library`}>
          <div className="user-item__image">
            <Avatar image={image} alt={name} />
          </div>
          <div className="user-item__info">
            <h2>{name}</h2>
            <h3>
              {libraryCount}
              {libraryCount === 1 ? " Movie" : " Movies"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
