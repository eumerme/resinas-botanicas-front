import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/globalStyle/globalStyle";
import { Footer, Navbar, PageContainer } from "./components";
import { QueryProvider, UserProvider, CartProvider } from "./contexts";
import { ToastContainer } from "react-toastify";
import { Cart, Home, ProductDetail, Signup, Signin } from "./pages";
import { CategoriesProvider } from "./contexts/CategoriesContext";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <QueryProvider>
        <CategoriesProvider>
          <CartProvider>
            <UserProvider>
              <Router>
                <Navbar />
                <PageContainer>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signin" element={<Signin />} />
                  </Routes>
                </PageContainer>
                <Footer />
              </Router>
            </UserProvider>
          </CartProvider>
        </CategoriesProvider>
      </QueryProvider>
    </>
  );
}
