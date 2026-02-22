import Search from '../../assets/SVG/search.svg?react'
import './searchInput.css'
export function SearchInput({placeholder}){
    return(
        <div className="input-container">
            <input 
                className="search-input"
                placeholder={placeholder}/>
            <button className="search-button"><Search className="search-icon"/></button>       
        </div>
    );
}