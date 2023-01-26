// Fade Out function
function fadeOut(ms, el) {
  var opacity = 1,
    interval = 50,
    gap = interval / ms;

  function func() {
    opacity -= gap;
    el.style.opacity = opacity;

    if (opacity <= 0) {
      window.clearInterval(fading);
      el.style.display = 'none';
    }
  }
  var fading = window.setInterval(func, interval);
}

function showButton() {
  var btns = document.getElementsByClassName("modal-btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].style.visibility = "visible";
  }
}

function hideButton() {
  var btns = document.getElementsByClassName("modal-btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].style.visibility = "hidden";
  }
}

// Define transition function
function loaded() {

  // Define our variables
  var docBody = document.body,
    anchors = document.getElementsByTagName('a');

  // Add loaded class to body
  docBody.className += 'loaded';

  // For each link
  for (var i = 0; i < anchors.length; i++) {

    // Click function
    anchors[i].onclick = function(e) {

      // Cache our anchor
      var el = this;

      // Stop default action
      e.preventDefault();

      // Fade out body
      fadeOut(100, docBody);

      // Change page after fade out
      setTimeout(function() {
        location = el.href
      }, 100);
    }
  }

}

// Fire transition function
window.onload = loaded;


function clickQ1() {

  var rates = document.getElementsByClassName('Q1');
  var radio_value;

  for (var i = 0; i < rates.length; i++) {
    if (rates[i].checked) {
      radio_value = rates[i].value.toString();
      console.log(radio_value);
      if (radio_value == '1-A') {
        hideButton();
        setTimeout('showButton()', 5000);

        $('#1-A').data('bs.modal', null);
        $('#1-A').modal({
          show: true,
          backdrop: 'static',
          keyboard: false
        });
      } else if (radio_value == '1-B') {
        hideButton();
        setTimeout('showButton()', 5000);

        $('#1-B').data('bs.modal', null);
        $('#1-B').modal({
          show: true,
          backdrop: 'static',
          keyboard: false
        });
      }

    }
  }

}


function clickQ2() {

  var rates = document.getElementsByClassName('Q2');
  var radio_value;

  for (var i = 0; i < rates.length; i++) {
    if (rates[i].checked) {
      radio_value = rates[i].value.toString();
      console.log(radio_value);
      if (radio_value == '2-A') {
        hideButton();
        setTimeout('showButton()', 5000);

        $('#2-A').data('bs.modal', null);
        $('#2-A').modal({
          show: true,
          backdrop: 'static',
          keyboard: false
        });
      } else if (radio_value == '2-B') {
        hideButton();
        setTimeout('showButton()', 5000);

        $('#2-B').data('bs.modal', null);
        $('#2-B').modal({
          show: true,
          backdrop: 'static',
          keyboard: false
        });
      }

    }
  }

}

function clickQ3() {

  var rates = document.getElementsByClassName('Q3');
  var radio_value;

  for (var i = 0; i < rates.length; i++) {
    if (rates[i].checked) {
      radio_value = rates[i].value.toString();
      console.log(radio_value);
      if (radio_value == '3-A') {
        hideButton();
        setTimeout('showButton()', 5000);

        $('#3-A').data('bs.modal', null);
        $('#3-A').modal({
          show: true,
          backdrop: 'static',
          keyboard: false
        });
      } else if (radio_value == '3-B') {
        hideButton();
        setTimeout('showButton()', 5000);

        $('#3-B').data('bs.modal', null);
        $('#3-B').modal({
          show: true,
          backdrop: 'static',
          keyboard: false
        });
      }

    }
  }

}

function clickQ4A3() {

  var rates = document.getElementsByClassName('Q4A-3');
  var radio_value;

  for (var i = 0; i < rates.length; i++) {
    if (rates[i].checked) {
      radio_value = rates[i].value.toString();
      console.log(radio_value);
      if (radio_value == '4-B') {
        hideButton();
        setTimeout('showButton()', 5000);

        $('#4-B').data('bs.modal', null);
        $('#4-B').modal({
          show: true,
          backdrop: 'static',
          keyboard: false
        });
      } else if (radio_value == '4-C') {
        hideButton();
        setTimeout('showButton()', 5000);

        $('#4-C').data('bs.modal', null);
        $('#4-C').modal({
          show: true,
          backdrop: 'static',
          keyboard: false
        });
      }

    }
  }

}

