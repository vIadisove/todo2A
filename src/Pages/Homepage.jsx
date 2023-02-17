import React from "react";
import { useSelector } from "react-redux";

import BoxItem from "../components/BoxItem/BoxItem";
import Modal from "../components/Modal/Modal";

const Homepage = () => {
  const items = useSelector((state) => state.boardReducer.ITEMS);
  return (
    <div>
      <Modal />
      <BoxItem items={items} />
    </div>
  );
};

export default Homepage;
