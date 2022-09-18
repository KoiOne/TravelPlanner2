import React, {useRef, useState} from 'react'
import {Autocomplete, DirectionsRenderer, GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api'
import { FaLocationArrow, FaTimes } from 'react-icons/fa'
import {Button, ButtonGroup, Flex, HStack, IconButton, Input, Text, Box} from "@chakra-ui/react";
import {GOOGLE_MAP_API} from "../constants";

// Time square
const center = { lat: 40.758896, lng: -73.985130 };

function Map() {
    //console.log(process.env)
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: GOOGLE_MAP_API,
        libraries: ['places'],
    })

    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef(null)
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destinationRef = useRef(null)

    if (!isLoaded) {
        return <div>Map cannot be loaded right now, sorry.</div>
    }

    async function calculateRoute() {
        const waypts = [];
        waypts.push({
            location: "Central Park",
        })
        const google=window.google;
        if (originRef.current.value === '' || destinationRef.current.value === '') {
            return
        }

        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
            origin: originRef.current.value,
            destination: destinationRef.current.value,
            waypoints: waypts,
            travelMode: google.maps.TravelMode.DRIVING,
        })
        // console.log(results)
        setDirectionsResponse(results)
        // console.log(directionsResponse)
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
    }

    function clearRoute() {
        setDirectionsResponse(null)
        setDistance('')
        setDuration('')
        originRef.current.value = ''
        destinationRef.current.value = ''
    }

    //return MapView();
    return (
        <Flex
            position='relative'
            flexDirection='column'
            alignItems='center'
            h='100vh'
            w='100vw'
        >
            <Box position='relative' zIndex='1' left={0} top={0} h='100%' w='100%'>
                {/* Google Map Box */}
                <GoogleMap
                    id={'map'}
                    center={center}
                    zoom={15}
                    mapContainerStyle={{ width: '100%', height: '90vh' }}
                    options={{
                        zoomControl: false,
                        streetViewControl: false,
                        mapTypeControl: false,
                        fullscreenControl: false,
                    }}
                    onLoad={map => setMap(map)}
                >
                    {/*<Marker position={center} />*/}
                    {directionsResponse && (
                        <DirectionsRenderer directions={directionsResponse} />
                    )}
                </GoogleMap>
            </Box>
            <Box
                p={4}
                borderRadius='lg'
                m={4}
                bgColor='white'
                shadow='base'
                minW='container.md'
                zIndex='1'
            >
                <HStack spacing={2} justifyContent='space-between'>
                    <Box flexGrow={1}>
                        <Autocomplete>
                            <Input type='text' placeholder='Origin' ref={originRef} />
                        </Autocomplete>
                    </Box>
                    <Box flexGrow={1}>
                        <Autocomplete>
                            <Input
                                type='text'
                                placeholder='Destination'
                                ref={destinationRef}
                            />
                        </Autocomplete>
                    </Box>

                    <ButtonGroup>
                        <Button colorScheme='pink' type='submit' onClick={calculateRoute}>
                            Calculate Route
                        </Button>
                        <IconButton
                            aria-label='center back'
                            icon={<FaTimes />}
                            onClick={clearRoute}
                        />
                    </ButtonGroup>
                </HStack>
                <HStack spacing={4} mt={4} justifyContent='space-between'>
                    <Text>Distance: {distance} </Text>
                    <Text>Duration: {duration} </Text>

                </HStack>
            </Box>
        </Flex>
    )
}

// function MapView() {
//     return (    <GoogleMap
//     zoom = {10}
//     center={{lat: 40.7128, lng: -74.0060}}
//     mapContainerClassName="map-container"
//     />
//     );
//
// }

export default Map;