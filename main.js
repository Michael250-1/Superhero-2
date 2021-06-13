var Canvas=new fabric.Canvas("myCanvas");
playerx=10;
playery=10;
blockwidth=30;
blockheight=30;
var player_object="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("player (1).png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:playery,
            left:playerx
        });
        Canvas.add(player_object);
    });

}
function block_update(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_object=Img;
        block_object.scaleToWidth(blockwidth);
        block_object.scaleToHeight(blockheight);
        block_object.set({
            top:playery,
            left:playerx
        });
        Canvas.add(block_object);
    });
    
}
window.addEventListener("keydown",my_keyDown);
function my_keyDown(e){
    keypress=e.keyCode;
    if (keypress=="54"){
block_update("thor_face.png");
console.log("t");
    }

   if (keypress=="64"){
block_update("thor_right_hand.png");
console.log("d"); 
}

if (keypress=="6C"){
    block_update("thor_left_hand.png");
   console.log("l");
}

if (keypress=="67"){
    block_update("spiderman_body.png");
    console.log("g");
}

if (keypress=="77"){
    block_update("spiderman_face.png");
    console.log("w");
}

if (keypress=="79"){
    block_update("spiderman_left_hand.png");
    console.log("y");
}

if (keypress=="72"){
    block_update("spiderman_right_hand.png");
    console.log("r");
}

    if (keypress=="63"){
        block_update("spiderman_legs.png");
        console.log("c");
    }

        if (keypress=="75"){
            block_update("ironman_left_hand.png");
            console.log("u");
        }
        if (keypress=="76"){
            block_update("ironman_right_hand.png");
            console.log("v");
        }
        if (keypress=="68"){
            block_update("ironman_legs.png");
            console.log("h");
        }
        if (keypress=="67"){
            block_update("ironman_body.png");
            console.log("g");
        }
        if (keypress=="71"){
            block_update("ironman_face.png");
            console.log("q");
        }
        if (keypress=="77"){
            block_update("hulk_face.png");
            console.log("w");
        }

        if (keypress=="73"){
            block_update("hulk_legs.png");
            console.log("s");
        }
        if (keypress=="76"){
            block_update("ironman_right_hand.png");
            console.log("v");
        }
        if (keypress=="80" && e.shiftKey==true){
            console.log("p and shift pressed together");
            blockwidth= blockwidth + 10;
            blockheight= blockheight + 10;
            document.getElementById("currentwidth",).innerHTML=blockwidth;
            document.getElementById("currentheight",).innerHTML=blockheight;
        }

        if (keypress=="77" && e.shiftKey==true){
            console.log("m and shift pressed together");
            blockwidth= blockwidth - 10;
            blockheight= blockheight - 10;
            document.getElementById("currentwidth",).innerHTML=blockwidth;
            document.getElementById("currentheight",).innerHTML=blockheight;
        }
        if (keypress=="38"){
            console.log("Up");
            up();
        }
        if (keypress=="40"){
            console.log("down");
            down();
        }
        if (keypress=="37"){
            console.log("left");
            left();
        }
        if (keypress=="39"){
            console.log("right");
            right();
        }
    }
   function up() {
  if (playery>=0){
      playery = playery - blockwidth;
    Canvas.remove(player_object);
    player_update();
  }
   }

   function down(){
    if (playery<=650){
        playery = playery + blockwidth;
      Canvas.remove(player_object);
      player_update();
    }
   }
   function left(){
    if (playerx>=0){
        playerx = playerx - blockwidth;
      Canvas.remove(player_object);
      player_update();
    }
   }
   function right(){
   if (playerx<=850){
    playerx = playerx + blockwidth;
  Canvas.remove(player_object);
  player_update();
}
}


