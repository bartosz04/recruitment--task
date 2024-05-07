import React from 'react';
import { Container, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';

const AddEventForm = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dodaj nowe wydarzenie
      </Typography>
      <Formik
        initialValues={{
          title: '',
          dateTime: '',
          description: '',
          image: '',
          eventType: '',
          phoneNumber: '',
          email: '',
          location: ''
        }}
        onSubmit={(values, { setSubmitting }) => {
          fetch('/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          })
          .then(response => {
            if (response.ok) {
              console.log('Dodano wydarzenie.');
            } else {
              console.error('Wystąpił błąd podczas dodawania wydarzenia.');
            }
          })
          .catch(error => console.error('Wystąpił błąd:', error))
          .finally(() => {
            setSubmitting(false);
          });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field as={TextField} type="text" name="title" label="Tytuł" fullWidth margin="normal" />

            <Field as={TextField} type="datetime-local" name="dateTime" label="Data i czas wydarzenia" fullWidth margin="normal" />

            <Field as={TextField} type="text" name="description" label="Opis" multiline rows={4} fullWidth margin="normal" />

            <Field as={TextField} type="text" name="image" label="Obrazek (URL)" fullWidth margin="normal" />

            <FormControl fullWidth margin="normal">
              <InputLabel>Rodzaj wydarzenia</InputLabel>
              <Field as={Select} name="eventType">
                <MenuItem value="Sport">Sport</MenuItem>
                <MenuItem value="Kultura">Kultura</MenuItem>
                <MenuItem value="Zdrowie">Zdrowie</MenuItem>
              </Field>
            </FormControl>

            <Field as={TextField} type="tel" name="phoneNumber" label="Nr telefonu kontaktowego" fullWidth margin="normal" />

            <Field as={TextField} type="email" name="email" label="Adres e-mail kontaktowy" fullWidth margin="normal" />

            <Field as={TextField} type="text" name="location" label="Miejsce wydarzenia" fullWidth margin="normal" />

            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
              Zapisz wydarzenie
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default AddEventForm;