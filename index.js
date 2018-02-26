// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  return Math.abs(location - 42)
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(starting, ending) {
  return Math.abs(starting - ending) * 264
}

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start,destination) < 400) {
    return 0
  }
}
