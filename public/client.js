
// get document ready
$(document).ready(onReady);

function onReady (){
  console.log('testing jq'); //testing jquery

  // event listener
  $('.op-button').on('click', calulation);
  $('#clearButton').on('click', clearDiv);

} // end of onReady function

function calulation() {
  console.log('op-button click');
  var op = $(this).attr('id');
  var objectToSend = {
    x: $('#num1').val(),
    y: $('#num2').val(),
    type: op
  }; // end of objectToSend

  // POST to send to server via ajax
  $.ajax({
    url: '/calulations',
    type: 'POST',
    data: objectToSend,
    success: function(response){
      console.log('response back from the server', response);
    } // end of success
  }); // end of ajax

  inputTotal();
} // end of calulation function

function inputTotal() {

  $.ajax({
    url: '/total',
    type: 'GET',
    success: function(response){
      console.log(response.total);
      $('#total-div').empty();
      // $('#total-div').append(response.total);
      for (var i = 0; i < response.total.length; i++) {
        $( '#total-div' ).text(response.total[i]);

      } // end of for loop
    } // end of success
  }); // end of ajax
} // end of userTotal

function clearDiv() {
  console.log('clear button click');
  $( '#total-div' ).empty();
  $('.inputs').val('');
} // end of clearDiv function
