import { Link } from "react-router-dom";
import styled from "styled-components";
import { BadgeWrapper, DisplayCenter } from "../shared";

export const Nav = styled.nav`
  ${DisplayCenter}
  justify-content: space-between;
  width: 100%;
  height: 80px;
  font-size: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  color: #ffffff;
  padding: 0 10%;
  background-color: #9ba17b;
  box-shadow: 0px -1px 10px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled(Link)`
  ${DisplayCenter}
  width: 130px;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;

  .icon {
    font-size: 2rem;
  }
`;

export const Item = styled(Link)`
  height: 80px;
  font-weight: 500;
  color: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
  text-decoration: none;
  position: relative;
`;

export const Badge = styled.div`
  ${BadgeWrapper}
  min-width: 25px;
  padding: 0.5rem;
  border-radius: 50%;
  font-size: 10px;
  font-weight: 600;
  position: absolute;
  right: 0;
  top: 10px;
`;
