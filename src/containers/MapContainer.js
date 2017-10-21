import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { saveMapPosition } from '../actions/mapActions';
import { fetchVisitorCenters, clearVisitorCenters } from '../actions/npsActions';
import convertLatLng from '../helpers/mapHelpers';
import ParkMarker from '../containers/ParkMarker';
import CenterMarker from '../components/CenterMarker';
import Loading from '../components/Loading';
import ModalContainer from '../containers/ModalContainer';
import Login from '../components/Login';

class MapContainer extends React.Component {

  componentDidMount() {
    const leafletMap = this.leafletMap.leafletElement;

    leafletMap.on('zoomend', (event) => {
      if(event.target._zoom < 8){
        this.props.clearVisitorCenters();
      }
    })
  }

  componentWillUnmount() {
    const leafletMap = this.leafletMap.leafletElement;

    //save current position of map
    this.props.saveMapPosition(leafletMap.getCenter(), leafletMap.getZoom());
  }

  // to set this react routing context for leaflet elements to access
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  handleZoomClick = (event) => {
    event.preventDefault();
    this.props.fetchVisitorCenters(event.target.dataset.parkcode)

    let position = convertLatLng(event.target.dataset.position);
    this.leafletMap.leafletElement.flyTo(position, 9);
  }

  disableMap = () => {
    const leafletMap = this.leafletMap.leafletElement;

    leafletMap.dragging.disable();
    leafletMap.touchZoom.disable();
    leafletMap.doubleClickZoom.disable();
    leafletMap.scrollWheelZoom.disable();
    leafletMap.boxZoom.disable();
    leafletMap.keyboard.disable();
  }

  enableMap = () => {
    //re-enable if leafletMap is mounted
    if(this.leafletMap){
      const leafletMap = this.leafletMap.leafletElement;

      leafletMap.dragging.enable();
      leafletMap.touchZoom.enable();
      leafletMap.doubleClickZoom.enable();
      leafletMap.scrollWheelZoom.enable();
      leafletMap.boxZoom.enable();
      leafletMap.keyboard.enable();
    }
  }

  render() {
    const markers = this.props.parks.map((park, index) => {
      return <ParkMarker park={park}
        key={index}
        handleZoomClick={this.handleZoomClick}
        context={this.context} />
    })

    const centerMarkers = this.props.centers.map((center, index) => {
      return <CenterMarker center={center} key={index} />
    })

    // disable map if modals are open
    if((this.props.modal.loginOpen ||
      this.props.modal.signupOpen) && this.leafletMap){

      this.disableMap();
    }
    else {
      this.enableMap();
    }

    // const siteMarkers = this.props.sites.map((site, index) => {
    //   return <Marker position={site.latLong} key={index} />
    // })

    return <Map center={this.props.map.center}
        zoom={this.props.map.zoom}
        style={{height: (window.innerHeight - 72)}}
        //bind leaflet Map object to this.leafletMap reference
        ref={m => {this.leafletMap = m;}}>
        <TileLayer
          attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
          url="https://api.tiles.mapbox.com/v4/mapbox.outdoors/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYWpvZWZvcmQiLCJhIjoiY2o2NnhqM3F0MDB0bDJxbjY0dXAwYnRwaSJ9.KqwaHtjfnfhFjk1SQrd93Q"
        />
        {centerMarkers}
        {markers}
        <Loading loaded={this.props.parks.length > 0} />
        <ModalContainer />
      </Map>
  }
}

const mapStateToProps = (state) => {
  return {
    parks: state.nps.parks,
    map: state.map,
    centers: state.nps.centers,
    session: state.session,
    modal: state.modal,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    saveMapPosition: saveMapPosition,
    fetchVisitorCenters: fetchVisitorCenters,
    clearVisitorCenters: clearVisitorCenters,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
