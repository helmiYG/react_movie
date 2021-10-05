import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { shallowEqual, useSelector, useDispatch} from 'react-redux';

import { Search, Card, Popup, Loder, Button } from 'components'
import Logo from 'assets/images/logo.svg'

import './styles.scss'

import { getMoviesAction, setMovies } from 'stores/actions'

const HomeComponent = () => {
  let history = useHistory();
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [page, setPage] = useState(1)
  const [showScroll, setShowScroll] = useState(false)
  const {movies, isLoading} = useSelector(({moviesReducer}) => ({
    movies: moviesReducer.movies,
    isLoading: moviesReducer.isLoading
  }), shallowEqual)

  const [isOpenPopup, setIsOpenPopup] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  window.addEventListener('scroll', checkScrollTop)

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
      dispatch(getMoviesAction(name, page))
      setPage((prev) => prev + 1);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [name, page, dispatch]);

  const handleOnBack = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  
  const handleChange = ({target}) => {
    setName(target.value)
  }

  const handleClick = () => {
    dispatch(getMoviesAction(name, page))
    setPage((prev) => prev + 1);
  }

  const handleReset = () => {
    setName('')
    setPage(1)
    dispatch(setMovies([]))
  }

  return (
    <>
        <Search handleChange={handleChange} name={name} handleClick={handleClick} handleReset={handleReset}/>
        <div className='list-content'>
          {
            movies.length > 0 && movies.map((element, index) => (
              <div key={index}>
                <Card image={element.Poster === 'N/A' ? Logo : element.Poster} name={element.Title} onClick={() => history.push(`/detail/${element.imdbID}`)}  />
              </div>
            ))
          }
        </div>
        <Popup isOpen={isOpenPopup} onClose={() => setIsOpenPopup(false)}/>
        {isLoading && <Loder />}
        {
          showScroll && (
            <div className='fixed'><Button onClick={handleOnBack}>back to top</Button></div>
          )
        }
    </>
  )
}

export default HomeComponent
