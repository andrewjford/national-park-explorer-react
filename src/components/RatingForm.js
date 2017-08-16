import React from 'react';

const RatingForm = (props) => {

  if(props.submitted){
    return <span>Your rating: {props.ratingInput}</span>
  }

  return <form onSubmit={props.handleRatingSubmit}>
    <input type="number"
      value={props.ratingInput}
      onChange={props.handleRatingChange}/>
    <input type="submit"/>
  </form>
}

export default RatingForm;
