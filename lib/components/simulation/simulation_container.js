import { connect } from 'react-redux';
import Simulation from './simulation.jsx';

const mapStateToProps = (state) => ({
  cyclic: state.cyclic
});

export default connect(
  mapStateToProps
)(Simulation);
