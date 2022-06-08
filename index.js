// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
//const  returnFirstTwoDrivers(drivers){
   //const firstTwo = drivers.slice(0,2)
    //return console.log(firstTwo)
//}
const  returnFirstTwoDrivers = (drivers) => (drivers.slice(0,2))
const  returnLastTwoDrivers = (drivers) => (drivers.slice(-2))
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier= function (fareMultiplier) {
    return function (fare) {
        return fareMultiplier * fare
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function name(drivers, arrayOfDrivers) {
    return arrayOfDrivers(drivers)
}
    

      
