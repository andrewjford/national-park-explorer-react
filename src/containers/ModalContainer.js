import React from 'react';
import { connect } from 'react-redux';

import Login from '../components/Login';

class ModalContainer extends React.Component {
  render() {
    const loginModal = () => {
      if(this.props.session.loginOpen){
        this.props.disableMap();
        return <Login />
      }
      else {
        this.props.enableMap();
        return null;
      }
    }
    
    return <div>
      {loginModal}
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    session: state.session
  }
}

export default connect(mapStateToProps)(ModalContainer);
