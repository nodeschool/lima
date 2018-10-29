import React, { Component } from 'react';
import Section from './Section';
import Event from './Event';


// Fetch LimaJS events from meetup.com
const fetchEvents = () => new Promise((resolve, reject) => {
  const callbackId = `__callback_${Date.now()}`;
  window[callbackId] = resolve;
  const script = document.createElement('script');
  script.src = `https://api.meetup.com/LimaJS/events?callback=${callbackId}`;
  document.body.appendChild(script);
});


const styles = {
  root: {
    backgroundColor: '#59544C',
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '20px 0',
  },
};


class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLoaded: false,
      data: null,
      error: null,
    };
  }

  componentWillMount() {
    fetchEvents()
      .then(({ data }) => this.setState({
        hasLoaded: true,
        data: data.filter(item => /NodeSchool/.test(item.name)),
      }))
      .catch(err => this.setState({
        hasLoaded: true,
        error: err,
      }));
  }

  render() {
    if (!this.state.hasLoaded) {
      return (<div>Loading...</div>);
    }

    return (
      <Section title="Próximos talleres" style={styles.root}>
        <div style={styles.inner}>
          {this.state.error
            ? <div>{this.state.error.message}</div>
            : this.state.data.map(event => (
              <Event key={event.id} event={event} />
            ))
          }
        </div>
      </Section>
    );
  }
}


export default Events;
