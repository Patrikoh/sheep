import React , { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import CreateSheepContainer from '../containers/CreateSheepContainer';
import Sheep from '../components/Sheep.jsx';

require('../styles/sheepFarm.scss')

class SheepFarm extends React.Component {

        constructor(props) {
                super(props);
                this.state = {
                        sheepList: props.sheepList,
                        displayCreateSheep: false
                };
        }

        handleSheepClick(sheep) {
                console.log("selecting"  + sheep.name)
                this.props.selectSheep(sheep)
        }

        render() {
                return (
                        <div className="sheep-farm">
                                <div className ="sheep-farm__content">
                                {this.props.sheepList.map( (sheep, index) => (
                                        <div className="sheep-farm__content__sheep" style={{ left: sheep.left, top: sheep.top }}  >
                                                        <Sheep key={index} sheepData={sheep} onClick={()=>this.handleSheepClick(sheep)} />
                                        </div>
                                ))}
                                </div>
                        <CreateSheepContainer className ="sheep-farm__footer"/>
                        </div>
                );
        }
}

export default SheepFarm
