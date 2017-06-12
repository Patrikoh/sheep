import { connect } from 'react-redux'
import { createSheep, selectSheep } from '../actions'
import CreateSheep from '../components/CreateSheep.jsx'


const mapStateToProps = (state) => {
    return {
        sheepList: state.sheep.sheepList,
        selectedSheep: state.sheep.selectedSheep,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createSheep: (newSheep) => {
            dispatch(createSheep(newSheep))
            },
            selectSheep: (sheep) => {
                    dispatch(selectSheep(sheep))
            }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateSheep)
