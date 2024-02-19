import * as React from "react";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./index.css";
import { CallEnd } from "@mui/icons-material";
const TKZNDropownButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ["Option 1", "Option 2", "Option 3"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    //PCallback = props.CallbacHandleChange();
    console.log(option);
    console.log(typeof option);
    // console.log(props);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <div className="dropdown-header-Deafult"> {selectedOption || "SELECT PRODUCT TYPE"}</div>
        <ArrowDropDownIcon />
        <span className={`arrow ${isOpen ? "open" : "dropdown-header"}`}></span>
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TKZNDropownButton;
