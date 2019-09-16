import { connect } from 'react-redux';
import { fetchSpot } from '../../../actions/spot_actions';
import SpotShow from './spot_show';


const mapStateToProps = (state, ownProps) => {
  const spotId = parseInt(ownProps.match.params.spotId);
  const spot = state.entities.spots[spotId];
  return {
    spotId,
    spot
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSpot: (id) => dispatch(fetchSpot(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotShow);