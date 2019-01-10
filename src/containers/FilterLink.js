import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Home/Link'

const mapStateToProps = (state, owmProps) => {
  return {
    active: owmProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
