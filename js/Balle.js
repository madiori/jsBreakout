casseBrique.Balle = (function(){
    'use strict';
    
    function Balle(canvas, posX, posY){
        this._canvas = canvas;
        this._ctx = this._canvas.getContext("2d");
        this._posX = posX || this._canvas.width / 2;
        this._posY = posY || this._canvas.height / 2;
        this._size = 32;
        this._speedXbase = 4
        this._speedX = this._speedXbase;
        this._speedY = 4;
    }
    
    Balle.prototype.draw = function(barre,briques){
        //window.requestAnimationFrame(this.draw.bind(this, barre));
        this._ctx.clearRect(0,0,this._canvas.width, this._canvas.height)  
        
        this._ctx.fillStyle = "green";
        this._ctx.fillRect(this._posX += this._speedX, this._posY += this._speedY, this._size, this._size);
        
        this._wall();
        this._hitBarre(barre);
        this._hitBrique(briques);
    };
    
    Balle.prototype._wall = function(){
        if (this._posX < 0)this._speedX *= -1;
        if (this._posY < 0)this._speedY *= -1;
        if (this._posX > this._canvas.width - this._size)this._speedX *= -1;
        if (this._posY > this._canvas.height - this._size)this._speedY *= -1;
    };
    
    Balle.prototype._hitBarre = function(barre){
        
        var portion = barre.getWidth() / 4;
        
        if(this._posY + this._size === barre.getPosY()){
            // 1ère portion
            if(this._posX + this._size > barre.getPosX() && this._posX < barre.getPosX() + portion){
                console.log('portion 1');
                this._speedY *= -1;
                this._speedX = -this._speedXbase;
            }
            // 2ème portion
            if(this._posX >= barre.getPosX() + portion && this._posX < barre.getPosX() + (portion * 2)){
                console.log('portion 2');
                this._speedY *= -1;
                this._speedX = - (this._speedXbase/2);
            }
            // 2ème portion
            if(this._posX >= barre.getPosX() + (portion * 2) && this._posX < barre.getPosX() + (barre.getWidth() - portion)){
                console.log('portion 3');
                this._speedY *= -1;
                this._speedX = this._speedXbase/2;
            }
            // 2ème portion
            if(this._posX >= barre.getPosX() + (barre.getWidth() - portion) && this._posX < barre.getPosX() + barre.getWidth()){
                console.log('portion 4');
                this._speedY *= -1;
                this._speedX = this._speedXbase;
            }
        }
        
        // if (this._posY + this._size === barre.getPosY()){
        //     if(this._posX + this._size >= barre.getPosX() && this._posX <= barre.getPosX() + barre.getWidth()){
        //         this._speedY *= -1;
        //     }
        // }
        
        /*if (this._posY + this._size > barre.getPosY() && this._posY < barre.getPosY() + barre.getHeight()){
            if (this._posX + this._size === barre.getPosX() || this._posX === barre.getPosX() + barre.getWidth()){
                this._speedX *= -1;
            }
        }*/
    }
    
    Balle.prototype._hitBrique = function(briques){
         
        for (var i = 0; i < briques.getTabBrique().length; i++) {
            var br = briques.getTabBrique()[i];
            if (br.ok){
                if (this._posY - this._size < br.y){
                    if(this._posX + this._size > br.x && this._posX < br.x + br.width){
                        br.ok = false;
                        briques.setTabBrique(briques.getTabBrique());
                        console.dir(briques.getTabBrique()[i]);
                        this._speedY *= -1;
                    }
                }
            }
        }
    }
    
    return Balle;
}).call(this);