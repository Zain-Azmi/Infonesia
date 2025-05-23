import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [DataNegara, setDataNegara] = useState([]);

  const fetchData = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setDataNegara(res.data);
      })
      .catch((err) => console.error("Gagal Mengambil Data Negara:", err));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <></>;
}

export default App;
