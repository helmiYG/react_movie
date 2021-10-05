/* eslint-disable import/no-anonymous-default-export */
// movies Reducers
// --------------------------------------------------------

import {
  SET_LOADING,
  SET_MOVIES,
  SET_DETAIL_MOVIES
} from 'stores/actions/movies';

const initialState = {
  isLoading: false,
  movies: [],
  detailMovie: {}
};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload
      };
    case SET_DETAIL_MOVIES:
      return {
        ...state,
        detailMovie: payload
      };
    case SET_MOVIES:
      return {
        ...state,
        movies: payload
      };
    default:
      return state;
  }
};
