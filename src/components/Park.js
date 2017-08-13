import React from 'react';

const Park = (props) => {
  return <div className="parkContainer">
    <h1>{props.park.fullName}</h1>
    <figure>
      <img src={props.park.images[0].url} alt={props.park.images[0].altText}/>
      <figcaption>{props.park.images[0].caption}</figcaption>
    </figure>

    <p>{props.park.description}</p>

    <figure>
      <img src={props.park.images[1].url} alt={props.park.images[1].altText}/>
      <figcaption>{props.park.images[1].caption}</figcaption>
    </figure>

    <p>{props.park.weatherInfo}</p>
    <span>Official Website: <a href={props.park.url}>{props.park.url}</a></span>
    <br/>
    <span>Directions: <a href={props.park.directionsUrl}>{props.park.directionsUrl}</a></span>
  </div>
}

export default Park;
