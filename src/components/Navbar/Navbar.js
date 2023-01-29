import { BsPerson } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../../hooks";
import { Badge, Item, Logo, Menu, Nav } from "./NavbarElements";

export function Navbar() {
  const { state } = useCart();
  const { cart } = state;
  const cartQuantity = cart.items.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <Nav>
      <Logo to="/">Resinas Botânicas</Logo>

      <Menu>
        <Item to="cart">
          <IoCartOutline className="icon" />
          {cart.items.length > 0 && <Badge error>{cartQuantity}</Badge>}
        </Item>
        <Item to="login">
          <BsPerson className="icon" />
        </Item>
      </Menu>
    </Nav>
  );
}
