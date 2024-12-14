
const Search = ({ search, setSearch }) => {
  return (
    <div className=" lg:flex items-center gap-2" >
        <label className="text-lg font-semibold">Search: </label>
      <input
        type="text"
        className="border border-black rounded-sm p-2 w-full"
        placeholder="Search by Title or Description..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
