// script buat si topNav
function TopNavFunc() {
  var x = document.getElementById("idTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//script buat slideshow
var slideIndex = 1;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

showSlides(slideIndex);

//script map google

function initMap() {
  // The location of Uluru
  var uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}

// countdown func

var countDownDate = new Date("Jun 28, 2019 23:59:59").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo1").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo1").innerHTML = "EXPIRED";
  }
}, 1000);

//Order Validation
function validateForm() {
  var flag = 0;
  var integer = /^[-+]?[0-9]+$/;

  //name
  var name = document.forms["myForm"]["name"].value;
  if (name == "") {
    document.getElementById("namelbl").innerHTML = "Name must be filled";
    flag = 1;
  } else {
    document.getElementById("namelbl").innerHTML = "";
  }

  //email
  var email = document.forms["myForm"]["email"].value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email == "") {
    document.getElementById("emaillbl").innerHTML = "Email must be filled";
    flag = 1;
  } else {
    if (email.match(mailformat)) {
      document.getElementById("emaillbl").innerHTML = "";
    } else {
      document.getElementById("emaillbl").innerHTML =
        "You inputted an invalid email";
      flag = 1;
    }
  }

  //phoneNum
  var num = document.forms["myForm"]["number"].value;
  if (num == "") {
    document.getElementById("numberlbl").innerHTML = "Phone Number must filled";
    flag = 1;
  } else {
    if (num.match(integer)) {
      document.getElementById("numberlbl").innerHTML = "";
    } else {
      document.getElementById("numberlbl").innerHTML =
        "Phone Number Must Be Integers";
      flag = 1;
    }
  }

  //address
  var address = document.forms["myForm"]["address"].value;
  if (address == "") {
    document.getElementById("addresslbl").innerHTML = "Address must filled";
    flag = 1;
  } else {
    if (address.length >= 6) {
      var sub = "Street";
      if (address.includes(sub, address.length - 6)) {
        document.getElementById("addresslbl").innerHTML = "";
      } else {
        document.getElementById("addresslbl").innerHTML =
          "Address must end with Street";
        flag = 1;
      }
    } else {
      document.getElementById("addresslbl").innerHTML =
        "Address must end with Street";
      flag = 1;
    }
    //document.getElementById('addresslbl').innerHTML = '';
  }

  //quantity
  var qty = document.forms["myForm"]["qty"].value;
  if (qty == "") {
    document.getElementById("qtylbl").innerHTML = "Quantity must filled";
    flag = 1;
  } else {
    if (qty.match(integer)) {
      if (qty <= 0) {
        document.getElementById("qtylbl").innerHTML =
          "Quantity must be more than 0";
        flag = 1;
      } else {
        document.getElementById("qtylbl").innerHTML = "";
      }
    } else {
      document.getElementById("qtylbl").innerHTML = "Quantity must be integer";
      flag = 1;
    }
  }

  if (flag != 0) {
    return false;
  } else {
    alert("Your order has been saved, thank you for buying with us!");
    window.location.reload();
    return true;
  }
}
