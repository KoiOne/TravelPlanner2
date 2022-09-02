import React from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import {Row} from "antd";

function Map() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env["NEXT_PUBLIC_MAP_API_KEY "] // ,
    // ...otherOptions
    })
    if (loadError) {
        return <div>Map cannot be loaded right now, sorry.</div>
    }
    return MapView()
    }

function MapView() {
    return (    <GoogleMap
            zoom = {10}
            center={{lat : 40.7128, lng: -74.0060}}
            mapContainerClassName="map-container"
        ></GoogleMap>
    );

}

export default Map;