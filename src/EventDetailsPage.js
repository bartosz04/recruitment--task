import React from 'react';
import { Container, Typography } from '@material-ui/core';

const EventDetailsPage = ({ match }) => {
  const { eventId } = match.params; // Pobierz id wydarzenia z parametrów URL
  const event = {
    id: eventId,
    name: "Nazwa wydarzenia",
    date: "Data wydarzenia",
    description: "Opis wydarzenia"
  };

  if (!event) {
    return (
      <Container>
        <Typography variant="h4">Ładowanie...</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4">{event.name}</Typography>
      <Typography variant="subtitle1">Data: {event.date}</Typography>
      <Typography variant="body1">{event.description}</Typography>
    </Container>
  );
};

export default EventDetailsPage;