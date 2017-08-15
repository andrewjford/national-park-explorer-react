import React from 'react';

const ConditionalImg = (props) => {
  if(props.park.images[1]){
    return <figure>
        <img src={props.park.images[1].url} alt={props.park.images[1].altText}/>
        <figcaption>{props.park.images[1].caption}</figcaption>
      </figure>
  }
  else {
    return null;
  }

}

export default ConditionalImg;
