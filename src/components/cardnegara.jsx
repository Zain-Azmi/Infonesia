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
                setisModalOpen(true);
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
    </>
  );
}

export default CardNegara;
