import * as SpotApiUtil from '../util/spot_util';

export const RECEIVE_ALL_SPOTS = "RECEIVE_ALL_SPOTS";
export const RECEIVE_SPOT = "RECEIVE_SPOT";

const receiveAllSpots = (spots) => ({
  type: RECEIVE_ALL_SPOTS,
  spots
});

const receiveSpot = (spot) => ({
  type: RECEIVE_SPOT,
  spot
});

export const fetchSpots = () => dispatch => (
  SpotApiUtil.fetchSpots()
    .then(spots => dispatch(receiveAllSpots(spots)))
);

export const fetchSpot = (id) => dispatch => (
  SpotApiUtil.fetchSpot(id)
    .then(spot => dispatch(receiveSpot(spot)))
);