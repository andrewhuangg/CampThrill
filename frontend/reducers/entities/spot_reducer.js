import { RECEIVE_ALL_SPOTS, RECEIVE_SPOT } from '../../actions/spot_actions';

const spotReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState;

  switch (action.type) {

    case RECEIVE_ALL_SPOTS:
      return Object.assign({}, state, action.spots);

    case RECEIVE_SPOT:
      newState =  { [action.spot.id]: action.spot };
      return Object.assign({}, state, newState);

    default:
      return state;
  }


};

export default spotReducer;