import { optionType } from './../Types/index'

type componentProps = {
  options: []
  onOptionSelect: (option: optionType) => void
}

const Suggestions = ({ options, onOptionSelect }: componentProps): JSX.Element => (
  <ul className="absolute top-9 bg-white ml-1 rounded-b-md">
    {options.map((option: optionType,index: number) => (
          <li key={option.id}>
            <button 
                 className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500  text-black px-2 py-1 cursor-pointer"
                onClick={()=> onOptionSelect(option)}>
                {`${option.firstName}  ${option.lastName}`}
              </button>
          </li>
    ))}
  </ul>
)

export default Suggestions
