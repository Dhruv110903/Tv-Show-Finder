import { useState, useContext } from "react";
import ShowsContext from "../context/shows/showsContext";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const showsContext = useContext(ShowsContext);
  const { searchShows } = showsContext;



  const onSearchHandler = (e) => {
    e.preventDefault();
   searchShows(searchTerm);
  };

  return (
    <div className="searchbar">
     
      <form className="searchbar__form">
        <input
          type="text"
          placeholder="Search For Tv Show"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-block" onClick={onSearchHandler}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
