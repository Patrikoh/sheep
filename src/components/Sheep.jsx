import React , { PropTypes } from 'react';

const image = '../images/sheep.png';


class Sheep extends React.Component {

        constructor(props) {
                super(props)
        }

        render() {
                return (
                        <img className="sheep" src={image}/>
                );
        }
}

Sheep.propTypes = {
    sheepData: PropTypes.object.isRequired
}

export default Sheep
