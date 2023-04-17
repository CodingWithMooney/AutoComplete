import { useState, ChangeEvent, useEffect } from 'react'
import './App.css'
import { optionType } from './Types';
import Search from "./components/Search";

const App = (): JSX.Element => {

  const [search, setSearch] = useState<string>('');
  const [options,setOptions] = useState<[]>([])
  const[user,setUser] = useState<optionType | null>(null);




  //Get all users from api
  const getSearchOptions = (value: string) => {
    fetch(`http://localhost:4000/users/search`, {
      method: "POST",
      body: JSON.stringify({
        "search": value
      }),
      headers: {
        "Content-Type": "application/json",
      }
    } ).then(res => res.json()).then((data) => setOptions(data));
  }

  //Handle search bar input changes
  const onInputChange = (e:ChangeEvent<HTMLInputElement> ) => {
    const value = e.target.value.trim()
    setSearch(value);
    if (value === '') return
    getSearchOptions(value);
  }

  //Get selected user back from api
  const getUser = (user:optionType) => {
    fetch(`http://localhost:4000/users/${user.id}` 
    ).then(res => res.json()).then((data) => console.log(data))
  }

  
  const onSubmit = () => {
    if (!user) return
    getUser(user)
  } 

  const onOptionSelect = (option:optionType) => {
    setUser(option)
  };

  //Get selected user from options
  useEffect(() => {
    if(user) {
      setSearch(`${user.firstName} ${user.lastName}`);
      setOptions([]);
    }

  },[user])


  return (
    <div className="App" >
      <Search search={search} options={options} onInputChange={onInputChange}
      onSubmit={onSubmit} onOptionSelect={onOptionSelect}/>
    </div>
  )
}

export default App
