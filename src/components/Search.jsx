const Search = ({ search, setSearch }) => {
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <label htmlFor="search">Search Query: </label>
      <input
        type="text"
        name="search"
        onChange={searchHandler}
        value={search}
      />
    </>
  );
};

export default Search;
