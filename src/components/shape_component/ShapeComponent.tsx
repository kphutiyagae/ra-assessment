import React from 'react';
import { Box } from '../Box';

const boxStyles: React.CSSProperties = {
    width: '100px',
    height: '100px',
    backgroundColor: '#f00',
};

class ShapeComponent extends React.Component{

    render(){
        return <Box style={boxStyles}/>
    }
}

export default ShapeComponent;