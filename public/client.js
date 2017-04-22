// get document ready
$(document).ready(onReady);

function onReady (){
  console.log('testing jq'); //testing jquery

  //event listener
  $('#add-button').on('click', addButton);
  $('#sub-button').on('click', subButton);
  $('#mult-button').on('click', multButton);
  $('#div-button').on('click', divButton);
}

function addButton(){
  console.log('add button click');
}

function subButton(){
  console.log('sub button click');
}

function multButton(){
  console.log('mult button click');
}

function divButton(){
  console.log('div button click');
}
