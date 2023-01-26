// Fade Out function
function fadeOut(ms, el) {
  var opacity  = 1,
      interval = 50,
      gap      = interval / ms;

  function func() {
    opacity -= gap;
    el.style.opacity = opacity;

    if(opacity <= 0) {
      window.clearInterval(fading);
      el.style.display = 'none';
    }
  }
  var fading = window.setInterval(func, interval);
}

// Define transition function
function loaded() {
  // Define our variables
  var docBody  = document.body,
      anchors  = document.getElementsByTagName('a');

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
      setTimeout( function() { location = el.href }, 100 );
    }
  }

  hideButton();
  setTimeout('showButton()', 4000);
}

// Fire transition function
window.onload = loaded;


function showButton()
{
    document.getElementById("continue-btn").style.visibility = "visible";
    //document.getElementById("confirm-btn").style.visibility = "visible";
    //document.getElementById("visit-btn").style.visibility = "visible";
}

function hideButton()
{
    document.getElementById("continue-btn").style.visibility = "hidden";
    //document.getElementById("confirm-btn").style.visibility = "hidden";
    //document.getElementById("visit-btn").style.visibility = "hidden";
}
