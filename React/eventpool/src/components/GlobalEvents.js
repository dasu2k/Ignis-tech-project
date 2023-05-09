import React from 'react'

import './GlobalEvents.css'


class GlobalEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      events: []
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            events: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, events } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {events.map(event => (
            <div>
              <br></br>
              <div className="event-card">
                  <div className="event-image">
                      <img src={event.image} alt="Event Image"/>
                      
                  </div>
                <div className="event-details">
                  <h2 className="event-title">{event.event_name}</h2>
                  <br></br>
                  <h4>Description :</h4>
                  <p className="event-description">{event.data}</p>
                  <h4>Time :</h4>
                  <p className="event-date">{event.time}</p>
                  <br></br>
                  <h4>Location :</h4>
                  <p className="event-location">{event.location}</p>    
                  <button className="heart-button">♥</button>
                </div>
              </div>
              <br></br>
              </div>
          ))}
          </div>
        
        
      );
    }
  }
}

export default GlobalEvent;