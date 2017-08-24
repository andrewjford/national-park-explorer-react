import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const RatingForm = (props) => {

  if(props.submitted){
    return <span>Your rating:
      <div style={{lineHeight: "60%", display: "inline-block"}}>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={props.ratingInput}/>
      </div>
      <br/>
    </span>
  }

  return <form className="star-form" onSubmit={props.handleRatingSubmit}>
    Your Rating:
    <div style={{lineHeight: "60%", display: "inline-block"}}>
      <StarRatingComponent
        name="rate1"
        starCount={5}
        value={props.ratingInput}
        onStarClick={props.handleRatingChange}/>
    </div>
    <br/>
    <input type="submit"/>
  </form>
}

export default RatingForm;
