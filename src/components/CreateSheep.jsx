import React , { PropTypes } from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Snackbar from 'material-ui/Snackbar';
import SheepInfo from './SheepInfo.jsx';

import HappyIcon from 'material-ui/svg-icons/social/mood';
import SadIcon from 'material-ui/svg-icons/social/sentiment-very-dissatisfied';

require('../styles/createSheep.scss')

class CreateSheep extends React.Component {

        constructor(props) {
                super(props);

                this.defaultFormValues = {
                        name: "Unknown",
                        interests:"Sheep things",
                        gender: "Male",
                        personality: "None",
                        hasWool: true,
                        isHappy: true
                };
                this.state = {
                        displayAdvanced: false,
                        snackbarOpen: false,
                        sheepInfoOpen: false,
                        name: this.defaultFormValues.name,
                        interests: this.defaultFormValues.interests,
                        gender: this.defaultFormValues.gender,
                        personality: this.defaultFormValues.personality,
                        hasWool: this.defaultFormValues.hasWool,
                        isHappy: this.defaultFormValues.isHappy
                };
                this.resetFormValues = this.resetFormValues.bind(this);
                this.handleChange = this.handleChange.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
                this.handeSelectChange = this.handeSelectChange.bind(this);
                this.onAdvancedToggle = this.onAdvancedToggle.bind(this);
                this.onCheckHasWool = this.onCheckHasWool.bind(this);
                this.onCheckIsHappy = this.onCheckIsHappy.bind(this);
                this.handleSnackbarOpen = this.handleSnackbarOpen.bind(this);
                this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
                this.toggleOpenSheepInfo = this.toggleOpenSheepInfo.bind(this);
        }

        resetFormValues() {
                document.getElementById("create-sheep-form").reset();
                this.setState({
                        name: this.defaultFormValues.name,
                        interests: this.defaultFormValues.interests,
                        gender: this.defaultFormValues.gender,
                        personality: this.defaultFormValues.personality,
                        hasWool: this.defaultFormValues.hasWool,
                        isHappy: this.defaultFormValues.isHappy
                });
        }

        getRandomNumber(start, end, increments) {
                var numbers = [];
                for(var n = start; n <= end; n += increments) {
                numbers.push(n);
                }

                var randomIndex = Math.floor(Math.random() * numbers.length);
                return numbers[randomIndex];
        }
        toggleOpenSheepInfo() {
                this.setState({sheepInfoOpen: !this.state.sheepInfoOpen});
        }

        handleChange(event) {
                const name = event.target.name;

                this.setState({
                        [name]: event.target.value
                });
        }

        handeSelectChange(event, index, value) {
                this.setState({personality: value});
        }

        handleSubmit(event) {
                event.preventDefault();
                this.handleSnackbarOpen();
                const sheep = {
                        name: this.state.name,
                        interests: this.state.interests,
                        gender: this.state.gender,
                        personality: this.state.personality,
                        hasWool: this.state.hasWool,
                        isHappy: this.state.isHappy,
                        left: this.getRandomNumber(100, window.innerWidth-100, 100),
                        top: this.getRandomNumber(110, 800, 130)
                }
                this.props.createSheep(sheep);
                this.resetFormValues();
        }


        onCheckHasWool(e) {
                this.setState({
                        hasWool: !this.state.hasWool
                });
        }

        onCheckIsHappy(e) {
                this.setState({
                        isHappy: !this.state.isHappy
                });
        }

        onAdvancedToggle(e) {
                this.setState({
                        displayAdvanced: !this.state.displayAdvanced
                });
        }

        getSheepInfo(sheep) {
                console.log("clicked!", sheep)
                return (
                        <SheepInfo sheep={sheep}/>
                );
        }

        handleSnackbarOpen () {
                 this.setState({
                    snackbarOpen: true,
                  });
        }

        handleSnackbarClose () {
                  this.setState({
                    snackbarOpen: false,
                  });
        }

        handleSheepListClick(sheep) {
                this.toggleOpenSheepInfo();
                this.props.selectSheep(sheep);
        }

