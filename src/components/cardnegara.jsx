function CardNegara({
  InputSearch,
  JumlahNegaraPerHalaman,
  setisModalOpen,
  datadetail,
  Datasudahdiambil,
  NegaraPerHalaman,
}) {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {Datasudahdiambil === 0 ? (
          Array.from({ length: JumlahNegaraPerHalaman }).map((_, i) => (
            <div
              key={i}
              className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 flex flex-col gap-4"
            >
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          ))
        ) : NegaraPerHalaman.length > 0 ? (
          NegaraPerHalaman.map((item) => (
            <div
              onClick={() => {
                datadetail(item.ccn3);
                setisModalOpen(true);
              }}
              key={item.ccn3}
              className="card w-full sm:w-1/2 md:w-1/4 lg:w-1/5 bg-base-100 shadow-sm border border-gray-300 cursor-pointer hover:shadow-xl transition-shadow"
            >
              <figure className="w-full aspect-[3/2] overflow-hidden border border-gray-300">
                <img
                  src={item.flags.png}
                  alt="Bendera"
                  className="w-full h-full object-fill"
                  loading="lazy"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">
                  {item.translations.ind?.common || item.name.common}
                </h2>
                <p>
                  Jumlah Populasi: {item.population.toLocaleString("id-ID")}
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
    </>
  );
}

export default CardNegara;
