import React, {useCallback, useRef} from 'react'
import './SearchBar.css'

const SearchBar = ({onSearch}) => {

  const searchInput = useRef()
  const onSubmit = useCallback((e) =>{
    e.preventDefault()
    console.log(searchInput.current.value)
    onSearch(searchInput.current.value)
  }, [])

  return <form onSubmit={onSubmit} className='search-bar'>
    <input ref={searchInput}/>
    <button>Show me the weather!</button>
  </form>
}

export default SearchBar
