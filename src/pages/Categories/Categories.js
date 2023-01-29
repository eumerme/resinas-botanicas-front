import { useState } from "react";
import { GoBack, ProductCard } from "../../components";
import { useQuery } from "react-query";
import { HomeProducts, Title } from "../Home/HomeElements";
import { TopBox } from "../Cart/CartElements";
import styled from "styled-components";
import { categoriesApi } from "../../services/categoriesApi";
import { productsApi } from "../../services/productsApi";
import { Message } from "../../components/shared";

export function Categories() {
  const { data: categories } = useQuery("categories", () => categoriesApi.getCategories());

  const [categoryId, setCategoryId] = useState(0);
  const { data: products, isLoading } = useQuery("category-product", () =>
    productsApi.getProductByCategory(categoryId),
  );

  //TODO não tá renderizando quando troca de categoria

  console.log({ categoryId, categories, products });
  //console.log({ categories });
  return (
    <>
      <TopBox>
        <Title>Categorias</Title>
        <GoBack />
      </TopBox>
      <Content>
        <CategoriesBox>
          {categories?.map((category) => (
            <div onClick={() => setCategoryId(category.id)} key={category.id}>
              {category.name}
              {category.id}
            </div>
          ))}
        </CategoriesBox>

        {categoryId === 0 && <Message>Escolha uma categoria para começar :)</Message>}

        {products && !isLoading && (
          <HomeProducts>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </HomeProducts>
        )}
      </Content>
    </>
  );
}

export const Content = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  gap: 1rem;

  > div {
    cursor: pointer;
  }

  /*  align-items: flex-start;
  flex-wrap: wrap;
  gap: 6rem;
  padding-top: 3rem;

  @media screen and (max-width: 852px) {
    grid-template-columns: 1fr;
    gap: 2rem; 
  }*/
`;

export const CategoriesBox = styled.div`
  width: 100%;
  background-color: crimson;
`;

export const Category = styled.div`
  width: 100%;
  background-color: aqua;
`;
