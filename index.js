// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
    newObj[key] = value;
    return newObj;
}

updateDriverWithKeyAndValue(driver, key, value);

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

destructivelyUpdateDriverWithKeyAndValue(driver, key, value);

function deleteFromDriverByKey(obj, key) {
    const newObj = { ...obj };
    delete newObj[`${key}`];
    return newObj;
}

deleteFromDriverByKey(driver, key);

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj[`${key}`];
    return obj;
}

destructivelyDeleteFromDriverByKey(driver, key);