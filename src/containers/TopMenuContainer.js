import { connect } from 'react-redux'
import { addPhoto } from '../actions'
import TopMenu from '../components/TopMenu.jsx'

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (newPhoto) => {
            dispatch(addPhoto(newPhoto))
        }
    }
}

export default connect(null, mapDispatchToProps)(TopMenu)
