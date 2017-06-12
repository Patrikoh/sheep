import { connect } from 'react-redux'
import { updateSheepList, selectSheep } from '../actions'
import SheepFarm from '../components/SheepFarm.jsx'

const mapStateToProps = (state) => {
    return {
        sheepList: state.sheep.sheepList,
        selectedSheep: state.sheep.selectedSheep,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSheepList: (sheepList) => {
            dispatch(updateSheepList(sheepList))
        },
        selectSheep: (sheep) => {
                dispatch(selectSheep(sheep))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SheepFarm)
