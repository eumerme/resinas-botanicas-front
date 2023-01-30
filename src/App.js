import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/globalStyle/globalStyle";
import { Footer, Navbar, PageContainer } from "./components";
import QueryProvider from "./contexts/QueryClientContext";
import { StoreProvider } from "./contexts/StoreContext";
import { ToastContainer } from "react-toastify";
import { Cart, Home, ProductDetail, Signup } from "./pages";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <QueryProvider>
        <StoreProvider>
          <Router>
            <Navbar />
            <PageContainer>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </PageContainer>
            <Footer />
          </Router>
        </StoreProvider>
      </QueryProvider>
    </>
  );
}
