import imageHeaders from "../../img/headers.png";

import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import { LogoImg } from "./styled";

export const Headers = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <LogoImg src={imageHeaders} alt="logo do site"/>
      </Toolbar>
    </AppBar>
  );
};
