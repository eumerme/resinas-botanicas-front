import { NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function CategoriesOptions({ categories }) {
  return (
    <NavDropdown title={"Categorias"} id="basic-nav-dropdown">
      {categories.map((category) => (
        <LinkContainer key={category.id} to={`category/${category.id}`}>
          <NavDropdown.Item>{category.name}</NavDropdown.Item>
        </LinkContainer>
      ))}
      <LinkContainer to="/categories">
        <NavDropdown.Item>Todas</NavDropdown.Item>
      </LinkContainer>
    </NavDropdown>
  );
}
