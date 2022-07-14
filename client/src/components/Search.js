import React from 'react'

const Search = () => {
    
  return (
    <div class="box">
        <form name="search">
            <input type="text" class="input" name="txt" 
            onmouseout="document.search.txt.value = ''"></input>
        </form>
            <i class="fas fa-search"></i>
    </div>
  )
}

export default Search