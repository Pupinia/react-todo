import React from "react";

import ListItem from "../ListItem";

const ListItems = ({ todos }) => {
  return (
    <ul className="list-group">
      {todos.map((todo, index) => (
        <li className="list-group-item" key={index}>
          <ListItem {...todo} />
        </li>
      ))}
    </ul>
  );
};

export default ListItems;
