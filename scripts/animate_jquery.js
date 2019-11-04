function RadToDeg (rad) {
    return rad * 180 / Math.PI;
}

function DegToRad (deg) {
    return deg * Math.PI / 180;
}

function getcenter(dot1, dot2){
    let x = (dot1.left + dot2.left)/2;
    let y = (dot1.top + dot2.top)/2;
    return {x , y};
}

function getfocus() {
    let x = $("#email").offset().left;
    let y = $("#email").offset().top - $("#email").height();
    if ($("#helper").width() > $("#email").width()) {
        x += $("#email").width();}
    else {
        x += $("#helper").width();}
    return {x, y}
}

function getcoord(center, focus){
    let triangle = new Object();
    triangle = {
        width : focus.x - center.x,
        height : focus.y - center.y
    }
    let angle = RadToDeg( Math.atan(triangle.width/triangle.height));
    const radius = 8;
    let a = radius * Math.sin(DegToRad(angle));
    let b = radius * Math.cos(DegToRad(angle));
    return {a , b};
}

function animate(obj, finish){
    let start = new Object();
    start = {
        cx: obj.attr("cx"),
        cy: obj.attr("cy")
    };
    let fin = new Object();
    fin = {
        a : parseFloat(finish.a),
        b : parseFloat(finish.b)
    }
    fin.a += parseFloat(start.cx);
    fin.b += parseFloat(start.cy);
    obj.animate({
        cx: fin.a,
        cy: fin.b
    }, 50);
}

function onfocus () {
    let center = getcenter($("#pupil_l").offset(), $("#pupil_r").offset());
    let finish = getcoord(center, getfocus());
    animate ($("#pupil_l"), finish);
    animate ($("#pupil_r"), finish);
}

$("#email").on("input", function() {

  $("#helper").text($("#email").val());
  onfocus();
});

$("#email").on("blur", function () {
    $("#pupil_l").animate({
        cx: 91.5,
        cy: 97
    }, 50);
    $("#pupil_r").animate({
        cx: 117,
        cy: 97
    }, 50)
})

$("#email").on("focus", function () {
    onfocus();
})
