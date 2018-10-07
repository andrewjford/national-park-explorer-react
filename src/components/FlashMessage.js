import React from 'react'

const FlashMessage = (props) => {
  return <div className="error-text">
    {props.session.message ? <span>{props.session.message}</span> : null}
  </div>
}

export default FlashMessage;
