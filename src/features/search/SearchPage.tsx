import SearchComponent from "../../shared/components/search/Search"

function SearchPage() {
  return (
    <section className="flex flex-column justify-center items-center flex-1">
      <div className="w-[65vw]">
        <h1>Visulize GitHub</h1>
        <h1>Profiles.</h1>
        <SearchComponent/>
      </div>
    </section>
  )
}

export default SearchPage
