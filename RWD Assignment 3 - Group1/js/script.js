/* Group 1:
    Miruna
    Ionut
    Mihail
    Flemming */

//Random position function
function newPosition() {

    var height = $(window).height() - 100;
    var width = $(window).width() - 100;

    var newHeight = Math.floor(Math.random() * height);
    var newWidth = Math.floor(Math.random() * width);

    return [newHeight, newWidth];
}

//Functions to make the fish swim by themselves
function idleFish() {

    var position = newPosition();

    $("#fish2Id").animate({
        top: position[0],
        left: position[1]
    }, Math.floor(Math.random() * 5000), function () {
        idleFish();
    }).delay(Math.floor(Math.random() * 2000));
};

function idleFish1() {

    var position1 = newPosition();

    $("#fish1Id").animate({
        top: position1[0],
        left: position1[1]
    }, 2000, function () {
        idleFish1();
    }).delay(2000);
};

//Blue fish move on "hover"
$("#fish2Id").on("mouseenter", function () {

    var move = newPosition();

    $(this).stop(true).animate({

        top: move[0],
        left: move[1]
    }, 300, function () {
        idleFish();
    });
});

//Orange fish move when clicking
$(document).click(function (event) {

    var xCoord = event.pageX;
    var yCoord = event.pageY;

    $("#fish1Id").stop(true).animate({

        left: xCoord - 125,
        top: yCoord - 125
    }, 2000, function () {
        idleFish1();
    });
});

//Orange fish grows on double click
$("#fish1Id").on("dblclick", function () {

    $(this).stop().animate({
        height: 500,
        width: 500

    }, 2000).animate({
        height: 250,
        width: 250
    }, 400, function () {
        idleFish1();
    });
    
});

//Making bubble1 move
function bubbleMovement() {
    $("#bubble1Id").offset({
        top: $(window).height(),
        left: Math.floor(Math.random() * $(window).width())
    });
    $("#bubble1Id").animate({
        top: -100
    }, Math.floor(Math.random() * 10000), "linear", bubbleMovement)
};

//Making bubble2 move
function bubbleMovement1() {
    $("#bubble2Id").offset({
        top: $(window).height(),
        left: Math.floor(Math.random() * $(window).width())
    });
    $("#bubble2Id").animate({
        top: -100
    }, Math.floor(Math.random() * 10000), "linear", bubbleMovement1)
};

//Making bubble3 move
function bubbleMovement2() {
    $("#bubble3Id").offset({
        top: $(window).height(),
        left: Math.floor(Math.random() * $(window).width())
    });
    $("#bubble3Id").animate({
        top: -100
    }, Math.floor(Math.random() * 10000), "linear", bubbleMovement2)
};

//Making the first bubble respawn
$("#bubble1Id").on("click", function () {
    $(this).stop(true).fadeOut().delay().fadeIn();
    bubbleMovement();
});

//Making the second bubble respawn
$("#bubble2Id").on("click", function () {
    $(this).stop(true).fadeOut().delay().fadeIn();
    bubbleMovement1();
});

//Making the third bubble respawn
$("#bubble3Id").on("click", function () {
    $(this).stop(true).fadeOut().delay().fadeIn();
    bubbleMovement2();
});

//Activating all background functions on startup
$(document).ready(function () {
    idleFish();
    idleFish1();
    bubbleMovement();
    bubbleMovement1();
    bubbleMovement2();
});
