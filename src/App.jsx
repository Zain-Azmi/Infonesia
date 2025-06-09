import { Routes, Route } from "react-router-dom";
import InfoNegara from "./pages/infonegara.jsx";
import ProfilPage from "./pages/profil.jsx";
import Navbar from "./components/navbar.jsx";
import ScrollButtons from "./components/scrollbuttons.jsx";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<InfoNegara />} />
          <Route path="/profil" element={<ProfilPage />} />
        </Routes>
      </div>
      <ScrollButtons />
    </div>
  );
}

export default App;
