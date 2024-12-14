
const Search = ({ search, setSearch }) => {
  return (
    <div className=" flex items-center gap-2" >
        <label className="text-lg">Search: </label>
      <input
        type="text"
        className="border border-slate-500 rounded-md p-2 w-full"
        placeholder="Search by Title or Description..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
