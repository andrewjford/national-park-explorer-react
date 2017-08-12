import React from 'react';
import PropTypes from 'prop-types';

function contextWrapper(WrappedComponent, context){

  class ContextProvider extends React.Component {
    getChildContext() {
      return context;
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  ContextProvider.childContextTypes = {};
  Object.keys(context).forEach(key => {
    ContextProvider.childContextTypes[key] = PropTypes.any.isRequired;
  });

  return ContextProvider;
}

export default contextWrapper;
