import { useEffect, useState } from "react";
import { Loading, Message, Top } from "../../components/shared";
import { useParams, Link } from "react-router-dom";
import { useCategories } from "../../hooks";
import { productsApi } from "../../services/productsApi";
import { CategoriesBox, Content, Category } from "./CategoriesElements";
import { ProductCard } from "../../components";

export function Categories() {
  const { name, id } = useParams();
  const { categories, isLoading, error } = useCategories();
  const [products, setProducts] = useState([]);

  const handleProductsByCategory = async () => {
    setProducts(await productsApi.getProductByCategory(id));
  };

  useEffect(() => {
    handleProductsByCategory();
  }, [id]);

  return (
    <>
      {isLoading && <Loading />}
      {error && <Message>Ocorreu um erro ao carregar as categorias, por favor tente em instantes.</Message>}
      {categories && (
        <>
          <Top>Categoria: {name}</Top>
          <Content>
            <CategoriesBox>
              {categories.map((category) => (
                <Category className={category.name === name ? "selected" : ""}>
                  <Link key={category.id} to={`/categories/${category.name}/${category.id}`}>
                    {category.name}
                  </Link>
                </Category>
              ))}
            </CategoriesBox>
            <ProductCard products={products} />
          </Content>
        </>
      )}
    </>
  );
}
