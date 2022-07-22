import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Image = ({
  src, alt, className, width, height, circle, ...attrs
}) => {
  
  if(!width) {width = 100}
  if(!height) {height = 100}
  if(!src) {
    src = 'https://via.placeholder.com/'+ width+'x'+height}
  
  const classes = classNames(className, { circle })
  return (
      <img 
        src={src}
        alt={alt}
        className={classes}
        // width={width}
        // height={height}
        {...attrs}/>  
    );
  }

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  circle: PropTypes.bool,
}

Image.defaultProps = {
  src: '',
  alt: 'image name',
  className: '',
  width: 100,
  height: 100,
  circle: false, 
}

export default Image;