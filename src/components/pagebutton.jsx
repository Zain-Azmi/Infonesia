function PageButton({ HalamanAktif, JumlahHalaman, setHalamanAktif }) {
  return (
    <>
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
      <br />{" "}
    </>
  );
}
export default PageButton;
