import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import { Wrapper, Container, MapWrap } from './Venue.styles';


const Venue = (props) => {
    const API_KEY = process.env.REACT_APP_API_KEY;

    const location = {
        lat: 26.00166,
        lng: -80.15049
    };

    const onLoad = marker => {
        console.log('marker: ', marker)
    }

    const containerStyle = {
        width: '100%',
        height: '100%'
    };

    return (
        <Wrapper>
            <Container>
                <h1>Casa <br /> Museo</h1>
                <br />
                <h3>2130 Rodman St. Hollywood, Fl 33020</h3>
                <br />
                <p> Independent art gallery where artists can gather, create, brainstorm, collaborate, and showcase their crafts and art pieces. The goal of Casa Museo is to expand the artistic scene in Hollywood.</p>
            </Container>
            <MapWrap>
                <LoadScript
                    googleMapsApiKey= {API_KEY} >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={location}
                        zoom={12}
                    >
                        <Marker
                            onLoad={onLoad}
                            position={location}
                            label="Case Museo"
                        />
                    </GoogleMap>
                </LoadScript>
            </MapWrap>
        </Wrapper>
    )
}

export default Venue;