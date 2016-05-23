//Chargement de l'animation jquery de la loading/konami page
$(document).ready(function(){
// fonctions pour faire apparaître les instructions en fonction du device
  var addText = function () {
    var screenHeight = $(window).height(),
        screenWidth = $(window).width();
    if ( screenHeight > 740 || screenWidth > 415){
        $(".loadingPage_text").after('<p class="loadingPage_text-indice"> OK, bon si vous ne trouvez pas, un click suffira sur desktop aussi.</p>');
    } else {
      $(".loadingPage_text").after('<p class="loadingPage_text-indice"> Sur smartphone, un tap suffira.</p>');
    };
  };
// SetTimeout faisant apparaitre les instructions
  setTimeout(addText,5000);

  // Variable pour appeler le fichier audio,
  var audio = $("#SF2"),
  // Fonction pour lancer l'audio
      playSound = function () {
        if (audio.hasClass("played")){
          audio[0].play();
          audio.addClass("played");
        }
      },

      // Fonctions concernant l'animation
      fadeGif = function () {
        $("#ryu-gif-container").fadeOut("fast");
        $(".content").toggleClass('content');
      },

      ryuAnimation = function (e,data){
        $("#ryu-gif-container").toggleClass("ryuImg_container-hidden ryuImg_container");
        setTimeout(playSound,2000);
        setTimeout(fadeGif,3500);
      },

  // Declaration du Konami code
  // Options contient le code a effectuer et la fonction déclenchée par le code
      options = {
        pattern: [40,39].join(""),
        onPatternMatch: function (e,data){
          $(".loadingPage").fadeOut("fast").promise().done(ryuAnimation);
          console.log("keys pressed: " + event.which);
          }
        };

  // Initialisation du Konami code et alternative par click
    $(document).konami(options).click(function () {
        $(".loadingPage").fadeOut("fast").promise().done(ryuAnimation);

    });
  });
