'use strict';
console.log('the app js file is connected');


// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like this:


// Location	Min / Cust	Max / Cust	Avg Cookie / Sale

// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	2	16	4.6
//two things 1 allows us the right number of iterations in our for loop 
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



let storeOne = {
  locationName: 'Seattle',
  minCustomerPerHour: 23,
  maxCustomerPerHour: 65,
  avgCookiesPerSale: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function(){
    for(let i = 0; i < hours.length; i++){
      this.customersEachHour.push(random(this.minCustomerPerHour, this.maxCustomerPerHour));
    }
  },
  calcCookiesEachHour: function(){
    this.calcCustomersEachHour();
    for (let i = 0; i < hours.length; i++){
      let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies = this.totalDailyCookies + oneHour;
    }
  },
  render(){
    this.calcCookiesEachHour();
    const unorderedList = document.getElementById('seattle');
    for(let i = 0; i < hours.length; i++){
      let listItem = document.createElement('li');
      listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      unorderedList.appendChild(listItem);
    }//closes for loop
    let listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    unorderedList.appendChild(listItem);
  }

};//closes object literal storeOne








function random(minCust, maxCust){
  return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}


const allStores = [storeOne];

//IIFE
(function renderAllStores(){
  for(let i = 0; i < allStores.length; i++){
    allStores[i].render();
  }
})();
