import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useCart, useUserData } from "../../hooks";
import { useCategories } from "../../hooks/useCategories";
import { CategoriesOptions } from "../Categories/CategoriesOptions";
import { UserOptions } from "../User/UserOptions";
import { Badge, Item, Logo, Menu, Nav, Wrapper } from "./NavbarElements";
import { GiButterflyFlower } from "react-icons/gi";

export function Navbar() {
  const {
    state: { cart },
  } = useCart();
  const cartQuantity = cart.items.reduce((acc, curr) => acc + curr.quantity, 0);

  const {
    state: { userData },
  } = useUserData();

  const { categories } = useCategories();

  return (
    <Nav>
      <Logo to="/">
        Resinas Botânicas
        <GiButterflyFlower style={{ fontSize: "4rem" }} />
      </Logo>

      <Menu>
        <Wrapper>
          {!categories && (
            <Link to="categories">
              <Item>{"Categorias"}</Item>
            </Link>
          )}
          {categories && <CategoriesOptions categories={categories} />}
        </Wrapper>

        <Wrapper>
          {userData && <UserOptions userData={userData} />}
          {!userData && (
            <Link to="signin">
              <Item>{"Login"}</Item>
            </Link>
          )}
        </Wrapper>

        <Item>
          <Link to="cart">
            <IoCartOutline className="icon" />
            {cart.items.length > 0 && <Badge error>{cartQuantity}</Badge>}
          </Link>
        </Item>
      </Menu>
    </Nav>
  );
}
