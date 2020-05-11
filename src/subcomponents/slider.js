import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import { Planet } from "./planet";

class Slider extends Component {
    state = {  }
    render() { 
        return ( <AwesomeSlider animation="cubeAnimation">
            
<div><Planet /></div>
<div>2</div>
<div>3</div>
<div>4</div>
        </AwesomeSlider> );
    }
}
 
export default Slider;