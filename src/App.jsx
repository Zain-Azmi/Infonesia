import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [DataNegara, setDataNegara] = useState([]);
  const [HalamanAktif, setHalamanAktif] = useState(1);
  const [DetailNegara, setDetailNegara] = useState(null);
  const JumlahNegaraPerHalaman = 20;

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

  const JumlahHalaman = Math.ceil(DataNegara.length / JumlahNegaraPerHalaman);
  const IDNegara = (HalamanAktif - 1) * JumlahNegaraPerHalaman;
  const NegaraPerHalaman = DataNegara.slice(
    IDNegara,
    IDNegara + JumlahNegaraPerHalaman
  );

  const datadetail = (namanegara) => {
    setDetailNegara(DataNegara.find((item) => item.name.common === namanegara));
  };

  return (
    <>
      <div className="flex justify-center items-center h-[150px]">
        <label className="input border-4 border-gray-300 rounded-full flex items-center p-2  w-[500px]">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="grow" placeholder="Search" />
        </label>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {NegaraPerHalaman.map((item) => (
          <div
            onClick={() => {
              datadetail(item.name.common);
              document.getElementById("my_modal_2").showModal();
            }}
            key={item.name.common}
            className="card bg-base-100 w-80 shadow-sm"
          >
            <figure>
              <img
                src={item.flags.png}
                alt="Shoes"
                className="w-full h-[200px] object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name.common}</h2>
              <p>Jumlah Populasi: {item.population.toLocaleString("id-ID")}</p>
              <p>Benua: {item.region}</p>
              <p>Ibu Kota: {item.capital}</p>
            </div>
          </div>
        ))}
      </div>
      <br />
      <div className="flex justify-center items-center">
        <div className="join">
          {HalamanAktif > 3 && (
            <>
              <button
                onClick={() => setHalamanAktif(1)}
                className="join-item btn"
              >
                1
              </button>
              <button
                onClick={() => setHalamanAktif(2)}
                className="join-item btn"
              >
                2
              </button>
              <button className="join-item btn btn-disabled">...</button>
            </>
          )}

          {Array.from({ length: 3 }, (_, i) => {
            const NoHalaman = HalamanAktif - 1 + i;
            if (NoHalaman < 1 || NoHalaman > JumlahHalaman) return null;
            return (
              <button
                key={NoHalaman}
                onClick={() => setHalamanAktif(NoHalaman)}
                className={`join-item btn ${
                  HalamanAktif === NoHalaman ? "bg-blue-500 text-white" : ""
                }`}
              >
                {NoHalaman}
              </button>
            );
          })}

          {HalamanAktif < JumlahHalaman - 2 && (
            <>
              <button className="join-item btn btn-disabled">...</button>
              <button
                onClick={() => setHalamanAktif(JumlahHalaman - 1)}
                className="join-item btn"
              >
                {JumlahHalaman - 1}
              </button>
              <button
                onClick={() => setHalamanAktif(JumlahHalaman)}
                className="join-item btn"
              >
                {JumlahHalaman}
              </button>
            </>
          )}
        </div>
      </div>
      <dialog id="my_modal_2" className="modal">
        {DetailNegara && (
          <div className="modal-box">
            <h3 className="font-bold text-lg">Informasi Negara</h3>
            <div className="card bg-base-100 mt-4 ">
              <figure>
                <img src={DetailNegara.flags.png} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  <p>{DetailNegara.name.common}</p>
                </h2>
                <p>
                  Jumlah Populasi:{" "}
                  {DetailNegara.population.toLocaleString("id-ID")}
                </p>
                <p>Benua: {DetailNegara.region}</p>
                <p>Ibu Kota: {DetailNegara.capital?.[0]}</p>
              </div>
            </div>
          </div>
        )}

        <form method="dialog" className="modal-backdrop">
          <button></button>
        </form>
      </dialog>
    </>
  );
}

export default App;
