import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

import { Search, Card, Popup } from 'components'
import Logo from 'assets/images/logo.svg'
const listPokemons = [{name: 'text', image: Logo}]
const HomeComponent = () => {
  let history = useHistory();
  const [isOpenPopup, setIsOpenPopup] = useState(false)
  return (
    <>
        <Search />
        <div className='list-content'>
          {
            listPokemons.map((element) => (
              <>
                <Card image={element.image} name={element.name} onClick={() => history.push('/detail/1erQa')}  />
              </>
            ))
          }
        </div>
        <Popup isOpen={isOpenPopup} onClose={() => setIsOpenPopup(false)}/>
    </>
  )
}

export default HomeComponent
