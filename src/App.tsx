import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./page/home";
import ShopPage from "./page/shop";
import NotFound from "./page/notFound";
import AboutPage from "./page/about";
import ContactPage from "./page/contact";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="conract" element={<ContactPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
