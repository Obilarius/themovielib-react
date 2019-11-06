import React from "react";
import PropTypes from "prop-types";

const TabItem = props => {
  const { activeTab, index, changeTab, label } = props;
  return (
    <div
      className={`tab-item ${activeTab === index && "active"}`}
      onClick={() => changeTab(index)}
    >
      {label}
    </div>
  );
};

TabItem.propTypes = {
  activeTab: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  changeTab: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default TabItem;
