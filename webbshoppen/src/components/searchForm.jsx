
export default function SearchForm({ onSearch, searchValue }) {


  // gets the value from what the user types in search
  function userSearch(event) {

    onSearch(event.target.value)
    console.log("i search", event.target.value)
    console.log()
  }

  return (
    <>
        <label htmlFor="search">Search </label>
        <input type="text" name="search" id="search" value={searchValue} onChange={userSearch}/>
    </>
  );
}