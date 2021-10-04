// movies Actions
// --------------------------------------------------------

/* eslint-disable space-before-function-paren */
import { getMovies } from 'utils/api'

export const SET_LOADING = 'movies/SET_LOADING';

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload
});


export const getMoviesAction = (payload) => (dispatch, getState) => {
  // const url = getState().pokemons.url;
  // console.log('masuk', payload);
  console.log(payload, '========');
  const page = 1
  const params=`http://www.omdbapi.com/?s=${payload}&apikey=8c5d263&page=2&type=movie`
  console.info(params, '=== params');
  getMovies(params)
  .then(({ data }) => {
    console.info(data, 'ini ?');
    // const details = [] 
    // data.results.map((element) => details.push(getPokemon(element.url)))
    
    // dispatch(getPokemonAction(details))
  }).catch((err) => {
    console.warn(err)
  });
}