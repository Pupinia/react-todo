import React from "react";

import "./style.css";

const ListItem = ({ label, important }) => {
  const style = {
    "font-weight": important ? "bold" : ""
  };
  return (
    <div className="d-flex align-items-center justify-content-between item-buttons">
      <span style={style}>{label}</span>
      <span>
        <button className="btn btn-outline-danger">
          <i className="far fa-trash-alt"></i>
        </button>
        <button className="btn btn-outline-success">
          <i className="fas fa-exclamation"></i>
        </button>
      </span>
    </div>
  );
};

export default ListItem;
