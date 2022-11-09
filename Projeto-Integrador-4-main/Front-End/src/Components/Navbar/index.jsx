import React, { useState, useEffect } from "react";
import Logo from "../../Images/LOGO-1.svg";
import { animateScroll as scroll } from "react-scroll";
import "./Logo.css";
import Hamburguer from "../Hamburguer";
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavSearch,
} from "./styled.js";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            onClick={scroll.scrollToTop}
            className="Logo"
            src={Logo}
            alt="Home"
          />
        </NavLink>
        <Hamburguer></Hamburguer>
        <NavMenu>
          <NavBtn></NavBtn>

          <NavSearch placeholder="Buscar" activeStyle></NavSearch>

          <NavLink to="/events" activeStyle>
            Eventos
          </NavLink>
          <NavLink to="/sellers" activeStyle>
            Revendas
          </NavLink>
          <NavLink to="/beaPromoter" activeStyle>
            Seja um promotor
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signUP">Registrar</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
