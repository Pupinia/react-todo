import React from "react";

const ItemStatusFilter = () => {
  return (
    <div className="btn-group " role="group" aria-label="Basic example">
      <button className="btn btn-light active">All</button>
      <button className="btn btn-light">Active</button>
      <button className="btn btn-light">Done</button>
    </div>
  );
};

export default ItemStatusFilter;
