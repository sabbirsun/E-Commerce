import React from 'react'

export const SearchContext = React.createContext({})

function SearchProvider({ children }) {
  const [searchTerm, setSearchTerm] = React.useState("")
  return (
    <SearchContext.Provider value={{
      searchTerm,
      setSearchTerm
    }}>{children}</SearchContext.Provider>
  )
}

export default SearchProvider