import { Link } from "react-router-dom";
import styled from "styled-components";
import { displayFlex } from "./shared";
import { BsPerson } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";

export default function Header() {
  return (
    <Navbar>
      <Link to="/">
        <Logo>Resinas Botânicas</Logo>
      </Link>
      <Nav>
        <Link to="cart">
          <IoCartOutline />
        </Link>
        <Link to="login">
          <BsPerson />
        </Link>
      </Nav>
    </Navbar>
  );
}

const Navbar = styled.div`
  ${displayFlex}
  width: 100%;
  height: 60px;
  justify-content: space-between;
  background-color: #9ba17b;
  padding: 0 10%;
  color: #faf8f1;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
  box-shadow: 0px -1px 10px rgba(0, 0, 0, 0.25);
`;

const Logo = styled.div`
  width: 83px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  font-weight: 700;
`;

const Nav = styled.div`
  ${displayFlex}
  width: auto;
  height: auto;
  gap: 1rem;

  > a {
    font-size: 1.5rem;
  }
`;
