'use strict';

var itemsInCart = [];
var ul = document.getElementById('orders');

var imgNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var pathOptions = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.gif', 'img/wine-glass.jpg'];

function OrderInfo(product, quantity, firstName, lastName, street, city, state, zip, phone, credit){
  this.product = product;
  this.quantity = quantity;
  this.firstName = firstName;
  this.lastName = lastName;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.phone = phone;
  this.credit = credit;
};

// function addOrderToPage(){
//   if(localStorage.newOrderInfo){
//     console.log('if statement executed');
//     var currentOrder = JSON.parse(localStorage.newOrderInfo);
//     var li = document.createElement('li');
//     ul.appendChild(li);
//     var index = imgNames.indexOf(currentOrder.product);
//     var img = document.createElement('img');
//     li.appendChild(img);
//     img.setAttribute('src', pathOptions[index]);
//   }
// };

function addOrderToPage(){
  if(localStorage.getItem('newOrder')){
    var currentOrder = JSON.parse(localStorage.getItem('newOrder'));
    itemsInCart.push(currentOrder);
    console.log(currentOrder);
    for(var i = 0; i < itemsInCart.length; i ++){
      var li = document.createElement('li');
      ul.appendChild(li);
      var index = imgNames.indexOf(currentOrder.product);
      var img = document.createElement('img');
      li.appendChild(img);
      img.setAttribute('src', pathOptions[index]);
    }
  }
}

addOrderToPage();
