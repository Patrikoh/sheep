import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

require('../styles/sheepInfo.scss');


const SheepInfo = ({ sheep }) => (
        <div className="popup-overlay">
        <div className="arrow" style= {{top: sheep.top +100, left: sheep.left+20}}/>
            <div className="sheep-info-top" style= {{top: sheep.top +115, left: sheep.left-50}}>
                    <Paper zDepth={3} >
                            <div className="sheep-info">
                                    {console.log("in sheepinfo")}
                                    <h>Name: {sheep.name}</h>
                                    <p>Interests:  {sheep.interests}</p>
                                    <p>Gender:  {sheep.gender}</p>
                                    <p>Personality: {sheep.personality}</p>
                            </div>
                    </Paper>
            </div>
           </div>
);

export default SheepInfo;
