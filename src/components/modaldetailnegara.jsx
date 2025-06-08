import { Globe, Users, MapPin, DollarSign, Languages, X } from "lucide-react";

function ModalDetailNegara({ isModalOpen, DetailNegara, setisModalOpen }) {
  if (!isModalOpen) return null;

  const isLoading = !DetailNegara;

  return (
    <>
      <div className="modal modal-open">
        <div className="modal-box w-[90%] max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-4xl p-4">
          <button
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => setisModalOpen(false)}
          >
            <X className="w-4 h-4" />
          </button>
          {isLoading ? (
            <>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                <div className="skeleton w-24 h-16 rounded-lg" />
                <div className="flex-1 flex flex-col gap-2">
                  <div className="skeleton h-6 w-40 rounded" />
                  <div className="skeleton h-4 w-full sm:w-64 rounded" />
                </div>
              </div>
              <div className="divider"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="skeleton h-5 w-40 rounded mb-2" />
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="skeleton h-4 w-full rounded" />
                  ))}
                </div>
                <div className="space-y-4">
                  <div className="skeleton h-5 w-40 rounded mb-2" />
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="skeleton h-4 w-full rounded" />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                <img
                  src={DetailNegara.flags.png}
                  alt={`Bendera ${
                    DetailNegara.translations.ind?.common ||
                    DetailNegara.name?.official
                  }`}
                  className="w-24 h-16 object-cover rounded-lg border shadow-sm flex-shrink-0"
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
                    <div className="flex gap-2">
                      <MapPin className="w-4 h-4 text-base-content/60" />
                      <span className="font-medium">Ibukota:</span>
                      <span>{DetailNegara.capital?.[0] || "Tidak ada"}</span>
                    </div>
                    <div className="flex gap-2">
                      <Users className="w-4 h-4 text-base-content/60" />
                      <span className="font-medium">Populasi:</span>
                      <span>
                        {DetailNegara.population.toLocaleString("id-ID")}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Globe className="w-4 h-4 text-base-content/60" />
                      <span className="font-medium">Wilayah:</span>
                      <div className="flex gap-2 flex-wrap">
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
                    <div className="flex  gap-2">
                      <MapPin className="w-4 h-4 text-base-content/60" />
                      <span className="font-medium">Luas:</span>
                      <span>
                        {DetailNegara.area.toLocaleString("id-ID")} km²
                      </span>
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
                        <div className="flex gap-2 mb-2">
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
                        <div className="flex gap-2 mb-2">
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
                      <div className="flex gap-2 mb-2">
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
                    {DetailNegara.borders &&
                      DetailNegara.borders.length > 0 && (
                        <div>
                          <div className="flex gap-2 mb-2">
                            <MapPin className="w-4 h-4 text-base-content/60" />
                            <span className="font-medium">
                              Negara Tetangga:
                            </span>
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
            </>
          )}
          <div className="modal-action">
            <button
              className="btn btn-primary"
              onClick={() => setisModalOpen(false)}
            >
              Tutup
            </button>
          </div>
        </div>
        <div className="modal-backdrop" onClick={() => setisModalOpen(false)} />
      </div>
    </>
  );
}

export default ModalDetailNegara;
