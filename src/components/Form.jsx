import React , { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';

require('../styles/block.scss')

const Form = ({ hintText, text }) => (
    <div className="form-top">

    </div>
);

Form.propTypes = {
    hintText: PropTypes.string.isRequired
}

export default Form
