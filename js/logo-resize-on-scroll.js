window.onscroll = function() {
  growShrinkLogo();
    hideMargin()
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
    var home_menu_id = document.getElementById("home_menu_id")
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5){
        home_menu_id.style.top = '0px';
    } else {
        home_menu_id.style.top = '35px'
    }
}