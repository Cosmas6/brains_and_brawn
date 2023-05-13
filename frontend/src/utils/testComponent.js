import React, { useEffect, useState } from "react";
import fetchFromStrapi from "./fetchFromStrapi";

const TestComponent = ({ events }) => {
  return (
    <div>
      <h1>Test Page</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const data = await fetchFromStrapi("/api/events?populate=*");

  // Transform the data
  const events = data.map((event) => ({
    id: event.id,
    title: event.attributes.Name,
    description: event.attributes.Description,
    date: event.attributes.Date,
    imgSrc: `http://localhost:1337${event.attributes.Image.data.attributes.url}`,
  }));

  return { props: { events } };
}

export default TestComponent;
