'use strict';
var cartItems = 0;
var ul = document.getElementById('orders');

var imgNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var pathOptions = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.gif', 'img/wine-glass.jpg'];

function NewImg(imgName, path, timesClicked, timesShown) {
  this.imgName = imgName;
  this.path = path;
};

function createObjs() {
  for (var i = 0; i < imgNames.length; i++) {
    allObjects.push(new NewImg(imgNames[i], pathOptions[i]));
  }
};

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
}

var getForm = document.getElementsByTagName('button');

function makeOrder(event){
  var newOrderInfo = new OrderInfo();
  newOrderInfo.product = this.elements['Products'].value;
  newOrderInfo.quantity = this.elements['quantity'].value;
  newOrderInfo.firstName = this.elements['firstName'].value;
  newOrderInfo.lastName = this.elements['lastName'].value;
  newOrderInfo.phone = this.elements['phone'].value;
  newOrderInfo.street = this.elements['street'].value;
  newOrderInfo.city = this.elements['city'].value;
  newOrderInfo.state = this.elements['state'].value;
  newOrderInfo.zip = this.elements['zip'].value;
  newOrderInfo.credit = this.elements['credit'].value;

  localStorage.setItem('newOrderInfo', JSON.stringify(newOrderInfo));
}

function populateDropdown() {
  for (var i = 0; i < imgNames.length; i++) {
    var targetParent = document.getElementById('selections');
    var newOption = document.createElement('option');
    newOption.setAttribute = ('value', imgNames[i]);
    newOption.innerHTML = imgNames[i];
    targetParent.appendChild(newOption);
  }
};

function addOrderToPage(){
  if(localStorage.newOrderInfo){
    var currentOrder = JSON.parse(localStorage.newOrderInfo);
    var li = document.createElement('li');
    ul.appendChild(li);
    var index = imgNames.indexOf(currentOrder.product);
    var img = document.createElement('img');
    li.appendChild(img);
    img.setAttribute('src', pathOptions[index]);
  }
};
populateDropdown();

getForm.addEventListener('submit', makeOrder);
