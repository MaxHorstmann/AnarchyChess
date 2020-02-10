
function init() {
    var canvas=document.getElementById("myCanvas");
    var ctx=canvas.getContext("2d");

    var sizeX = 16;
    var sizeY = 16;

    var squareWidth = canvas.width / sizeX;
    var squareHeight = canvas.height / sizeY;

    console.log(squareWidth);
    console.log(squareHeight);


    for(x=0;x<sizeX;x++) {
        for(y=0;y<sizeY;y++) {
            if ((x + y) % 2 == 0) continue;
            ctx.fillRect(x*squareWidth, y*squareHeight, squareWidth-1, squareHeight-1);
      }
    }
};

init();