        render() {
                return (
                        <div className="create-sheep-top">
                                        <Paper zDepth={1} className="create-sheep__top-menu">
                                                <Toggle label="Advanced options" className="advanced-toggle" onToggle={this.onAdvancedToggle}/>
                                        </Paper>
                                        <form id="create-sheep-form" className="create-sheep__form" onSubmit={this.handleSubmit }>
                                                        <Paper zDepth={1} className="create-sheep-top__paper">
                                                <Paper zDepth={1}  className="row">
                                                        <div className="create-sheep__form-column">
                                                                 <TextField className="create-sheep__form__input"
                                                                         name="name"
                                                                         defaultValue=""
                                                                         floatingLabelText= "Name"
                                                                         floatingLabelFixed={true}
                                                                         onChange={this.handleChange}
                                                                         underlineShow={true}
                                                                />
                                                                <TextField className="create-sheep__form__input"
                                                                        name="interests"
                                                                        defaultValue=""
                                                                        floatingLabelText= "Interests"
                                                                        floatingLabelFixed={true}
                                                                        onChange={this.handleChange}
                                                                        underlineShow={true}
                                                               />
                                                               <TextField className="create-sheep__form__input"
                                                                       floatingLabelText="Gender"
                                                                       floatingLabelFixed={true}
                                                                       name="gender"
                                                                       defaultValue=""
                                                                       onChange={this.handleChange}
                                                                       underlineShow={true}
                                                              />
                                                    </div>
                                                    <div className="create-sheep__form-column">
                                                                      <div className={this.state.displayAdvanced ?  "create-sheep__form-column create.sheep__form-column--advanced" : "disabled "}>
                                                                              <SelectField
                                                                                floatingLabelText="Personality"
                                                                                value={this.state.personality}
                                                                                onChange={this.handeSelectChange}
                                                                              >
                                                                             <MenuItem value={"Shy"} primaryText="Shy" />
                                                                            <MenuItem value={"Adventurous"} primaryText="Adventurous" />
                                                                            <MenuItem value={"Irresponsible"} primaryText="Irresponsible" />
                                                                            <MenuItem value={"None"} primaryText="None" />
                                                                          </SelectField>
                                                                              <Checkbox  className="create-sheep__form__input create-sheep__form__button--advanced"
                                                                                  label="Has wool" checked={this.state.hasWool === true} onCheck={this.onCheckHasWool}
                                                                                  />
                                                                                <Checkbox  className="create-sheep__form__input create-sheep__form__button--advanced"
                                                                                      label="Is happy" checked={this.state.isHappy === true} onCheck={this.onCheckIsHappy}
                                                                                    />
                                                                    </div>
                                                    </div>
                                              </Paper>
                                              <div className="row">
                                                      <RaisedButton className="create-sheep__form__button" onClick={this.resetFormValues} label="reset"  secondary={true} />
                                                      <RaisedButton className="create-sheep__form__button" type="submit" label="create"  primary={true} />
                                              </div>
                                      </Paper>
                                      <Paper zDepth={1} className="create-sheep__form-column create-sheep__form-column--last">
                                              <div className="sheep-list-header">
                                                      <h3>Sheep in the farm</h3>
                                              </div>
                                                <List>
                                              <div>
                                                      {this.props.sheepList.length > 0  &&
                                                              this.props.sheepList.map( sheep => (
                                                                      <ListItem primaryText={sheep.name} onTouchTap={() => this.handleSheepListClick(sheep)}  rightIcon={sheep.isHappy ? <HappyIcon /> : <SadIcon />} />
                                                              ))
                                                      }
                                              </div>
                                      </List>
                                      </Paper>
                                </form>
                                <Snackbar
                                          open={this.state.snackbarOpen}
                                          message="Sheep created"
                                          autoHideDuration={4000}
                                          onRequestClose={this.handleSnackbarClose}
                                        />
                                {!!this.props.selectedSheep ?  <SheepInfo sheep={this.props.selectedSheep } /> : null}

                        </div>
                );
        }
}

CreateSheep.propTypes = {
        sheepList: PropTypes.array.isRequired,
        createSheep: PropTypes.func.isRequired,
}

export default CreateSheep
