import React from 'react';

const RatingForm = (props) => {

  if(props.submitted){
    return <span>Your rating: {props.ratingInput}<br/></span>
  }

  return <form onSubmit={props.handleRatingSubmit}>
    Your Rating:
    <select value={props.ratingInput} onChange={props.handleRatingChange}>
      <option value="5">5</option>
      <option value="4">4</option>
      <option value="3">3</option>
      <option value="2">2</option>
      <option value="1">1</option>
    </select>
    <input type="submit"/>
  </form>
}

export default RatingForm;
