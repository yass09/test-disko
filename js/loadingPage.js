// On page load, enter Konami Code to
$(document).ready(function(){
  // Variable pour appeler le fichier audio
  var audio = document.getElementById('SF2'),
  // Fonction pour lancer l'audio
      playSound = function () {
        if (!$("audio").hasClass("played")){
          audio.play();
          $("audio").addClass("played");
        }
      },
  // Declaration du Konami code
  // Options contient le code a effectuer et la fonction déclenchée par le code
      options = {
        pattern: [40,39].join(""),
        onPatternMatch: function (e,data){
          $(".loadingPage").fadeOut("slow");
          playSound ();
          console.log("keys pressed: " + event.which);
        }
      },
  // fonctions pour faire apparaître les instructions
      addText = function () {
        $(".loadingPage_text").append("<p>Sur smartphone, un tap suffira.</p>");
      },
      addText2 = function (a) {
        $(".loadingPage_text").append("<p>OK, bon un click suffira sur desktop.</p>")
      };
  // SetTimeout faisant apparaitre les instructions
    setTimeout(addText,2000);
    setTimeout(addText2,5000);
    $(document).konami(options).click(function () {
        $(".loadingPage").fadeOut("slow");
        playSound ();
    });
});
