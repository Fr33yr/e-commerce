import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from 'react-redux'

import { searchByName } from '../../api/api'
import { searchResults } from '../../redux/states/search.state'

const defaultSearch = {
  name: ""
}

export function Header() {
  const [search, setSearch] = useState(defaultSearch)
  const { name } = search
  const dispatch = useDispatch()

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value
    }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    searchByName(search.name).then(res => dispatch(searchResults(res)))
  }

  return (
    <>
      <header className="h-fit w-full fixed z-50">
        <nav className='h-14 w-full flex flex-row justify-around
        py-3 bg-neutral-900 drop-shadow-md'>
          <h2 className="text-white">The Rings Store</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" id="name" onChange={handleOnChange} value={name}
              className="border-2 border-white focus:outline-none" />
            <button type="submit" className="px-2 border-2 border-white
            text-white">
              Find
            </button>
          </form>
          <h2 className="text-white">Cart</h2>
        </nav>
      </header>
    </>
  )
}
