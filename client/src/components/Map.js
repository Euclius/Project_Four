import React, { Component } from 'react';
import { render } from 'react-dom';
import GoogleMap from './GoogleMap.js'

export default class Map extends Component {
state = {

}

  render() {
    return (
      <Map
        id="myMap"
        options={{
          center: { lat: 33.7490, lng: 84.3880 },
          zoom: 8
        }}
        onMapLoad={map => {
          var marker = new window.google.maps.Marker({
            position: { lat: 33.7490, lng: 84.3880 },
            map: map,
            title: 'Hello Atlanta!'
          });
        }}
      />
    );
  }
}

render(<GoogleMap />, document.getElementById('root'));
