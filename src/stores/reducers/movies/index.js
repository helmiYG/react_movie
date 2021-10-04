/* eslint-disable import/no-anonymous-default-export */
// movies Reducers
// --------------------------------------------------------

import {
  SET_LOADING
} from 'stores/actions/movies';

const initialState = {
  isLoading: false
};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload
      };
    default:
      return state;
  }
};
