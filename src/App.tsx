import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./page/home";
import ShopPage from "./page/shop";
import NotFound from "./page/notFound";
import AboutPage from "./page/about";
import LayoutWebsite from "./components/LayoutWebsite";
import ContactPage from "./page/contact";
import DetailProduct from "./page/detail-product";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<LayoutWebsite />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="products/:id" element={<DetailProduct />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
