$(document).ready(function () {
  var $menuMobile = $(".menu_mobileIcon"),
    $menuItems = $(".menu_item-mobile");
  $menuMobile.click(function (){
    $menuItems.toggleClass("menu_item-mobile-open", 200);
  });
});
