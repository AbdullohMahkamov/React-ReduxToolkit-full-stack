import { Avatar, Box, Button } from "@mui/material";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeItem } from "../../helpers/persistanse-storage";
import { userLogout } from "../../slice/actions";
import "./navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loggedIn, user } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(userLogout());
    removeItem("token");
    navigate("/login");
  };

  return (
    <Fragment>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(200, 192, 192)", mb: "50px" }}>
        <Link to="/">
          <img className="logo" src="Logo.svg" alt="logo" />
        </Link>
        <Box className="navbar">
          {loggedIn ? (
            <Box sx={{ display: "flex", columnGap: "15px", alignItems: "center" }}>
              <Button variant="contained" color="success" size="small" sx={{ marginRight: "50px" }} className="nav__btn">
                <Link to={"/create-article"} className="nav__create">
                  Create article
                </Link>
              </Button>
              <Avatar>{user.username[0]}</Avatar>
              <Button variant="outlined" color="error" onClick={logoutHandler}>
                LOGOUT
              </Button>
            </Box>
          ) : (
            <Box>
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
          )}
        </Box>
      </Box>
    </Fragment>
  );
}
