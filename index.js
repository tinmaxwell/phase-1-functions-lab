function distanceFromHqInBlocks(pickupLocation) {
    const hqStreetNumber = 42;
    const pickupStreetNumber = parseInt(pickupLocation);
    const distanceInBlocks = Math.abs(hqStreetNumber - pickupStreetNumber);
    return distanceInBlocks;
  }

function distanceFromHqInFeet(pickupLocation) {
    distanceFromHqInBlocks(pickupLocation);
    const distanceInFeet = (distanceFromHqInBlocks(pickupLocation) * 264);
    return distanceInFeet;
  }

function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(destination - start) * 264;
    return distance;
  }

  function calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400) {
        return 0;
      } else if (feet <= 2000) {
        return (feet - 400) * 0.02;
      } else if (feet <= 2500) {
        return 25;
      } else {
        return 'cannot travel that far';
      }
    }