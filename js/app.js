'use strict';
console.log('the app js file is connected');





// Location	Min / Cust	Max / Cust	Avg Cookie / Sale

// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	2	16	4.6
//two things 1 allows us the right number of iterations in our for loop 
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const cookiesTotalHour = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

tableElement.document.getElementById('salesInfo');

function Shop(locationName, minimumCustomerPerHour, maximumCustomerPerHour, averageCookiesPerSale){
  this.locationName = locationName;
  this.minimumCustomerPerHour = minimumCustomerPerHour;
  this.maximumCustomerPerHour = maximumCustomerPerHour;
  this.averageCookiesPerSale = averageCookiesPerSale;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
  storeCreator.allStoresArray.push(this)
}


Shop.prototype.calcCustomersEveryHour = function(){
  for(let i = 0; i < hours.length; i++){
    this.customersEachHour.push(getRandomCustomers(this.minimumCustomerPerHour, this.maximumCustomerPerHour));
  }
};    

Shop.prototype.getCookies = function(){
  for(let i = 0; i < hours.length; i++){
    this.cookiesEachHour[i] = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerSale);
  }
};


function getRandomCustomers(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}



Shop.prototype.render = function(){
  let parentElement = document.getElementById('salesInfo');
  console.log(parentElement);
  let shopsRow = document.createElement('tr');
  parentElement.appendChild(shopsRow);


    let h2 = document.createElement('h2');
    h2.textContent = this.locationName;
    shopsRow.appendChild(h2);

    for (let i = 0; i < hours.length; i++){
      let cookiesForThisHour = this.cookiesEachHour[i];
      cookiesTotalHour[i] = cookiesForThisHour;
      this.totalDailyCookies += cookiesForThisHour;
      let cookieHourlyData = document.createElement('td');
      cookieHourlyData.textContent = cookiesForThisHour;
      shopsRow.appendChild(cookieHourlyData);

    }

    this.calcCustomersEveryHour();



    let cookieTotal = document.createElement('td');
  cookieTotal.textContent = this.totalDailyCookies;
  shopsRow.appendChild(cookieTotal);
};

storeCreator.allStoresArray = [];

let seattle = new Shop('Seattle', 23, 65, 6.3);
let tokyo = new Shop('Tokyo', 3, 24, 1.2);
let dubai = new Shop('Dubai', 11, 38, 3.7);
let paris = new Shop('Paris', 20, 38, 2.3);
let lima = new Shop('Lima', 2, 16, 4.6);

let cookieShop = [seattle, tokyo, dubai, paris, lima];


seattle.calcCustomersEveryHour();
seattle.getCookies();

tokyo.calcCustomersEveryHour();
tokyo.getCookies();

dubai.calcCustomersEveryHour();
dubai.getCookies();

paris.calcCustomersEveryHour();
paris.getCookies();

lima.calcCustomersEveryHour();
lima.getCookies();

for (let i = 0; i < storeCreator.allStoresArray.cookieShop.length; i++){
  console.log(salesInfo[i]);
  storeCreator.allStoresArray[i].cookieShop[i].render();
  makeFooterRow();
}


function makeHeaderRow(){
  const tableRow = document.createElement('tr');
  let tableHeaderElement = document.createElement('th');
  tableHeaderElement.textContent = 'Locations';
  tableRow.appendChild(tableHeaderElement);


  for(let i = 0; i < hours.length; i++){
    let tableHeaderElement = document.createElement('th')
    tableHeaderElement.textContent = hours[i];
    tableRow.appendChild(tableHeaderElement);
  }


  tableHeaderElement = document.createElement('th');
  tableHeaderElement.textContent = 'Location Totals';
  tableRow.appendChild(tableHeaderElement);
  tableElement.appendChild(tableRow);
}





//////////form//////////





//////////add an event listener//////////




