import { useState, useEffect } from "react";
import { Globe, Users, MapPin, DollarSign, Languages, X } from "lucide-react";
import axios from "axios";
function App() {
  const [DataNegara, setDataNegara] = useState([]);
  const [HalamanAktif, setHalamanAktif] = useState(1);
  const [DetailNegara, setDetailNegara] = useState(null);
  const [InputSearch, setInputSearch] = useState("");
  const JumlahNegaraPerHalaman = 20;
  const [Datasudahdiambil, setDatasudahdiambil] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ambilData = () => {
    axios
      .get("https://restcountries.com/v3.1/independent?status=true")
      .then((res) => {
        setDataNegara(res.data);
        setDatasudahdiambil(1);
      })
      .catch((err) => console.error("Gagal Mengambil Data Negara:", err));
  };

  useEffect(() => {
    ambilData();
  }, []);

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
  const datadetail = (kodenegara) => {
    setDetailNegara(null);
    axios
      .get(`https://restcountries.com/v3.1/alpha/${kodenegara}`)
      .then((res) => {
        setDetailNegara(res.data[0]);
      })
      .catch((err) => console.error("Gagal Mengambil Data Negara:", err));
  };
  return (
    <>
      <div className="flex justify-center items-center h-[150px]">
        <label className="focus:outline-none focus-within:outline-none input border-4 border-gray-300 rounded-full flex items-center focus:box-shadow-none  w-xs">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            n
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
          <input
            type="text"
            placeholder="Cari Negara (Nama Lokal/Internasional)..."
            className="input w-xs focus:outline-none focus-within:outline-none"
            value={InputSearch}
            onChange={(e) => {
              setInputSearch(e.target.value);
              setHalamanAktif(1);
            }}
          />
        </label>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {Datasudahdiambil === 0 ? (
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            {Array.from({ length: JumlahNegaraPerHalaman }).map((_, i) => (
              <div key={i} className="flex w-80 flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            ))}
          </div>
        ) : NegaraPerHalaman.length > 0 ? (
          NegaraPerHalaman.map((item) => (
            <div
              onClick={() => {
                datadetail(item.ccn3);
                setIsModalOpen(true);
              }}
              key={item.ccn3}
              className="card bg-base-100 w-xs shadow-sm border-1 border-gray-300 cursor-pointer hover:shadow-xl transition-shadow"
            >
              <figure>
                <img
                  src={item.flags.png}
                  alt="Shoes"
                  className="w-full h-[200px] object-cover border-1 border-gray-300"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {item.translations.ind?.common || item.name.common}
                </h2>
                <p>
                  Jumlah Populasi: {item.population.toLocaleString("id-ID")}{" "}
                </p>
                <p>
                  Letak Negara: {item.region}, {item.subregion}
                </p>
                <p>Ibu Kota: {item.capital}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center text-center mt-4">
            <img src="/kucing.png" className="w-32 h-auto mb-2" />
            <p className="text-gray-700">
              Tidak ada negara dengan nama <strong>{InputSearch}</strong>
            </p>
          </div>
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

      {isModalOpen && DetailNegara && (
        <div className="modal modal-open">
          <div className="modal-box  w-3xl max-w-4xl">
            <button
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start gap-4 mb-6">
              <img
                src={DetailNegara.flags.png}
                alt={`Bendera ${
                  DetailNegara.translations.ind?.common ||
                  DetailNegara.name?.official
                }`}
                className="w-24 h-16 object-cover rounded-lg border shadow-sm"
              />
              <div>
                <h3 className="font-bold text-2xl">
                  {DetailNegara.translations.ind?.common ||
                    DetailNegara.name?.official}
                </h3>
                <p className="text-base-content/70">
                  {DetailNegara.name.official}
                </p>
              </div>
            </div>

            <div className="divider"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-lg border-b pb-2">
                  Informasi Dasar
                </h4>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-base-content/60" />
                    <span className="font-medium">Ibukota:</span>
                    <span>{DetailNegara.capital?.[0] || "Tidak ada"}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-base-content/60" />
                    <span className="font-medium">Populasi:</span>
                    <span>
                      {DetailNegara.population.toLocaleString("id-ID")}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-base-content/60" />
                    <span className="font-medium">Wilayah:</span>
                    <div className="flex gap-2">
                      <div className="badge badge-primary">
                        {DetailNegara.region}
                      </div>
                      {DetailNegara.subregion && (
                        <div className="badge badge-outline">
                          {DetailNegara.subregion}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-base-content/60" />
                    <span className="font-medium">Luas:</span>
                    <span>{DetailNegara.area.toLocaleString("id-ID")} km²</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg border-b pb-2">
                  Informasi Tambahan
                </h4>
                <div className="space-y-3">
                  {DetailNegara.currencies && (
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="w-4 h-4 text-base-content/60" />
                        <span className="font-medium">Mata Uang:</span>
                      </div>
                      <div className="flex flex-wrap gap-2 ml-6">
                        {Object.values(DetailNegara.currencies).map(
                          (currency, index) => (
                            <div key={index} className="badge badge-outline">
                              {currency.name} ({currency.symbol})
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {DetailNegara.languages && (
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Languages className="w-4 h-4 text-base-content/60" />
                        <span className="font-medium">Bahasa:</span>
                      </div>
                      <div className="flex flex-wrap gap-2 ml-6">
                        {Object.values(DetailNegara.languages).map(
                          (language, index) => (
                            <div key={index} className="badge badge-outline">
                              {language}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="w-4 h-4 text-base-content/60" />
                      <span className="font-medium">Zona Waktu:</span>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-6">
                      {DetailNegara.timezones
                        .slice(0, 3)
                        .map((timezone, index) => (
                          <div
                            key={index}
                            className="badge badge-outline badge-sm"
                          >
                            {timezone}
                          </div>
                        ))}
                      {DetailNegara.timezones.length > 3 && (
                        <div className="badge badge-outline badge-sm">
                          +{DetailNegara.timezones.length - 3} lainnya
                        </div>
                      )}
                    </div>
                  </div>

                  {DetailNegara.borders && DetailNegara.borders.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-base-content/60" />
                        <span className="font-medium">Negara Tetangga:</span>
                      </div>
                      <div className="flex flex-wrap gap-2 ml-6">
                        {DetailNegara.borders
                          .slice(0, 5)
                          .map((border, index) => (
                            <div
                              key={index}
                              className="badge badge-outline badge-sm"
                            >
                              {border}
                            </div>
                          ))}
                        {DetailNegara.borders.length > 5 && (
                          <div className="badge badge-outline badge-sm">
                            +{DetailNegara.borders.length - 5} lainnya
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="modal-action">
              <button
                className="btn btn-primary"
                onClick={() => setIsModalOpen(false)}
              >
                Tutup
              </button>
            </div>
          </div>
          <div
            className="modal-backdrop"
            onClick={() => setIsModalOpen(false)}
          ></div>
        </div>
      )}
    </>
  );
}

export default App;
