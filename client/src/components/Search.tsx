import {  ChangeEvent } from 'react'
import { optionType } from '../Types'
import Suggestions from './Suggestions'

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
    <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] ">
      <h1 className="text-3xl font-extrabold">Search Users</h1>
      <p>Type characters to return user names</p>
    <div className="relative flex mt-10 md:mt-4">
      <input type="text"
        value={search} 
        onChange={onInputChange}
        className="px-2 py-1 rounded-l-md border-2 border-white"/>
      
      <Suggestions options={options} onOptionSelect={onOptionSelect} />
      <button
        className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500  text-zinc-100 px-2 py-1 cursor-pointer"
        onClick={onSubmit}
      >
        search
      </button>
    </div>
    </section>
  )
}

export default Search
