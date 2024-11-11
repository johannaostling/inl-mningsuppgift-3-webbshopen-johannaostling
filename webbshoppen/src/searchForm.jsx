
export default function SearchForm({ onSearch, searchValue }) {


  function userSearch(event) {

    onSearch(event.target.value)
    console.log("i search", event.target.value)
    console.log()
  }

  return (
    <>

        <label htmlFor="search">Sök</label>
        <input type="text" name="search" id="search" value={searchValue} onChange={userSearch}/>

    </>
  );
}