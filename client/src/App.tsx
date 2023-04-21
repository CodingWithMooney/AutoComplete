import { useState, ChangeEvent, useEffect } from 'react'
import { optionType } from './Types';
import Search from "./components/Search";
import SelectedUser from './components/SelectedUser';

const App = (): JSX.Element => {
  //Set state
  const [search, setSearch] = useState<string>('');
  const [options,setOptions] = useState<[]>([])
  const[user,setUser] = useState<optionType | null>(null);
  const[selectedUser,setSelectedUser] = useState<optionType | null>(null)


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
    if (value === '') {setOptions([])}  
    getSearchOptions(value);
  }

  //Get selected user back from api
  const getUser = (user:optionType) => {
    fetch(`http://localhost:4000/users/${user.id}` 
    ).then(res => res.json()).then((data) =>  {
      const selectedUser = data
      console.log(selectedUser);
      setSelectedUser(selectedUser)
 
    })
  }

  
  const onSubmit = () => {
    if (!user) return
    getUser(user)
    setSearch("")
    setUser(null);

  } 

   const resetUserSearch = () => {
    setSelectedUser(null);
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
    <main className="flex justify-center items-center bg-sky-800 h-[100vh] w-full" >
      {!selectedUser ? (<Search search={search} options={options} onInputChange={onInputChange}
        onSubmit={onSubmit} onOptionSelect={onOptionSelect}/>)
        : (
        <div className="flex justify-center items-center" >
          <SelectedUser data={selectedUser}/>
          <button
            className="bottom rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500  text-zinc-100 px-2 py-1 cursor-pointer"
          onClick={resetUserSearch}>Get another user</button>
        </div>
        )}
    </main>
  )
}

export default App
