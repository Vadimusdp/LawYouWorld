import React from 'react';
import classes from './MyInput.module.css'

const MyTextArea = React.forwardRef( (props, ref) => {
    return (
        <textarea rows="20" ref={ref} className={classes.myInput} {...props}/>
    );
});

export default MyTextArea;