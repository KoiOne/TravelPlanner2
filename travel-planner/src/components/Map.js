import React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import {Row} from "antd";
const google = window.google;

function Map() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env["NEXT_PUBLIC_MAP_API_KEY"] // ,
    // ...otherOptions
    })
    if (loadError) {
        return <div>Map cannot be loaded right now, sorry.</div>
    }
    return MapView()

    }

function MapView() {

    const center = {lat : 40.7128, lng: -74.0060}
    return (
        <GoogleMap zoom = {10} center={center} mapContainerClassName="map-container"
        >
            <Marker position={center} />
        </GoogleMap>
    );

}

export default Map;