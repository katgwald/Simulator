import React, { FunctionComponent } from "react";
import "./MenuBar.css";
import { VMControls } from "../../JavascriptVM/VMControls";
import { UserControls } from "./UserControls/UserControls";
import FIRSTLogo from "./FIRST_Horz_RGB.png";

const BrandIcon = () => {
  return (
    <img src={FIRSTLogo} alt="FIRST Robotics" className="menu-bar--brand" />
  );
};

export const MenuBar: FunctionComponent = () => {
  return (
    <div className="menu-bar">
      <BrandIcon />
      <div className="buttons-container">
        <VMControls />
        <UserControls />
      </div>
    </div>
  );
};
