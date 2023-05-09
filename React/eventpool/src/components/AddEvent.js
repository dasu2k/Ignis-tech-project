import React, { useState } from 'react';
import axios from 'axios';
import './AddEvent.css'

function CreateEvent() {
  const [name, setName] = useState('');
  const [data, setData] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/createEvent', { name, data, time,location , image })
      .then(response => {
        console.log('Event created:', response.data);
      })
      .catch(error => {
        console.error('Error creating Event:', error);
      });
  }

  return (
    
    <div class="wrapper">
    <div class="form-header">Add Event<i class="fa fa-times close"></i></div>
    <form onSubmit={handleSubmit}>
      <div class="form-grp">
        <label>Event Name</label>
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
      </div>
      <div class="form-grp">
        <label>Data</label>
        <input type="text" value={data} onChange={event => setData(event.target.value)} />
      </div>
      <div class="form-grp">
        <label>Time</label>
        <input type="datetime-local" value={time} onChange={event => setTime(event.target.value)} />
      </div>
      <div class="form-grp">
        <label>Location</label>
        <input type="text" value={location} onChange={event => setLocation(event.target.value)} />
      </div>
      <div class="form-grp">
        <label>Image</label>
        <input type="text" value={image} onChange={event => setImage(event.target.value)} />
      </div>
      <div class="form-grp">
        <input type="submit" value="Create Event"/>
      </div>
    </form>
  </div>

  );
}

export default CreateEvent;