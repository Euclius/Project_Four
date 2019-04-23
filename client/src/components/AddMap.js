import React, { Component } from 'react';
import { render } from 'react-dom';
import GoogleMap from './GoogleMap.js'
import Map from './Map.js'
import MapInfoWindow from './MapInfoWindow.js'

export default class AddMap extends Component {
    // constructor() {
    //     super();
    //     // this.createInfoWindow = this.createInfoWindow.bind(this)
    // }

    // createInfoWindow(e, map) {
    //     const infoWindow = new window.google.maps.InfoWindow({
    //         content: '<div id="infoWindow" />',
    //         position: { lat: e.latLng.lat(), lng: e.latLng.lng() }
    //     })
    //     infoWindow.addListener('domready', e => {
    //         render(<MapInfoWindow />, document.getElementById('infoWindow'))
    //     })
    //     infoWindow.open(map)
    // }

    render() {
        return (
            <GoogleMap
                id="myMap"
                options={{
                center: { lat: 33.7490, lng: -84.3880 },
                zoom: 8
                }}
                onMapLoad={map => {
                var graveYard = new window.google.maps.Marker({
                    position: { lat: 33.7401, lng: -84.3467 },
                    map: map,
                    title: 'Graveyard!'
                });
                }}
            />
        );
    }
}