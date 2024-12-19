import React, {useState} from "react";
import '../App.css';

const SearchBar=({onSearch})=>{
    const[query, setQuery] = useState('');
    
    const handleSearch=()=>{
        if(query.trim()===''){
            alert('Please enter a search term!');
            return;
        }
            onSearch(query);
        
    };
    

    return(
        <div className="search-bar">
            <input
            type="text"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            placeholder="Search Movies"/>

            <button onClick={handleSearch}>Search</button>
        </div>
    )
}
export default SearchBar;