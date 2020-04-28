// Write your solution in this file!
const driver = Object.assign({})

function updateDriverWithKeyAndValue(obj, key, value) {
    let newDriver = {...obj};
    newDriver[key] = value;
    return driver, newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(obj, key) {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}