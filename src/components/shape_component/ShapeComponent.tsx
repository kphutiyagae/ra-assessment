import React, {ReactPropTypes, useState} from 'react';
import { Box } from '../Box';

const boxStyles: React.CSSProperties = {
    width: '100px',
    height: '100px',
    backgroundColor: '#f00',
};

type Props = {
    render_shape : string
    shape_color : string
}

function ShapeComponent({render_shape, shape_color} : Props){

   //Vars to manage shape properties
    const [shape, setShape] = useState(render_shape);

    const [color, setColor] = useState(shape_color);

    return(
        <div>
        return <Box style={boxStyles}/>
        </div>
    )
}

export default ShapeComponent;