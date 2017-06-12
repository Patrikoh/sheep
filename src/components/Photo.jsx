import React , { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const Photo = () => (
    <div className="Block-top">
        <Paper className="Block-top__content">
                <img className="Block-top__content__image"
                        src={this.props.photo} />
        </Paper>
    </div>
);

Photo.propTypes = {
    hintText: PropTypes.string.isRequired
}

export default Photo
