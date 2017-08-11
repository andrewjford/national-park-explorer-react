export function saveMapPosition(center, zoom) {
  return {
    type: 'SAVE_MAP_POSITION',
    payload: {
      center: center,
      zoom: zoom
    }
  }
}
