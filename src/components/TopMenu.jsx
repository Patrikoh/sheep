import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';


const albumIcon = require('../images/album.svg')
require('../styles/topMenu.scss');

const style = {
  margin: 12,
};

class TopMenu extends Component {
        render() {
                return (
                        <div className="Top-menu">
                                <FlatButton className="Top-menu__content">
                                        <img
                                                className="Top-menu__content__button"
                                                src={albumIcon}
                                                />
                                </FlatButton>
                        </div>
                );
        }
}

export default TopMenu;
