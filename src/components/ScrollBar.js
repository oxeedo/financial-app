import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import HomePage from "../Pages/HomePage";
const ScrollBar = () => {
  return (
    <Scrollbars
      style={{ width: "100%", height: 200 }}
      renderThumbVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{ ...style, backgroundColor: "grey", borderRadius: "4px" }}
        />
      )}
      renderTrackVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{
            ...style,
            width: "16px",
            right: "2px",
            bottom: "2px",
            top: "2px",
            borderRadius: "4px",
            backgroundColor: "#F1F1F1",
          }}
        />
      )}
    >
      <HomePage />
    </Scrollbars>
  );
};

export default ScrollBar;
