import React from 'react';

const Loading = (props) => {

  const Spinner = require('react-spinkit');

  if(!props.loaded){
    return (
      <div style={{position:'absolute'}} className="loading">
        <Spinner name='line-spin-fade-loader' color='green' />
      </div>
    )
  }
  else {
    return null;
  }
}

export default Loading;
