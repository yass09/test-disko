// On page load, enter Konami Code to
$(document).ready(function(){
  var audio = document.getElementById('SF2'),
      playSound = function () {
        if (!$("audio").hasClass("played")){
          audio.play();
          $("audio").addClass("played");
        }
      };
      options = {
        pattern: [40,39].join(""),
        onPatternMatch: function (e,data){
          $(".loadingPage").fadeOut("slow");
          playSound ();
          console.log("keys pressed: " + event.which);
        }
      };

    $(document).konami(options).click(function () {
        // $(".loadingPage_text").text("Pour entrer tapper l'ecran");
        $(".loadingPage").fadeOut("slow");
        playSound ();
    });


    // keydown(function (event) {
    //     $(".loadingPage").fadeOut("slow");
    //     playSound ();
    //   console.log("keys pressed" + event.which);
    // });
});
