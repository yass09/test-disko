$(document).ready(function () {
  // Deuxieme fichier audio
  var audio2 = $("#SF2-2"),
  // Indice du code apparaissant en fonction du hover
      footerText = $(".footer_headerText")
      footerTextOriginal = footerText.text(),
      indiceCode = "UP, DOWN, Repeat";
  footerText.hover(
    function() {
    footerText.text(indiceCode);
  },
    function(){
      footerText.text(footerTextOriginal);
    });
// Definition de l'objet Konami code
  var options = {
      pattern:[38,40,38,40].join(''),
      onPatternMatch: function (e,data) {
        window.open("https://github.com/yass09/test-disko");
        audio2[0].play();
        console.log("code 1");
      }
    };
  $(window).konami(options);
});
