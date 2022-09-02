import React from 'react';
import {Component} from "react";
import {MAP_API_KEY, center} from "../constants";
import {GoogleMap, InfoBox, LoadScript, useJsApiLoader} from '@react-google-maps/api';
import {Box, Flex} from '@chakra-ui/react';

function Map() {
    const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: MAP_API_KEY,
    libraries: ['places'],
    })

    return (
        <Flex
            position='relative'
            flexDirection='column'
            alignItems='center'
            h='100vh'
            w='100vw'
        >
            <Box>
                {/*<GoogleMap>*/}
                {/*    center={center}*/}
                {/*    zoom={15}*/}
                {/*    mapContainerStyle={{ width: '100%', height: '100%' }}*/}
                {/*    options={{*/}
                {/*    zoomControl: false,*/}
                {/*    streetViewControl: false,*/}
                {/*    mapTypeControl: false,*/}
                {/*    fullscreenControl: false,*/}
                {/*}}*/}
                {/*</GoogleMap>*/}
            </Box>
        </Flex>
    )

}

export default Map;