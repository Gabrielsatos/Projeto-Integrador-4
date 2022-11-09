import React from "react";
import {
  SideBarMenu,
  SideBarLink,
  SideBarBtn,
  SideBarBtnLink,
  SideBarIcon,
} from "./styled";

import { AiFillHome as Home } from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

const SideBar = ({ open }) => {
  return (
    <SideBarMenu open={open}>
      <SideBarLink to="/">Home</SideBarLink>
      <SideBarLink to="/sellers">Revendas</SideBarLink>
      <SideBarLink to="/events">Compre seu ingresso</SideBarLink>
      <SideBarLink to="/beaPromoter">Seja um promotor</SideBarLink>
      <SideBarBtn>
        <SideBarBtnLink to="/signUP">Criar conta</SideBarBtnLink>
      </SideBarBtn>
    </SideBarMenu>
  );
};

export default SideBar;
