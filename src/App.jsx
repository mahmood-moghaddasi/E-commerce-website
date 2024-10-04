import { Routes, Route } from "react-router-dom";
import Layouts from "./layouts/Layouts.jsx";
import HomePage from "./pages/HomePage.jsx";
import ShopPage from "./pages/ShopPage.jsx";

function App() {
  return (
    <>
      <Layouts>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </Layouts>
    </>
  );
}

export default App;
