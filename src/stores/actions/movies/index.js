// movies Actions
// --------------------------------------------------------

/* eslint-disable space-before-function-paren */
import { getMovies } from 'utils/api'

export const SET_LOADING = 'movies/SET_LOADING';
export const SET_MOVIES = 'movies/SET_MOVIES';
export const SET_DETAIL_MOVIES = 'movies/SET_DETAIL_MOVIES';

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload
});
export const setMovies = (payload) => ({
  type: SET_MOVIES,
  payload
});
export const setDetailMovies = (payload) => ({
  type: SET_DETAIL_MOVIES,
  payload
});


export const getMoviesAction = (payload, page) => (dispatch, getState) => {
  const params=`http://www.omdbapi.com/?apikey=8c5d263&page=${page}&type=movie&s=${payload}`
  dispatch(setLoading(true))
  getMovies(params)
  .then(({ data }) => {
    const listMovies = getState().moviesReducer.movies
    dispatch(setMovies([...listMovies, ...data.Search]))
    dispatch(setLoading(false))
  }).catch((err) => {
    dispatch(setLoading(false))
    console.warn(err)
  });
}
export const getMovieDetail = (payload) => (dispatch, getState) => {
  const params=`http://www.omdbapi.com/?apikey=8c5d263&i=${payload}`
  dispatch(setLoading(true))
  getMovies(params)
  .then(({ data }) => {
    dispatch(setDetailMovies(data))
    dispatch(setLoading(false))
  }).catch((err) => {
    console.warn(err)
    dispatch(setLoading(false))
  });
}