// Write your solution in this file!
    let driver = {};
    function updateDriverWithKeyAndValue(driver,key,value){
    return Object.assign({}, driver, { [key]: value });
   
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){

    driver[key] = value;
   return driver
}

function deleteFromDriverByKey(driver, key){
     let copyDriver = Object.assign({},driver);
     delete copyDriver[key];
     
     return copyDriver;
}
function destructivelyDeleteFromDriverByKey(driver, key){

    let copyDriver = Object.assign({},driver);
    delete driver[key];
   return  driver;
    

}