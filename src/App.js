import React from "react";

import ItemStatusFilter from "./ItemStatusFilter";
import SearchPannel from "./SearchPannel";
import ListItems from "./ListItems";

const App = () => {
  const todos = [
    {
      label: "Drink Coffee",
      important: true
    },
    {
      label: "Show YouTube",
      important: false
    },
    {
      label: "Make react app",
      important: true
    }
  ];
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6 offset-3">
          <div className=" d-flex mb-4">
            <SearchPannel />
            <ItemStatusFilter />
          </div>
          <ListItems todos={todos} />
        </div>
      </div>
    </div>
  );
};

export default App;
