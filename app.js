'use strict';
var cartItems = 0;

var ul = document.getElementById('orders');

var imgNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

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

var getForm = document.getElementById('theForm');

function populateDropdown() {
  for (var i = 0; i < imgNames.length; i++) {
    var targetParent = document.getElementsByTagName('select')[0];

    var newOption = document.createElement('option');
    newOption.setAttribute = ('value', imgNames[i]);
    newOption.innerHTML = imgNames[i];
    targetParent.appendChild(newOption);
  }
};

populateDropdown();

function harvestAndPost(event){

  event.preventDefault();
  var newOrderInfo = new OrderInfo();
  newOrderInfo.product = this.elements['products'].value;
  newOrderInfo.quantity = this.elements['quantity'].value;
  newOrderInfo.firstName = this.elements['firstName'].value;
  newOrderInfo.lastName = this.elements['lastName'].value;
  newOrderInfo.phone = this.elements['phone'].value;
  newOrderInfo.street = this.elements['street'].value;
  newOrderInfo.city = this.elements['city'].value;
  newOrderInfo.state = this.elements['state'].value;
  newOrderInfo.zip = this.elements['zip'].value;
  newOrderInfo.credit = this.elements['credit'].value;

  var newOrder = [];
  if(localStorage.getItem('newOrder')){
    var currentOrder = JSON.parse(localStorage.getItem('newOrder'));
    for(var i = 0; i < currentOrder.length; i ++){
      newOrder.push(currentOrder[i]);
    }
  }
  newOrder.push(newOrderInfo);
  localStorage.setItem('newOrder', JSON.stringify(newOrder));

}

getForm.addEventListener('submit', harvestAndPost);
