const Search = ({ search, setSearch }) => {
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="items-center">
      <label htmlFor="search" className="mr-2 text-xl">
        Search Movies:
      </label>
      <input
        type="text"
        name="search"
        className="bg-black border border-gray-300 px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={searchHandler}
        value={search}
      />
    </div>
  );
};

export default Search;
