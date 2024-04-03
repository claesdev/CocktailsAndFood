import "./App.css";
import { Welcome } from "./components/Welcome";
import { Routes, Route } from "react-router-dom";
import { ProductPage } from "./Pages/ProductPage";
import { ProductsPage } from "./Pages/ProductsPage";

function App() {
  return (
    <>
      {/* NavigationBar */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
