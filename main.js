
function init() {
    var canvas=document.getElementById("myCanvas");
    var ctx=canvas.getContext("2d");

    var sizeX = 8;
    var sizeY = sizeX;

    var fillStyleLight = "#b88b4a"
    var fillStyleDark = "#e3c16f";

    var squareWidth = canvas.width / sizeX;
    var squareHeight = canvas.height / sizeY;

    ctx.fillStyle = "LightGray";

    for(x=0;x<sizeX;x++) {
        for(y=0;y<sizeY;y++) {
            ctx.fillStyle = ((x + y) % 2 == 0) ? fillStyleDark : fillStyleLight;
            ctx.fillRect(x*squareWidth, y*squareHeight, squareWidth, squareHeight);
      }
    }
};

init();



