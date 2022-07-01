import imageHeaders from "../../img/headers.png";

import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import { LogoImg } from "./styled";
import { goToMovies } from "../../routes/coordinator";

export const Headers = () => {
  return (
    <AppBar position="static">
      <Toolbar onClick={goToMovies}>
        <LogoImg src={imageHeaders} alt="logo do site"/>
      </Toolbar>
    </AppBar>
  );
};
