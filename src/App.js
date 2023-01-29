import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/globalStyle/globalStyle";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PageContainer from "./components/PageContainer";
import QueryProvider from "./contexts/QueryClientContext";
import { StoreProvider } from "./contexts/StoreContext";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import { ToastContainer } from "react-toastify";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <QueryProvider>
        <StoreProvider>
          <Router>
            <Header />
            <PageContainer>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </PageContainer>
            <Footer />
          </Router>
        </StoreProvider>
      </QueryProvider>
    </>
  );
}
