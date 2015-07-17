casseBrique.Briques = (function(){
    'use strict';
    
    function Briques(canvas){
        this._canvas = canvas;
        this._ctx = canvas.getContext("2d");
        this._posX = 0;
        this._posY = 0;
        this._tabBrique = [];
    }
    
    Briques.prototype.getTabBrique = function(){return this._tabBrique;};
    
    Briques.prototype.setTabBrique = function(tabBrique){
        this._tabBrique = tabBrique;
        return this;
    }
    
    Briques.prototype.init = function() {
        
        var ii = 0;
        
        for(var i = 0; i < stage1.length; i++){
            var jj = 0;
            for(var j = 0; j < stage1[i].length; j++){

                var brique = {
                    value: stage1[i][j],
                    ok: true,
                    x: (jj * 105)+30,
                    y: (ii * 37)+30,
                    width: 100,
                    height: 32
                };
                
                this._tabBrique.push(brique);
                
                jj++;
            }
            ii++;
        }
        
        console.dir(this._tabBrique);
    };
    
    Briques.prototype.draw = function(){
    
        this._ctx.clearRect(0,0,this._canvas.width, this._canvas.height);
        
        var size = this._tabBrique.length
        
        for (var i = 0; i < size; i++){
            if(this._tabBrique[i].ok){
                this._ctx.fillStyle = "red";
                this._ctx.fillRect(this._tabBrique[i].x, this._tabBrique[i].y, 100, 32);
            }
        }
    };
    
    return Briques;
}).call(this);