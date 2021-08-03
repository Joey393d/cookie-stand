'use strict';
console.log('the app js file is connected');





// Location	Min / Cust	Max / Cust	Avg Cookie / Sale

// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	2	16	4.6
//two things 1 allows us the right number of iterations in our for loop 
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



    



function Info(locationName, minCustomerPerHour, maxCustomerPerHour, avgCookiesPerSale){
  this.locationName = locationName;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
};


Info.prototype.setcustomersEachHour = function(){
  this.customers = randomCustomers(23, 65) + ' customers';
}


function randomCustomers(min, max){
  return Math.floor(Math.random() * (maxCustomerPerHour - minCustomerPerHour + 1) + minCustomerPerHour);
}





let storeTable = document.getElementById('salesInfo');
let locationNameRow = document.createElement('tr');
let minRow = document.createElement('td');
minRow.textContent = this.minCustomerPerHour;

locationNameRow.appendChild(minRow);

let maxCustomerPerHour








let storeOne = new Info("Seattle", 23, 65, 6.3);

storeOne.setcustomersEachHour();
storeOne.randomCustomers();

console.log(storeOne);