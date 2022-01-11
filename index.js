//1 
function findMatching(drivers, string) {
    return drivers.filter(function(driver) { return driver.toLowerCase() === string.toLowerCase()}) 
}

//2 
function fuzzyMatch(drivers, string) {
    return drivers.filter(function(driver) { return driver.startsWith(string)}) 
}

//3 
function matchName(drivers, string) {
    return drivers.filter(function(driver) { return driver.name === string}) 
}