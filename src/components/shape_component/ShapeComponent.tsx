import React, {useState} from 'react';
import { Box } from '../Box';


type Props = {
    render_shape : string
    shape_color : string
    shape_scale : string
}

function renderSwitch(sColor : string){
    switch(sColor){

        case 'red' :


    }
}

function ShapeComponent({render_shape, shape_color, shape_scale} : Props){
    
    //Vars to manage shape properties
    const [shape, setShape] = useState(render_shape);

    const [color, setColor] = useState(shape_color);

    const [scale, setScale] = useState(shape_scale);
    
        const boxStyles: React.CSSProperties = {
            width: scale,
            height: scale,
            backgroundColor: color
        };
        console.log( renderChange(shape, boxStyles) );
    return(
        <div>
            <Box style={boxStyles}/>          
        </div>
    )
}

function renderChange(shape_type : string, boxStyles : React.CSSProperties){

    switch (shape_type){

        case 'square' :
            return <Box style={boxStyles}/> 

        case 'circle' :
            boxStyles.borderRadius = '100px'
            return  <Box style={boxStyles}/>;            

        case 'triangle' :
        return;            

        case 'rectangle' :
            boxStyles.width = '100px'          
            return  <Box style={boxStyles}/>;            

        case 'star' :
            return;            

        case 'oval' :
        return;            
            
        }

}

export default ShapeComponent;