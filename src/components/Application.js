import React, { Component } from 'react';
import ButtonContainer from '../containers/ButtonContainer';
import FormContainer from '../containers/FormContainer';
import SheepFarmContainer from '../containers/SheepFarmContainer';
import TopMenuContainer from '../containers/TopMenuContainer';
import photo from '../photos/malaysia1.jpg';

require('../styles/application.scss');

        class App extends Component {
                render() {
                        return (
                                <div>
                                        <TopMenuContainer />
                                        <div className="top-component">
                                                <div className="top-component__content">
                                                        <SheepFarmContainer />
                                                </div>
                                        </div>
                                </div>
                        );
                }
        }

export default App;
