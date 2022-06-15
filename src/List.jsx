import React from "react";
import ListItems from "./ListItems";

const List = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      <ul>
        {items.map((item) => (
          <ListItems
            key={item.id}
            item={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </main>
  );
};

export default List;
