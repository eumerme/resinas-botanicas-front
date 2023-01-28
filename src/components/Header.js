import { Link } from "react-router-dom";
import styled from "styled-components";
import { DisplayCenter } from "./shared";
import { BsPerson } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";

export default function Header() {
  return (
    <Nav>
      <Logo to="/">Resinas Botânicas</Logo>

      <Menu>
        <Item to="cart">
          <IoCartOutline className="icon" />
        </Item>
        <Item to="login">
          <BsPerson className="icon" />
        </Item>
      </Menu>
    </Nav>
  );
}

const Nav = styled.nav`
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

  /*   @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  } */
`;

const Logo = styled(Link)`
  ${DisplayCenter}
  width: 130px;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;

  .icon {
    font-size: 2rem;
  }

  /*   @media screen and (max-width: 768px) {
    display: none;
  } */
`;

const Item = styled(Link)`
  height: 80px;
  font-weight: 500;
  color: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
  text-decoration: none;
`;
