import React, { useState } from "react";
import "./Sidebar.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons";

const Nav = styled.div`
  background: #ffffff;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Heading = styled.div`
  color: white;
  z-index: 100;
`;

const SidebarNav = styled.nav`
  background: #ffffff;
  width: 260px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#15171c" }}>
        <div className="nav">
          <Nav>
            <NavIcon to="#">
              <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>
            <Heading className="text">
              <img
                className="logo"
                src="./images/aries-logo.png"
                alt="aries-logo"
              />
            </Heading>
          </Nav>
          <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
              <NavIcon to="#">
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </NavIcon>
              {SidebarData.map((item, index) => (
                <SubMenu item={item} key={index} />
              ))}
            </SidebarWrap>
          </SidebarNav>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
