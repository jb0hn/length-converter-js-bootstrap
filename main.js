document.addEventListener('DOMContentLoaded', function functionName() {
  // vars
  var output = document.getElementById('output');
  var input = document.getElementById('input');

  output.style.display = 'none';
  input.addEventListener('input', function(e) {
    // more vars
    let meters = e.target.value;
    let milimeters = document.getElementById('milimeters');
    let centimeters = document.getElementById('centimeters');
    let kilometers = document.getElementById('kilometers');
    // calculate
    milimeters.innerText = meters*1000;
    centimeters.innerText = meters*100;
    kilometers.innerText = meters/1000;
    // display output
    output.style.display = '';
  });
});
