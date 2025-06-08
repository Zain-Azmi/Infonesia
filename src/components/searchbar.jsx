function SearchBar({ InputSearch, setInputSearch, setHalamanAktif }) {
  return (
    <div className="flex justify-center items-center h-[150px] px-2">
      <label className="focus:outline-none focus-within:outline-none input border-4 border-gray-300 rounded-full flex items-center focus:box-shadow-none  w-xs">
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
        <input
          type="text"
          placeholder="Cari Negara (Nama Lokal/Internasional)..."
          className="input w-xs  focus:outline-none focus-within:outline-none"
          value={InputSearch}
          onChange={(e) => {
            setInputSearch(e.target.value);
            setHalamanAktif(1);
          }}
        />
      </label>
    </div>
  );
}
export default SearchBar;
