import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/globalStyle/globalStyle";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PageContainer from "./components/PageContainer";
import QueryProvider from "./contexts/QueryClientContext";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <QueryProvider>
        <Router>
          <Header />
          <PageContainer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </PageContainer>
          <Footer />
        </Router>
      </QueryProvider>
    </>
  );
}
