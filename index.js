// Write your solution in this file!
let driver = {}



function updateDriverWithKeyAndValue(driver, key, value){

  const newDriver = {... driver};

  newDriver.address = "11 Broadway";

  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){

  driver['name'] = 'Sam';
  driver['address'] = "12 Broadway";

  return driver
}

function deleteFromDriverByKey(driver, key){

  const newObj = Object.assign({}, driver)

  delete newObj['name']

  return driver
}
