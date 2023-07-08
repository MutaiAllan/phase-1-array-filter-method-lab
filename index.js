// Code your solution here
function findMatching(drivers, string){
    const driverName = string.toLowerCase();
    const matching = drivers.filter(driver => driver.toLowerCase().includes(driverName));
    return matching;
}

function fuzzyMatch(drivers, string){
    const letters = string.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters));
}

function matchName(drivers, string){
    return drivers.filter(driver => driver.name === string);
}