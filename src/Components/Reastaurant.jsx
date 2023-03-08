import React from "react";
import "../style.css";
import MenuCard from "./MenuCard";
import Menu from "../menuApi";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((currentElement) => {
      return currentElement.category;
    })
  ),
  "All",
];

function Reastaurant() {
  const [menuData, setMenuData] = React.useState(Menu);

  const [uniqueMenuList, setUniqueMenuList] = React.useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((currentElement) => {
      return currentElement.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} uniqueMenuList={uniqueMenuList} />
      <MenuCard menuData={menuData} />
    </>
  );
}

export default Reastaurant;
