import React, { useState } from 'react'
import { theme } from '../../../config/constants/theme'
import { SEARCH_ICON } from '../../../config/constants/icons'
import { useNavigate } from 'react-router'
import { buildRoute } from '../../../config/config'

const SearchComponent = () => {

    const navigate = useNavigate();

    const [searchValue, setSearchValue] = useState<string>('');

    const handleSearch = (e : React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        setSearchValue(e.target.value)
    }

    const handleButton = (e: React.MouseEvent<HTMLButtonElement>) : void => {
        e.preventDefault();

        navigate(buildRoute.profile(searchValue))
    }

  return (    
    <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', gap: '4px'}}>
            {SEARCH_ICON}
            <input type='text' placeholder='Search Username' name='search' value={searchValue} onChange={handleSearch}/>
            <button type="button" onClick={handleButton}>Analyze</button>
        </div>
  )
}

export default SearchComponent