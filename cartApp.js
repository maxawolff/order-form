'use strict';

function addOrderToPage(){
  if(localStorage.newOrderInfo){
    console.log('if statement executed');
    var currentOrder = JSON.parse(localStorage.newOrderInfo);
    var li = document.createElement('li');
    ul.appendChild(li);
    var index = imgNames.indexOf(currentOrder.product);
    var img = document.createElement('img');
    li.appendChild(img);
    img.setAttribute('src', pathOptions[index]);
  }
};
