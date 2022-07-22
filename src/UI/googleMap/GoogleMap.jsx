import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function GoogleMap(){
  const defaultProps = {
    center: {
      lat: 49.23454298845354,
      lng: 28.475574228853883
    },
    zoom: 18
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={49.23454298845354}
          lng={28.475574228853883}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
// export default googleMap;49.23454298845354, 28.475574228853883