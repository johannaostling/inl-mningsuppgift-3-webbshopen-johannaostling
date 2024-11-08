import { useState } from "react"

export default function SearchForm(){
    
    const [search, setSearch] = useState("");

    function userSearch(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newSearch = formData.get("search");
        setSearch(newSearch)
    }

    console.log("search", search)

    return(
        <>
            <form onSubmit={userSearch}>
                <label htmlFor="">Sök</label>
                <input type="text" name="search" id="search"/>
                <button type="submit">Search</button>
            </form>
        </>
    )

}