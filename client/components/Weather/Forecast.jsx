import React, { Component } from 'react';


const Forecast = ({ city, data }) => (
  <section>
    <h1>{ city }</h1>
    <p>{ data[0].conditions }</p>
  </section>
);

export default Forecast;