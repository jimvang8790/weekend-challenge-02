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
  // checking if add button works when click
  console.log('add button click');

  // get the user input and package into an object
  var objectToSend = {
    num1Enter: $('#num1').val(),
    num2Enter: $('#num2').val()
  }; // end of objectToSend
  console.log('sending ->', objectToSend);

  //sending object to server.js via ajax
  $.ajax({
    url: '/addNum',
    type: 'POST',
    data: objectToSend,
    success: function (response) {
      console.log('back with the server with:', response);
    }
  });

} // end of addButton function

function subButton(){
  // checking if sub button works when click
  console.log('sub button click');

} // end of subButton function

function multButton(){
  // checking if mult button works when click
  console.log('mult button click');

} // end of multButton function

function divButton(){
  // checking if div button works when click
  console.log('div button click');

} // end of divButton function
