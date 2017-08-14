export default function convertLatLng(commaString) {
  //convert lat_long string to array with just numbers
  const prePos = commaString.split(",")
  const position =[ Number(prePos[0].match(/-?[\d]+[.][\d]+/)[0]),
  Number(prePos[1].match(/-?[\d]+[.][\d]+/)[0]) ]
  return position;
}
