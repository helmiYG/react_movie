import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getMovieDetail } from 'stores/actions'

import {
  useParams
} from "react-router-dom";
import { H1, Popup, Loder } from 'components'

const DetailComponent = () => {
  const dispatch = useDispatch()
  let { id } = useParams();
  const [isOpenPopup, setIsOpenPopup] = useState(false)
  const {detailMovie, isLoading} = useSelector(({moviesReducer}) => ({
    detailMovie: moviesReducer.detailMovie,
    isLoading: moviesReducer.isLoading
  }), shallowEqual)


  useEffect(() => {
    dispatch(getMovieDetail(id))
  }, [id, dispatch])
  return (
    <div className='p-detail'>
      {
        isLoading ? (
          <Loder />
        ) : (
          <>
            <H1>{detailMovie.Title}</H1>
            <div className='detail-upside'>
              <div className='detail-image'>
                <img src={detailMovie.Poster} alt='poster' onClick={setIsOpenPopup}/>
              </div>
              <div className='detail-movie'>
                <div className='detail-title'>Tahun Release</div>
                <div className='detail-content'>{detailMovie.Year}</div>
                <div className='detail-title'>Rating IMDb</div>
                <div className='detail-content'>{detailMovie.imdbRating}</div>
                <div className='detail-title'>Genre</div>
                <div className='detail-content'>{detailMovie.Genre}</div>
                <div className='detail-title'>Negara</div>
                <div className='detail-content'>{detailMovie.Country}</div>
                <div className='detail-title'>Durasi</div>
                <div className='detail-content'>{detailMovie.Runtime}</div>
                <div className='detail-title'>Sutradara</div>
                <div className='detail-content'>{detailMovie.Director}</div>
              </div>
            </div>
          </>
        )
      }
      
      <Popup isOpen={isOpenPopup} onClose={() => setIsOpenPopup(false)} image={detailMovie.Poster} />
    </div>
  )
}

export default DetailComponent
