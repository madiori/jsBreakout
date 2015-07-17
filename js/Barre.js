casseBrique.Barre = (function(){
    'use strict';
    
    function Barre(canvas){
        this._canvas = canvas;
        this._ctx = this._canvas.getContext("2d");
        
        this._width = 128;
        this._height = 32;
        
        this._posX = (this._canvas.width / 2) - (this._width / 2);
        this._poxY = this._canvas.height - 52;
        
        this._goingLeft = false; 
        this._goingRight = false; 
        this._keyLeft = 37;
        this._keyRight = 39;
        
        this._move = 0
        this._speed = 6;
    }
    
    Barre.prototype.getPosX = function(){return this._posX;};
    Barre.prototype.getPosY = function(){return this._poxY;};
    Barre.prototype.getWidth = function(){return this._width;};
    Barre.prototype.getHeight = function(){return this._height;};
    
    Barre.prototype.draw = function(){
        //window.requestAnimationFrame(this.draw.bind(this));
        
        if (this._goingLeft === true && this._posX > 0)
            this._move = -this._speed;
        else if (this._goingRight === true && this._posX < this._canvas.width - this._width)
            this._move = this._speed;
        else
            this._move = 0;
        
        this._ctx.fillStyle = "green";
        this._ctx.fillRect(this._posX += this._move, this._poxY, this._width, this._height);
        
    };
    
    Barre.prototype.event = function(){
        document.addEventListener('keydown', function(e){
            if (e.keyCode === this._keyLeft)this._goingLeft = true;
            if (e.keyCode === this._keyRight)this._goingRight = true;
        }.bind(this));
        
        document.addEventListener('keyup', function(e){
            if (e.keyCode === this._keyLeft)this._goingLeft = false;
            if (e.keyCode === this._keyRight)this._goingRight = false;
        }.bind(this));
    };
    
    return Barre;
    
}).call(this);