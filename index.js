// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(arr){
 const newArray = [...arr]
 return newArray.slice(0,2) 
}

function returnLastTwoDrivers(arr){
  const newArray = [...arr]
  return newArray.slice(-2) 
 }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num1){
  return function(num2){
    return num1*num2
  }
}

function fareDoubler(fare){
  return fare*2
}

function fareTripler(fare){
  return fare*3
}

function selectDifferentDrivers(arrayOfDrivers, func){
  return func(arrayOfDrivers)
}
