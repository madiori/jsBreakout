var my_canvas = document.getElementById('barreBalle');
var balle = new casseBrique.Balle(my_canvas);
var barre = new casseBrique.Barre(my_canvas);
var brique = new casseBrique.Briques(document.getElementById("briques"));

brique.init();

var my_ctx = document.getElementById('barreBalle').getContext('2d');
barre.event();

function update(){
    
    brique.draw();
    balle.draw(barre, brique);
    barre.draw();
    requestAnimationFrame(update);
}

update();
