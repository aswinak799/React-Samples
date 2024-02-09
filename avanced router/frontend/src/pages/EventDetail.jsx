import React, { Suspense } from 'react';
import { Await, defer, json, redirect, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem'
import EventsList from '../components/EventsList';

const EventDetailPage = () => {
    const { event, events} = useRouteLoaderData('event-detail');
    return (
      <>
      <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...!</p>}>
        <Await resolve={event}>
          { (loadedEvent) => <EventItem event={loadedEvent} /> }
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...!</p>}>
        <Await resolve={events}>
            { (loadedEvents) => <EventsList events={loadedEvents} /> }
        </Await>
      </Suspense>
      </>
    );
}

export default EventDetailPage;


async function loadEvent(id) {
    const response = await fetch('http://localhost:8080/events/' + id)
    const resData = await response.json();
    if (!response.ok) {
        throw json({message: 'Could not fetch details for selected event!'}, {status: 500})
    }else{
        return resData.event;
    }
}

async function loadEvents() {
    const response = await fetch("http://localhost:8080/events");
  
    if (!response.ok) {
      // return {isError : true, message: 'Could not fetch data!...'}
      // throw new Response(JSON.stringify({ message: 'could not fetch events!'}), {status:500,})
      throw json({ message: 'could not fetch events!'}, {status:500})
    } else {
      const resData = await response.json();
      return resData.events;
    }
  }

export  async function loader ({req, params}) {
    const id = params.id;
    return defer({
        events: loadEvents(),
        event: loadEvent(id),
    })
    
}

export async function action ({params, request}) {
    const id = params.id;
    const response = await fetch('http://localhost:8080/events/' + id, {
        method: 'delete'
    });
    if (!response.ok) {
        throw json(
            {
                message: 'Could not fetch details for selected event!'
            }, 
            {
                status: 500
            });
    }
    return redirect('/events')
}
