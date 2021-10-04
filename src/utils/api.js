import axios from 'axios';

export const getMovies = (payload) => axios.get(payload)