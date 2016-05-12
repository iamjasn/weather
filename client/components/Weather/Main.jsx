import React, { Component } from 'react';
import Forecast from 'components/Weather/Forecast';

export default class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getInitialLocation = this.getInitialLocation.bind(this)
  }

  getInitialLocation() {
    fetch('http://api.wunderground.com/api/e825498793193407/geolookup/q/autoip.json')
    .then(response => response.json())
    .then(currLocation => this.setState({ city: currLocation.location.city }))
    .then(() => fetch('http://api.wunderground.com/api/e825498793193407/forecast/q/autoip.json'))
    .then(response => response.json())
    .then(forecasts => this.setState({ data: forecasts.forecast.simpleforecast.forecastday }));
  }

  componentDidMount() {
    this.getInitialLocation();
  }

  render() {
    if (!this.state.city) {
      return (
        <h1>Could not get location.</h1>
      );
    }

    return (
      <Forecast city={ this.state.city } data={ this.state.data } />
    );
  }
}