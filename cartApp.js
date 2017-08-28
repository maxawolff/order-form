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

function addOrderToPage(){
  if(localStorage.getItem('newOrder')){
    var currentOrder = JSON.parse(localStorage.getItem('newOrder'));
    for(var i = 0; i < currentOrder.length; i ++){
      var li = document.createElement('li');
      li.setAttribute('class', currentOrder[i].product);
      li.innerHTML = ('You have ordered ' + currentOrder[i].quantity + ' ' + currentOrder[i].product + 's');
      ul.appendChild(li);
      var index = imgNames.indexOf(currentOrder[i].product);
      var img = document.createElement('img');
      li.appendChild(img);
      img.setAttribute('src', pathOptions[index]);
      var del = document.createElement('button');
      del.innerHTML = 'delete item from cart';
      del.addEventListener('click', deleteButton);
      li.appendChild(del);
    }
  }
}

function deleteButton(event){
  console.log(this.elements);
  //trying to access click event and then delete the list item that is associtated with that event, stumped for now
}

addOrderToPage();
