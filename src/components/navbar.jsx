import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 bg-white/95 z-50 navbar bg-base-100 shadow-sm mb-2">
      <div className="flex-1">
        <a className="btn btn-ghost text-3xl hover:bg-gray-100 transition-colors duration-200 border-none outline-none shadow-none">
          <img
            onClick={() => {
              navigate("/");
            }}
            src="/logo.png"
            className="w-36"
          />
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar w-13 h-13 mr-4 hover:bg-gray-100 transition-colors duration-200 border-none outline-none shadow-none"
          >
            <img
              src="/bebek.gif"
              alt="Avatar"
              className="ring ring-success w-24 rounded-full ring-2 ring-offset-2 hover:bg-gray-100 transition-colors duration-200 border-none outline-none shadow-none"
            />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-white text-black "
          >
            <li
              onClick={() => {
                navigate("/profil");
              }}
              className="hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 border-none outline-none shadow-none"
            >
              <p>Profil</p>
            </li>
            <li
              onClick={() =>
                window.open("https://restcountries.com/", "_blank")
              }
              className="hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 border-none outline-none shadow-none"
            >
              <p>Sumber Data</p>
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
