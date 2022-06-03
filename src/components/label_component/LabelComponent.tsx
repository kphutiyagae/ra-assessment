import React from 'react';

interface Props {
    children : string;
    width: string;
    height : string;
}

const LabelComponent : React.FC<Props> = ({
    children}) =>{

    return (
        <div className='outline outline-3 rounded-md outline-blue-500 w-auto h-auto'>
        <h3>{children}</h3>
        </div>
    )
}

export default LabelComponent;