import SearchIcon from "@mui/icons-material/Search";
function Search({ searchParam, onSearhChange, handleSearch }) {
  return (
    <div className="bg-darkgrey w-[75%] flex items-center justify-end mx-auto mt-4 h-11 text-grey rounded-3xl md:px-0 px-4">
      <SearchIcon />
      <input
        value={searchParam}
        onChange={(e) => onSearhChange(e)}
        className="bg-darkgrey w-[95%] h-8 px-2 outline-none rounded-3xl ms-1 text-sm text-white"
        type="text"
        placeholder="Search"
      />
      <button onClick={()=>handleSearch()}>search</button>
    </div>
  );
}

export default Search;
