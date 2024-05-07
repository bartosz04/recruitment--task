import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, List, ListItem, ListItemText, Button } from '@material-ui/core';
import EventDetailsPage from './EventDetailsPage'; // Załóżmy, że jest to nazwa pliku z wyświetlaniem pojedynczego wydarzenia
import AddEventForm from './AddEventForm'; // Załóżmy, że istnieje komponent AddEventForm

const EventListPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Pobieranie danych wydarzeń za pomocą endpointu GET /events
    fetch('/events') // Symulacja wykonania REST'a - zapytanie o dane wydarzeń
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <Container>
      <h1>Lista wydarzeń</h1>
      <List>
        {events.map(event => (
          <ListItem key={event.id}>
            <ListItemText primary={event.name} secondary={event.date} />
          </ListItem>
        ))}
      </List>
      <Button component={Link} to="/add-event" variant="contained" color="primary">
        Dodaj wydarzenie
      </Button>
    </Container>
  );
};

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={EventListPage} />
      <Route path="/event/:eventId" component={EventDetailsPage} />
      <Route path="/add-event" component={AddEventForm} />
    </Router>
  );
};

export default App;
