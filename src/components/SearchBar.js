import React, {useCallback, useRef} from 'react'
import './SearchBar.css'

const SearchBar = ({onSearch}) => {

  const searchInput = useRef()
  const onSubmit = useCallback((e) =>{
    e.preventDefault()
    onSearch(searchInput.current.value)
  }, [onSearch])

  return <form onSubmit={onSubmit} className='search-bar'>
    <input ref={searchInput}/>
    <button>Show me the weather!</button>
  </form>
}

export default SearchBar
