import React, {useCallback, useRef, FC} from 'react'
import './SearchBar.css'

interface SearchBarProps {
  onSearch: (val: string) => void
}

const SearchBar: FC<SearchBarProps> = ({onSearch}) => {
  const searchInput = useRef<HTMLInputElement | null>(null)

  const onSubmit: React.FormEventHandler = useCallback((e) =>{
    e.preventDefault()

    if (searchInput.current) {
      onSearch(searchInput.current.value)
    }
  }, [onSearch])

  return <form onSubmit={onSubmit} className='search-bar'>
    <input ref={searchInput}/>
    <button>Show me the weather!</button>
  </form>
}

export default SearchBar
