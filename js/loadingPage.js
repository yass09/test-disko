//Chargement de l'animation jquery de la loading/konami page
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
          $(".loadingPage").fadeOut("fast");
          playSound ();
          console.log("keys pressed: " + event.which);
        }
      },
  // fonctions pour faire apparaître les instructions
      addText = function () {
        $(".loadingPage_text").append("<p>OK, bon si vous ne trouvez pas, un click suffira sur desktop aussi.</p>");
      };
  // SetTimeout faisant apparaitre les instructions
    setTimeout(addText,5000);

  // Initialisation du Konami code et alternative par click
    $(document).konami(options).click(function () {
        $(".loadingPage").fadeOut("fast");
        $("#ryu-gif-container").toggleClass("ryuImg_container-hidden ryuImg_container");
        setTimeout(playSound,2000);
        setTimeout(function () {
          $("#ryu-gif-container").fadeOut("fast")
        },3500);
    });
});