function clickQ4B3() {

  var rates = document.getElementsByClassName('Q4B-3');
  var radio_value;

  for (var i = 0; i < rates.length; i++) {
    if (rates[i].checked) {
      radio_value = rates[i].value.toString();
      console.log(radio_value);
      if (radio_value == '4-B') {
        hideButton();
        setTimeout('showButton()', 5000);

        $('#4-B').data('bs.modal', null);
        $('#4-B').modal({
          show: true,
          backdrop: 'static',
          keyboard: false
        });
      } else if (radio_value == '4-C') {
        hideButton();
        setTimeout('showButton()', 5000);

        $('#4-C').data('bs.modal', null);
        $('#4-C').modal({
          show: true,
          backdrop: 'static',
          keyboard: false
        });
      } else if (radio_value == '4-F') {
        hideButton();
        setTimeout('showButton()', 5000);

        $('#4-F').data('bs.modal', null);
        $('#4-F').modal({
          show: true,
          backdrop: 'static',
          keyboard: false
        });
      }

    }
  }

}

function clickQ44() {

  var rates = document.getElementsByClassName('Q4-4');
  var radio_value;

  for (var i = 0; i < rates.length; i++) {
    if (rates[i].checked) {
      radio_value = rates[i].value.toString();
      console.log(radio_value);
      if (radio_value == '4-D') {
        hideButton();
        setTimeout('showButton()', 5000);

        $('#4-D').data('bs.modal', null);
        $('#4-D').modal({
          show: true,
          backdrop: 'static',
          keyboard: false
        });
      } else if (radio_value == '4-E') {
        hideButton();
        setTimeout('showButton()', 5000);

        $('#4-E').data('bs.modal', null);
        $('#4-E').modal({
          show: true,
          backdrop: 'static',
          keyboard: false
        });
      }

    }
  }

}

function clickQ4a2() {

  var rates = document.getElementsByClassName('Q4a-2');
  var radio_value;

  for(var i = 0; i < rates.length; i++){
      if(rates[i].checked){
          radio_value = rates[i].value.toString();
              console.log(radio_value);
              if(radio_value == 'q4A-3') {
                window.open('q4A-3.html', '_self');
              }
              else if(radio_value == '4-A') {
                hideButton();
                setTimeout('showButton()', 5000);

                $('#4-A').data('bs.modal',null);
                $('#4-A').modal({
                  show: true,
                  backdrop: 'static',
                  keyboard: false
                  });
              }
              else if(radio_value == '4-E') {
                hideButton();
                setTimeout('showButton()', 5000);

                $('#4-E').data('bs.modal',null);
                $('#4-E').modal({
                  show: true,
                  backdrop: 'static',
                  keyboard: false
                  });
              }

      }
    }

}

function clickQ51() {
  var rates = document.getElementsByClassName('Q5-1');
  var radio_value;

  for(var i = 0; i < rates.length; i++){
      if(rates[i].checked){
          radio_value = rates[i].value.toString();
              console.log(radio_value);
              if(radio_value == 'q5-2') {
                window.open('q5-2.html', '_self');
              }
              else if(radio_value == '5-A') {
                hideButton();
                setTimeout('showButton()', 5000);

                $('#5-A').data('bs.modal',null);
                $('#5-A').modal({
                  show: true,
                  backdrop: 'static',
                  keyboard: false
                  });
              }

      }
    }
}

function clickQ6a2() {

  var rates = document.getElementsByClassName('Q6a-2');
  var radio_value;

  for (var i = 0; i < rates.length; i++) {
    if (rates[i].checked) {
      radio_value = rates[i].value.toString();
      console.log(radio_value);
      if (radio_value == '6-A') {
        hideButton();
        setTimeout('showButton()', 5000);

        $('#6-A').data('bs.modal', null);
        $('#6-A').modal({
          show: true,
          backdrop: 'static',
          keyboard: false
        });
      } else if (radio_value == '6-B') {
        hideButton();
        setTimeout('showButton()', 5000);

        $('#6-B').data('bs.modal', null);
        $('#6-B').modal({
          show: true,
          backdrop: 'static',
          keyboard: false
        });
      }

    }
  }

}

function clickQ6b2() {

  var rates = document.getElementsByClassName('Q6b-2');
  var radio_value;

  for (var i = 0; i < rates.length; i++) {
    if (rates[i].checked) {
      radio_value = rates[i].value.toString();
      console.log(radio_value);
      if (radio_value == '6-C') {
        hideButton();
        setTimeout('showButton()', 5000);

        $('#6-C').data('bs.modal', null);
        $('#6-C').modal({
          show: true,
          backdrop: 'static',
          keyboard: false
        });
      } else if (radio_value == '6-D') {
        hideButton();
        setTimeout('showButton()', 5000);

        $('#6-D').data('bs.modal', null);
        $('#6-D').modal({
          show: true,
          backdrop: 'static',
          keyboard: false
        });
      }

    }
  }

}
