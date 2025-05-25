import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [DataNegara, setDataNegara] = useState([]);
  const [HalamanAktif, setHalamanAktif] = useState(1);
  const [DetailNegara, setDetailNegara] = useState(null);
  const JumlahNegaraPerHalaman = 20;

  const ambilData = () => {
    axios
      .get("https://restcountries.com/v3.1/independent?status=true")
      .then((res) => {
        setDataNegara(res.data);
      })
      .catch((err) => console.error("Gagal Mengambil Data Negara:", err));
  };

  useEffect(() => {
    ambilData();
  }, []);

  const JumlahHalaman = Math.ceil(DataNegara.length / JumlahNegaraPerHalaman);
  const IDNegara = (HalamanAktif - 1) * JumlahNegaraPerHalaman;
  const NegaraPerHalaman = DataNegara.slice(
    IDNegara,
    IDNegara + JumlahNegaraPerHalaman
  );

  const datadetail = (namanegara) => {
    setDetailNegara(null);
    axios
      .get(`https://restcountries.com/v3.1/translation/${namanegara}`)
      .then((res) => {
        setDetailNegara(res.data[0]);
      })
      .catch((err) => console.error("Gagal Mengambil Data Negara:", err));
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
        {NegaraPerHalaman.length === 0 ? (
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="flex w-80 flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            ))}
          </div>
        ) : (
          NegaraPerHalaman.map((item) => (
            <div
              onClick={() => {
                datadetail(item.translations.ind.common);
                document.getElementById("modaldetailnegara").showModal();
              }}
              key={item.translations.ind.common}
              className="card bg-base-100 w-80 shadow-sm border-1 border-gray-300 cursor-pointer hover:shadow-xl transition-shadow"
            >
              <figure>
                <img
                  src={item.flags.png}
                  alt="Shoes"
                  className="w-full h-[200px] object-cover border-1 border-gray-300"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.translations.ind.common}</h2>
                <p>
                  Jumlah Populasi: {item.population.toLocaleString("id-ID")}{" "}
                  Jiwa
                </p>
                <p>
                  Letak Negara: {item.region}, {item.subregion}
                </p>
                <p>Ibu Kota: {item.capital}</p>
              </div>
            </div>
          ))
        )}
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
      <dialog id="modaldetailnegara" className="modal">
        {DetailNegara && (
          <div className="modal-box">
            <h3 className="font-bold text-lg">Informasi Negara</h3>
            <div className="card bg-base-100 mt-4 ">
              <figure>
                <img
                  src={DetailNegara.flags.png}
                  className="border-1 border-gray-300"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  <p>{DetailNegara.translations.ind.common}</p>
                </h2>
                <p>Nama Resmi: {DetailNegara.translations.ind.official}</p>
                <p>
                  Jumlah Populasi:{" "}
                  {DetailNegara.population.toLocaleString("id-ID")} Jiwa
                </p>
                Letak Negara: {DetailNegara.region}, {DetailNegara.subregion}
                <p>Ibu Kota: {DetailNegara.capital?.[0]}</p>
                <p>
                  Bahasa:{" "}
                  {Object.values(DetailNegara.languages || {}).join(", ")}
                </p>
                <p>
                  Mata Uang:{" "}
                  {Object.values(DetailNegara.currencies || {})
                    .map((cur) => `${cur.name} (${cur.symbol})`)
                    .join(", ")}
                </p>
                <p>Zona Waktu: {DetailNegara.timezones?.join(", ")}</p>
                <p>
                  Luas Wilayah: {DetailNegara.area.toLocaleString("id-ID")} km²
                </p>
                <p>Kode Negara: {DetailNegara.cca2}</p>
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
