import React , { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import DragScroll from 'react-dragscroll';
import ImageGallery from 'react-image-gallery';

const worldImage = require('../images/world.svg')
const backIcon = require('../images/back.svg')

require('../styles/album.scss')

const image = 'photos/malaysia3.jpg';

const Album = ({ photos, addPhoto }) => (
<div className="">

</div>
);

Album.propTypes = {
    photos: PropTypes.array.isRequired,
    addPhoto: PropTypes.func.isRequired
}

export default Album
