import SearchComponent from "../../shared/components/search/Search"
import { SearchContainer, SearchWrapper } from "./search.styles"

function SearchPage() {
  return (
    <SearchWrapper>
      <SearchContainer>
        <h1>Visulize GitHub</h1>
        <h1>Profiles.</h1>
        <SearchComponent/>
      </SearchContainer>
    </SearchWrapper>
  )
}

export default SearchPage
