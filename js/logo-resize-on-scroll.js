var mybutton = document.getElementById("toTop");

window.onscroll = function() {
  growShrinkLogo();
    hideMargin();
    scrollFunction()
};

function growShrinkLogo() {
  var Logo = document.getElementById("Logo")
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    Logo.style.height = '60px';
  } else {
    Logo.style.height = '150px';
  }
}

//Nav header top margin removal

function hideMargin (){
    var home_menu_id = document.getElementById("menu_id")
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5){
        menu_id.style.top = '0px';
    } else {
        menu_id.style.top = '35px'
    }
}

function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}