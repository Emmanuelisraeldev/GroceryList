import React from "react";
import List from "./List";
import { FaRegFrown } from "react-icons/fa";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <List
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>
          Your list is empty...
          <FaRegFrown />
        </p>
      )}
    </main>
  );
};

export default Content;
