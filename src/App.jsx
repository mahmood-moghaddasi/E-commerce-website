import { Routes, Route } from "react-router-dom";
import Layouts from "./layouts/Layouts.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <>
      <Layouts>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layouts>
    </>
  );
}

export default App;
