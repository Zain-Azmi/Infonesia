import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import InfoNegara from "./pages/infonegara.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<InfoNegara />} />
      </Routes>
    </>
  );
}

export default App;
