import { Box, Container } from "@mui/material";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function navbar() {
  return (
    <Fragment>
      <Container maxWidth="1920px">
        <Box
          className="navbar"
          p={"0 20px"}
          sx={{ display: "flex", justifyContent: "space-between", textAlign: "center", borderBottom: "1px solid rgba(200, 192, 192)" }}
        >
          <Link to="/">
            <img src="Logo.svg" alt="logo" height={"80px"} width={"200px"} />
          </Link>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to={"/login"} className="nav__link">
                  Login
                </Link>
              </li>
              <li className="nav__item">
                <Link to={"/register"} className="nav__link">
                  Register
                </Link>
              </li>
            </ul>
          </nav>
        </Box>
      </Container>
    </Fragment>
  );
}
