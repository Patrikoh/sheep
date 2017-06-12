import { connect } from 'react-redux'
import { selectPhoto } from '../actions'
import Photo from '../components/Photo.jsx'


const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(selectPhoto())
        }
    }
}

export default connect(null, mapDispatchToProps)(Photo)
