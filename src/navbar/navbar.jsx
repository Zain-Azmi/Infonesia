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
              src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
              alt="Avatar"
              className="ring ring-success ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2"
            />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              <a>Profil</a>
            </li>
            <li>
              <a href="https://restcountries.com/" target="_blank">
                Sumber Data
              </a>
            </li>
          </ul>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">Press ESC key or click outside to close</p>
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
