$(function(){
    "use strict"
    let puzzleArea = $('#puzzlearea');
    let tiles = $("div",puzzleArea);
    let init=function(){
        // initialize each piece
        for (let i=0; i< tiles.length; i++) {
            let tile = tiles[i];

            // calculate x and y for this piece
            let x = ((i % 4) * 100) ;
            let y = (Math.floor(i / 4) * 100) ;

            // set basic style and background
            tile.className = "puzzlepiece";
            tile.style.left = x + 'px';
            tile.style.top = y + 'px';
            tile.style.backgroundImage = 'url("background.jpg")';
            tile.style.backgroundPosition = -x + 'px ' + (-y) + 'px';

            // store x and y for later
            tile.x = x;
            tile.y = y;

            $(tile).attr("id","square_"+(i%4)+"_"+(Math.floor(i / 4)));
        }


    }
    init();

    $(tiles).click(function (e) {
        e.preventDefault();
        moveTiles(this);
        if(checkAllAreCorrect()){
            alert("Congratulations !! Problem Solved! ");
        }

    });

    $(tiles).mouseenter(function () {
        let found=false;
        //check upward
        if(this.y>0){
            let res=checkEmpty(this.x,this.y-100);
            if(res) found=true;
        }
        //check downward
        if(this.y<300){
            let res=checkEmpty(this.x,this.y+100);
            if(res) found=true;
        }
        //check leftward
        if(this.x>0){
            let res=checkEmpty(this.x-100,this.y);
            if(res) found=true;
        }
        //check rightward
        if(this.x<300){
            let res=checkEmpty(this.x+100,this.y);
            if(res) found=true;
        }
        if(found){
            $(this).addClass("movablepiece");
        }

    });

    $(tiles).mouseout(function () {
        $(tiles).removeClass("movablepiece");
    });
    function checkEmpty(row,col){
        if(row>0)row=row/100;
        if(col>0)col=col/100;
        if($("#square_"+row+"_"+col).length){
            return false;
        }else{
            return true;
        }

    }

    function checkAllAreCorrect(){
        for (let i=0; i< tiles.length; i++) {
            let tile = tiles[i];
            let l = ((i % 4) * 100) ;
            let t = (Math.floor(i / 4) * 100) ;
            if(tile.x!=l || tile.y!=t){
                return false;
            }
        }
        return true;
    }
    function moveTiles(ele){
        //check upward
        if(ele.y>0){
            let res=checkEmpty(ele.x,ele.y-100);
            if(res){
                let l=parseInt(ele.x);
                let t=parseInt(ele.y-100);
                $(ele).css("top",t+"px");
                ele.x=parseInt(l);
                ele.y=parseInt(t);
                if(l>=100)l/=100;
                if(t>=100)t/=100;
                $(ele).attr("id","square_"+l+"_"+t); return;
            }
        }
        //check downward
        if(ele.y<300){
            let res=checkEmpty(ele.x,ele.y+100);
            if(res){
                let l=parseInt(ele.x);
                let t=parseInt(ele.y+100);
                $(ele).css("top",t+"px");
                ele.x=parseInt(l);
                ele.y=parseInt(t);
                if(l>=100)l/=100;
                if(t>=100)t/=100;
                $(ele).attr("id","square_"+l+"_"+t);
                return;
            }
        }
        //check leftward
        if(ele.x>0){
            let res=checkEmpty(ele.x-100,ele.y);
            if(res){
                let l=parseInt(ele.x-100);
                let t=parseInt(ele.y);
                $(ele).css("left",l+"px");
                ele.x=parseInt(l);
                ele.y=parseInt(t);
                if(l>=100)l/=100;
                if(t>=100)t/=100;
                $(ele).attr("id","square_"+l+"_"+t);return;
            }
        }
        //check rightward
        if(ele.x<300){
            let res=checkEmpty(ele.x+100,ele.y);
            if(res){
                let l=parseInt(ele.x+100);
                let t=parseInt(ele.y);
                $(ele).css("left",l+"px");
                ele.x=parseInt(l);
                ele.y=parseInt(t);
                if(l>=100)l/=100;
                if(t>=100)t/=100;
                $(ele).attr("id","square_"+l+"_"+t);return;
            }
        }
    }

    $("#shufflebutton").click(function(){
        for(let i=0;i<1000;i++){
            let pos=Math.floor(Math.random() * tiles.length);
            moveTiles(tiles[pos]);
        }

    });


})