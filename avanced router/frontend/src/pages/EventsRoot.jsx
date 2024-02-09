import React from 'react';
import EventsNavigation from '../components/EventsNavigation'
import { Outlet, useNavigation } from 'react-router-dom';
const EventsRoot = () => {
    const navigation = useNavigation()
    return (
        <>
        <EventsNavigation/>
        { navigation.state === 'loading' && <p>Looding</p> }
        <Outlet/>
            
        </>
    );
}

export default EventsRoot;
