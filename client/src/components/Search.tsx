import { useState, ChangeEvent, useEffect } from 'react'
import '../App.css'
import { optionType } from '../Types'

type Props = {
    search: string
    options: []
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onOptionSelect: (option: optionType) => void
    onSubmit: () => void

}

// Get options for users to prepare for single user search
const Search = ({search,onInputChange,options,onOptionSelect,onSubmit}:Props): JSX.Element => {


  return (
    <div className="App relative">
      <input type="text"
        value={search} 
        onChange={onInputChange}/>
      
      <ul className="absolute">
        {options.map((option: optionType,index: number) => (
          <li key={option.id}>
            <button onClick={()=> onOptionSelect(option)}>
                {`${option.firstName}  ${option.lastName}`}

              </button>
          </li>
          
        ))}
      </ul>
      <button onClick={onSubmit}>Search</button>
    </div>
  )
}

export default Search
