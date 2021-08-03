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



    // let storeOne = {
    //   //set up of keys and values given to us.
    //   locationName: 'Seattle',
    //   minCustomerPerHour: 23,
    //   maxCustomerPerHour: 65,
    //   avgCookiesPerSale: 6.3,
    //   //needed these to store information 
    //   customersEachHour: [],
    //   cookiesEachHour: [],
    //   totalDailyCookies: 0,
    //   //calculate customers to store in an array
    //   calcCustomersEachHour: function(){
    //     for(let i = 0; i < hours.length; i++){
    //       this.customersEachHour.push(random(this.minCustomerPerHour, this.maxCustomerPerHour));
    //     }
    //   },
    //   //calculate our cookies and call the customer each hour function
    //   calcCookiesEachHour: function(){
    //     this.calcCustomersEachHour();
    //     for (let i = 0; i < hours.length; i++){
    //       let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
    //       this.cookiesEachHour.push(oneHour);
    //       this.totalDailyCookies = this.totalDailyCookies + oneHour;
    //     }
    //   },
    //   //we have the render function that calls the calc cookie function which calls the calc customers function
    //   render(){
    //     this.calcCookiesEachHour();
    //     const unorderedList = document.getElementById('seattle');
    //     for(let i = 0; i < hours.length; i++){
    //       //here we get cookies each hour
    //       let listItem = document.createElement('li');
    //       listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
    //       //they go to the page
    //       unorderedList.appendChild(listItem);
    //     }//closes for loop
    //     //lastly we get total cookies, base on calcs happening above.
    //     let listItem = document.createElement('li');
    //     listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    //     unorderedList.appendChild(listItem);
    //   }
    // };//closes object literal storeOne


    // let storeTwo =  {
    //   locationName: 'Tokyo',
    //   minCustomerPerHour: 3,
    //   maxCustomerPerHour: 24,
    //   avgCookiesPerSale: 1.2, 
    //   customersEachHour: [],
    //   cookiesEachHour: [],
    //   totalDailyCookies: 0,

    //   calcCustomersEachHour: function(){
    //     for(let i = 0; i < hours.length; i++){
    //       this.customersEachHour.push(random(this.minCustomerPerHour, this.maxCustomerPerHour));
    //     }
    //   },
      
    //   calcCookiesEachHour: function(){
    //     this.calcCustomersEachHour();
    //     for (let i = 0; i < hours.length; i++){
    //       let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
    //       this.cookiesEachHour.push(oneHour);
    //       this.totalDailyCookies = this.totalDailyCookies + oneHour;
    //     }
    //   },
      
    //   render(){
    //     this.calcCookiesEachHour();
    //     const unorderedList = document.getElementById('Tokyo');
    //     for(let i = 0; i < hours.length; i++){
        
    //       let listItem = document.createElement('li');
    //       listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
          
    //       unorderedList.appendChild(listItem);
    //     }
        
    //     let listItem = document.createElement('li');
    //     listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    //     unorderedList.appendChild(listItem);
    //   }
    // };









    // let storeThree = {
    //   locationName: 'Dubai',
    //   minCustomerPerHour: 11,
    //   maxCustomerPerHour: 38,
    //   avgCookiesPerSale: 3.7, 
    //   customersEachHour: [],
    //   cookiesEachHour: [],
    //   totalDailyCookies: 0,

    //   calcCustomersEachHour: function(){
    //     for(let i = 0; i < hours.length; i++){
    //       this.customersEachHour.push(random(this.minCustomerPerHour, this.maxCustomerPerHour));
    //     }
    //   },
      
    //   calcCookiesEachHour: function(){
    //     this.calcCustomersEachHour();
    //     for (let i = 0; i < hours.length; i++){
    //       let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
    //       this.cookiesEachHour.push(oneHour);
    //       this.totalDailyCookies = this.totalDailyCookies + oneHour;
    //     }
    //   },
      
    //   render(){
    //     this.calcCookiesEachHour();
    //     const unorderedList = document.getElementById('Dubai');
    //     for(let i = 0; i < hours.length; i++){
        
    //       let listItem = document.createElement('li');
    //       listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
          
    //       unorderedList.appendChild(listItem);
    //     }
        
    //     let listItem = document.createElement('li');
    //     listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    //     unorderedList.appendChild(listItem);
    //   }
    // };




    // let storeFour = {
    //   locationName: 'Paris',
    //   minCustomerPerHour: 20,
    //   maxCustomerPerHour: 38,
    //   avgCookiesPerSale: 2.3, 
    //   customersEachHour: [],
    //   cookiesEachHour: [],
    //   totalDailyCookies: 0,

    //   calcCustomersEachHour: function(){
    //     for(let i = 0; i < hours.length; i++){
    //       this.customersEachHour.push(random(this.minCustomerPerHour, this.maxCustomerPerHour));
    //     }
    //   },
      
    //   calcCookiesEachHour: function(){
    //     this.calcCustomersEachHour();
    //     for (let i = 0; i < hours.length; i++){
    //       let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
    //       this.cookiesEachHour.push(oneHour);
    //       this.totalDailyCookies = this.totalDailyCookies + oneHour;
    //     }
    //   },
      
    //   render(){
    //     this.calcCookiesEachHour();
    //     const unorderedList = document.getElementById('Paris');
    //     for(let i = 0; i < hours.length; i++){
        
    //       let listItem = document.createElement('li');
    //       listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
          
    //       unorderedList.appendChild(listItem);
    //     }
        
    //     let listItem = document.createElement('li');
    //     listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    //     unorderedList.appendChild(listItem);
    //   }
    // };



    // let storeFive = {
    //   locationName: 'Lima',
    //   minCustomerPerHour: 2,
    //   maxCustomerPerHour: 16,
    //   avgCookiesPerSale: 4.6, 
    //   customersEachHour: [],
    //   cookiesEachHour: [],
    //   totalDailyCookies: 0,

    //   calcCustomersEachHour: function(){
    //     for(let i = 0; i < hours.length; i++){
    //       this.customersEachHour.push(random(this.minCustomerPerHour, this.maxCustomerPerHour));
    //     }
    //   },
      
    //   calcCookiesEachHour: function(){
    //     this.calcCustomersEachHour();
    //     for (let i = 0; i < hours.length; i++){
    //       let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
    //       this.cookiesEachHour.push(oneHour);
    //       this.totalDailyCookies = this.totalDailyCookies + oneHour;
    //     }
    //   },
      
    //   render(){
    //     this.calcCookiesEachHour();
    //     const unorderedList = document.getElementById('Lima');
    //     for(let i = 0; i < hours.length; i++){
        
    //       let listItem = document.createElement('li');
    //       listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
          
    //       unorderedList.appendChild(listItem);
    //     }
        
    //     let listItem = document.createElement('li');
    //     listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    //     unorderedList.appendChild(listItem);
    //   }
    // };



function Info(locationName, minCustomerPerHour, maxCustomerPerHour, avgCookiesPerSale){
  this.locationName = locationName;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
};

Info.prototype.setcustomersEachHour = function(){
  this.customers = randomCustomers(23, 65) + ' customers';
}










let storeOne = new Info("Seattle", 23, 65, 6.3);
console.log(storeOne);

//runs our random number in our objects
function random(minCust, maxCust){
  return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}


// const allStores = [storeOne, storeTwo, storeThree, storeFour, storeFive];

//IIFE
// (function renderAllStores(){
//   for(let i = 0; i < allStores.length; i++){
//     allStores[i].render();
//   }
// })();
