import React, { useState } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  text-decoration: none;
  padding: 0 1rem 0 1rem;
  height: 60px;
  font-size: 18px;

  &:hover {
    background: #fff0f5;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const Dropdown = styled(Link)`
  background: #fffff0;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 3rem;
  text-decoration: none;
  color: black;
  font-size: 18px;

  &:hover {
    background: #d1d1d1;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubNav] = useState(false);

  const showSubNav = () => setSubNav(!subnav);
  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubNav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => (
          <Dropdown to={item.path} key={index}>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </Dropdown>
        ))}
    </>
  );
};

export default SubMenu;
