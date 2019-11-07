import React from "react";
import PropTypes from "prop-types";
import "./TabNav.scss";
import TabItem from "./TabItem/TabItem";

const TabNav = props => {
  const { changeTab, activeTab } = props;
  return (
    <nav className="tab-nav">
      <div className="container">
        <TabItem
          activeTab={activeTab}
          index={0}
          changeTab={changeTab}
          label="Overview"
        />
        <TabItem
          activeTab={activeTab}
          index={1}
          changeTab={changeTab}
          label="Details"
        />
        <TabItem
          activeTab={activeTab}
          index={2}
          changeTab={changeTab}
          label="Credits"
        />
      </div>
    </nav>
  );
};

TabNav.propTypes = {
  changeTab: PropTypes.func.isRequired,
  activeTab: PropTypes.number.isRequired
};

export default TabNav;
