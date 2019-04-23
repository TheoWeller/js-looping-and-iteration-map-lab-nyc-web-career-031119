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
  newArray.map(driver => {firstName: newArray[counter++][0], lastName: newArray[counter++][1]});
  return newArray;
}
