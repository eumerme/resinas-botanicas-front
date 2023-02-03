import { NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function CategoriesOptions({ categories }) {
  return (
    <NavDropdown title={"Categorias"} id="basic-nav-dropdown">
      {categories.map((category) => (
        <LinkContainer key={category.id} to={`/categories/${category.name}/${category.id}`}>
          <NavDropdown.Item>{category.name}</NavDropdown.Item>
        </LinkContainer>
      ))}
    </NavDropdown>
  );
}
