function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-3xl">Infonesia</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar w-13 h-13 mr-4"
          >
            <img
              src="/bebek.gif"
              alt="Avatar"
              className="ring ring-success ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2"
            />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => document.getElementById("Profil").showModal()}>
              <a>Profil</a>
            </li>
            <li>
              <a href="https://restcountries.com/" target="_blank">
                Sumber Data
              </a>
            </li>
          </ul>
          <dialog id="Profil" className="modal">
            <div className="modal-box  w-xs">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Profil</h3>
              <div className="card bg-base-100 mt-4 ">
                <div className="flex justify-center items-center">
                  <img
                    src="/bebek.gif"
                    alt="Avatar"
                    className="ring ring-success ring-offset-base-100 w-26 rounded-full ring-2 ring-offset-2"
                  />
                </div>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">
                    <p>Nama : Zain Azmi</p>
                  </h2>
                  <p>NIM : 2217020130</p>
                  <p>Kelas : 6.SI.D</p>
                </div>
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
