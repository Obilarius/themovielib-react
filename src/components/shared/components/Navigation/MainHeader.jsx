import React from "react";
import "./MainHeader.scss";

const MainHeader = props => {
  const { children } = props;
  return <header className="main-header">{children}</header>;
};

export default MainHeader;
