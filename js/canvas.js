    // Creation de l'objet canvas
var canvas = document.getElementById('canvas'),
    // Creation d'un objet de dessin
    ctx = canvas.getContext("2d");
    // Calcul du diametre de l'orloge
    radius = canvas.height / 2;
// Reentrage de l'objet dessin au point 0
ctx.translate(radius, radius);
// Reduction de la taille de l'orloge a 90% pour qu'elle soit bien visible a l'interieur du canvas
radius = radius * 0.90;
// Fonction dessinant l'orloge
function drawClock() {
ctx.arc(0, 0, radius, 0 , 2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
};

// Fonctions dessinant l'interieur de l'orloge
function drawFace(ctx, radius) {
  var grad;
// Dessin du cercle blanc
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
// Creation du contour de l'orloge avec un gradient
    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
// Declaration des 3 couleurs du gradient
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
// Definition du gradient comme effet du dessin
    ctx.strokeStyle = grad;
// Definition de la largeur de l'objet de dessin
    ctx.lineWidth = radius*0.1;
// Execution du dessin du cercle
    ctx.stroke();
// Execution du dessin de l'interieur
    ctx.beginPath();
    ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
}
// Fonction ajoutant les chiffres
function drawNumbers(ctx, radius) {
// Declaration des variables des numero et des angles
    var ang;
    var num;
// Definition de la taille des chiffres
    ctx.font = radius*0.15 + "px arial";
  // Defintion du Positionnement
    ctx.textBaseline="middle";
    ctx.textAlign="center";
  // Calcul des positions des chiffres
    for(num= 1; num < 13; num++){
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius*0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-ang);
    }
}
// Fonction recuperant l'heure sur l'orloge traduite par les aiguilles les aiguilles
function drawTime(ctx, radius){
  // Recuperation de l'heure,minutes, secondes du syste
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
  //Dessin des aiguilles
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}
// Dessin des aiguilles
function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

// Fonction appelant toutes les etapes de dessin des element de l'orloge
function drawClock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
}
// Appel de la fonction pour lancer l'execution du dessin
drawClock();

// Demarage de l'orloge
setInterval(drawClock, 1000);
