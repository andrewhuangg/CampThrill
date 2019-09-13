import { connect } from 'react-redux';
import SpotIndex from './spots_index';
import { fetchSpots } from '../../actions/spot_actions';

const mapStateToProps = ({ entities: { spots }}) => {
  return {
    spots: Object.values(spots)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpots: () => dispatch(fetchSpots())
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotIndex);