// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  let newArray = [];
  drivers.map(driver => newArray.push(driver.toLowerCase()));
  return newArray;
};

function nameToAttributes(drivers) {
  let newArray = [];
  let counter = 0;
  drivers.map(driver => newArray.push(driver.split(" ")))
  newArray.map(driver => {firstName: driver[0], lastName: driver[1]});
  return newArray;
}
