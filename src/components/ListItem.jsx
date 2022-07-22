import React from 'react';

const ListItem = ({className, title}) => {
    return (
        <li class={className}>{title}</li> 
    );
}

export default ListItem;