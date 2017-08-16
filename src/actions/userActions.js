export function changeRatingInput(park, newRating) {
  return {
    type: 'CHANGE_RATING_INPUT',
    payload: {park: park, rating: newRating}
  }
}
