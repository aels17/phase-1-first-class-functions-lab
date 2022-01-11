//const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(drivers) {

return [...drivers].splice(0,2);
}

const returnLastTwoDrivers = function(drivers) {

    return [...drivers].splice(2,2);
    }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare, multiplier = 5) {
return function fareQuintupler() {
 return (fare * multiplier);
}
}

const fareDoubler = function(fare) {
    createFareMultiplier(fare, 2);
    return (fare * 2);
}

const fareTripler = function(fare) {
    createFareMultiplier(fare, 3);
    return (fare * 3);
}

function selectDifferentDrivers(drivers, func) {

console.log("DRIVERS", drivers)
console.log("FUNC", func);
  return func(drivers)


//if (selection === returnFirstTwoDrivers){
//drivers = ['Antonia', 'Nuru']
//return drivers
//}
//else
//drivers = ['Amari', 'Mo']
//return drivers
//}
}