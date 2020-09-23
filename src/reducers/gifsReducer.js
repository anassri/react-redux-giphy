import { RECEIVE_GIFS } from '../actions/gifActions';

const gifsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_GIFS:
      return { ...state, gifs: action.gifs };
    default:
      return state;
  }
};

export default gifsReducer;
