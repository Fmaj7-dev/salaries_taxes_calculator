
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// width & height
var width = 640;
var height = 480;

var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World", 100, 50);

function drawAxis(ctx)
{
    var plot_min_x = width/10;
    var plot_max_y = height-height/10;
    var plot_max_x = plot_min_x + 0.8*width; 
    var plot_min_y = height*0.1;

    // x axis
    ctx.moveTo(plot_min_x, plot_max_y);
    ctx.lineTo(plot_max_x, plot_max_y);
    ctx.stroke();

    // y axis
    ctx.moveTo(plot_min_x, plot_max_y);
    ctx.lineTo(plot_min_x, plot_min_y);
    ctx.stroke();
}

function fillIntervalos()
{
    document.getElementById('interval1').value = "12450";
    document.getElementById('interval2').value = "20200";
    document.getElementById('interval3').value = "35200";
    document.getElementById('interval4').value = "60000";
    document.getElementById('interval5').value = "-";

    document.getElementById('percentage1').value = "19";
    document.getElementById('percentage2').value = "24";
    document.getElementById('percentage3').value = "30";
    document.getElementById('percentage4').value = "37";
    document.getElementById('percentage5').value = "45";
}

function fillBruto()
{
    document.getElementById('bruto').value = "30000";
}

drawAxis(ctx);
fillIntervalos();
fillBruto();

document.getElementById('interval1').value = "12450";
