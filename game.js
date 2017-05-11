var left = 100;
var width = 400;
var hstep = 20;
var toppos = 180;
var height = 150;
var vstep = 50;
var messages = [
    "Downgrading JDK",
    "Ordering new ILO Licence",
    "Upgrading IDE",
    "Reinstalling GRUB",
    "Restoring database backup"
];

function initialize() {
    var game = $("#game");
    for( var y = toppos; y < toppos + height; y += vstep) {
	for( var x = left; x < left + width; x += hstep) {
	    var xpos = left + width*Math.random();
	    var ypos = y + 10*Math.random() - 5;
	    var el = $('<div class="hair"/>').offset({top: ypos, left: xpos});
	    game.append(el);
	}
    }
    $('.hair').on('click', function() {
	$("#messages").text(messages[Math.floor((Math.random()*messages.length))]);
	var el = $(this);
	el.hide();
	window.setTimeout(function() {el.show();}, 20000);
	if ($('.hair:visible').length === 0) {
	    $("#game").hide();
	}
    });
}

$(document).ready(initialize);
