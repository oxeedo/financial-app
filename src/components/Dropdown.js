import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsOpen((prevState) => !prevState);
  //   console.log("Dropdown state:", !isOpen); // Debug log to check state change
  // };

  return (
    <div className="dropdown-container">
      <div className="dropdown-trigger">
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div className="dropdown-menu">
        <ul>
          <DropdownItem />
          <DropdownItem />
          <DropdownItem />
        </ul>
      </div>
    </div>
  );
};
const DropdownItem = () => {
  return <li className="dropdown-item">Item 1</li>;
};
export default Dropdown;
