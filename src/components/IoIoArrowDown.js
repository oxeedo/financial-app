import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const IoIoArrowDown = () => {
  return (
    <div style={{ marginLeft: 5 }}>
      <FontAwesomeIcon
        icon={faChevronLeft}
        style={{
          color: "white",
          fontSize: "1em",
          display: "flex",
          transform: "rotate(270deg)",
          alignItems: "center",
        }}
      />
    </div>
  );
};

export default IoIoArrowDown;
