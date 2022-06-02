import React from 'react';

interface Props {
    children : string;
    width: string;
    height : string;
}

const LabelComponent : React.FC<Props> = ({
    children }) =>{

    return (
        <h3>{children}</h3>
    )
}

export default LabelComponent;