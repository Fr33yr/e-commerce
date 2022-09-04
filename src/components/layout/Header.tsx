import { ChangeEvent, FormEvent, useState } from "react";
import {useSelector} from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

import { RootState } from "../../redux/store";


const defaultSearch = {
  name: ""
}

export function Header() {
  const [search, setSearch] = useState(defaultSearch)
  const { name } = search
  const cartState = useSelector((state: RootState) => state.cart)
  let navigate = useNavigate()

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value
    }))
  }
 
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate(`/products/${search.name}`)
  }

  return (
    <>
      <header className="h-fit w-full fixed z-50">
        <nav className='h-14 w-full flex flex-row justify-around
        py-3 bg-neutral-900 drop-shadow-md'>
          <Link className="text-white" to="/">Rings</Link>
          <form onSubmit={handleSubmit}>
            <input type="text" id="name" onChange={handleOnChange} value={name}
              className="border-2 border-white focus:outline-none" />
            <button type="submit" className="px-2 border-2 border-white
            text-white">
              Find
            </button>
          </form>
          <div className="text-white">
            <Link to="/cart" className="mr-2">
              <FontAwesomeIcon icon={faCartShopping}/>
            </Link> {cartState.length}
          </div>
        </nav>
      </header>
    </>
  )
}
