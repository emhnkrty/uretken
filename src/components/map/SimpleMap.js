import React from 'react';
import GoogleMapReact from 'google-map-react';

const SimpleMap = ({ lat, lng }) => {
  const defaultCenter = {
    lat: lat, 
    lng: lng
  };
  return (
    <>
  
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDL3dprjPS8NfDJV0dY1naM99Zt4h90qBA' }} // API anahtarınızı buraya ekleyin
          defaultCenter={defaultCenter}
          defaultZoom={15}
        >
          <img
            src="http://maps.google.com/mapfiles/ms/icons/red-dot.png"
            style={{ width: '30px', height: '30px', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
            lat={lat}
            lng={lng}
            alt="Custom Marker"
          />
        </GoogleMapReact>
      </div>

    </>
  );
}

export default SimpleMap;