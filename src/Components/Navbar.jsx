import React from "react";

function Navbar({ filterItem, uniqueMenuList }) {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {uniqueMenuList.map((currentElement) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(currentElement)}
              >
                {currentElement}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
