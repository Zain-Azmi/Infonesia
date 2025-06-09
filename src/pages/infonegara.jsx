import { useState, useEffect } from "react";
import { Ambildatanegara, Ambildetaildatanegara } from "../services/apinegara";
import ModalDetailNegara from "../components/modaldetailnegara.jsx";
import CardNegara from "../components/cardnegara.jsx";
import SearchBar from "../components/searchbar.jsx";
import PageButton from "../components/pagebutton.jsx";
function InfoNegara() {
  const [DataNegara, setDataNegara] = useState([]);
  const [HalamanAktif, setHalamanAktif] = useState(1);
  const [DetailNegara, setDetailNegara] = useState(null);
  const [InputSearch, setInputSearch] = useState("");
  const JumlahNegaraPerHalaman = 20;
  const [Datasudahdiambil, setDatasudahdiambil] = useState(0);
  const [isModalOpen, setisModalOpen] = useState(false);

  useEffect(() => {
    Ambildatanegara()
      .then((res) => {
        setDataNegara(res.data);
        setDatasudahdiambil(1);
      })
      .catch((err) => console.error("Gagal Mengambil Data Negara:", err));
  }, []);

  const datadetail = (kodenegara) => {
    setDetailNegara(null);
    Ambildetaildatanegara(kodenegara)
      .then((res) => {
        setDetailNegara(res.data[0]);
      })
      .catch((err) => console.error("Gagal Mengambil Data Negara:", err));
  };
  const carinegara =
    InputSearch.trim() === ""
      ? DataNegara.filter(
          (item) => item.translations.ind?.common || item.name?.official
        )
      : DataNegara.filter((item) => {
          const namaTerjemahan =
            item.translations.ind?.common?.toLowerCase() || "";
          const namaResmi = item.name?.official?.toLowerCase() || "";
          const keyword = InputSearch.toLowerCase();

          return (
            namaTerjemahan.includes(keyword) || namaResmi.includes(keyword)
          );
        });

  const JumlahHalaman = Math.ceil(carinegara.length / JumlahNegaraPerHalaman);
  const IDNegara = (HalamanAktif - 1) * JumlahNegaraPerHalaman;
  const NegaraPerHalaman = carinegara.slice(
    IDNegara,
    IDNegara + JumlahNegaraPerHalaman
  );

  return (
    <div className="bg-white">
      <SearchBar
        InputSearch={InputSearch}
        setInputSearch={setInputSearch}
        setHalamanAktif={setHalamanAktif}
      />
      <CardNegara
        InputSearch={InputSearch}
        JumlahNegaraPerHalaman={JumlahNegaraPerHalaman}
        setisModalOpen={setisModalOpen}
        datadetail={datadetail}
        Datasudahdiambil={Datasudahdiambil}
        NegaraPerHalaman={NegaraPerHalaman}
      />
      <PageButton
        HalamanAktif={HalamanAktif}
        JumlahHalaman={JumlahHalaman}
        setHalamanAktif={setHalamanAktif}
      />
      <ModalDetailNegara
        isModalOpen={isModalOpen}
        DetailNegara={DetailNegara}
        setisModalOpen={setisModalOpen}
      />
    </div>
  );
}

export default InfoNegara;
