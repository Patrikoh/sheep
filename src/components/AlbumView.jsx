import React , { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import DragScroll from 'react-dragscroll';

import image from '../photos/malaysia3.jpg';
const worldImage = require('../images/world.svg')
const backIcon = require('../images/back.svg')

require('../styles/album.scss')

const AlbumView = () => (
<div className="album-view-top">

</div>
);

AlbumView.propTypes = {
    photos: PropTypes.array.isRequired,
    addPhoto: PropTypes.func.isRequired
}

export default AlbumView
