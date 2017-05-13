var left = 100;
var width = 400;
var hstep = 20;
var toppos = 180;
var height = 150;
var vstep = 50;
var messages = [
    "Upgrading IDE",
    "Reinstalling GRUB",
    "Restoring database backup",
    "reading \"Java bytecode instruction listings\" on Wikipedia"
];
var levels = [
    {
        hair: 20,
        time: 40000,
        mission: "Upgrade server software",
        steps: [
            "Upgrade software",
            "Reboot server",
            "Scan network to find ILO address",
            "Order new ILO Licence",
            "Downgrade Java plugin",
            "Reinstall GRUB"
        ]
    },
    {
        hair: 30,
        time: 20000,
        mission: "Fix simple software bug",
        steps: [
            "Upgrade IDE",
            "Fix a lot of style guide warnings",
            "Refacor code",
            "Fix bug",
            "Write test case",
            "Fix build breakage caused by changes on the build server",
        ]
    }
    
];

function initializeLevel(level) {
    console.log('Starting level ' + (level + 1));
    var game = $("#game");
    var intro = $(".intro");
    intro.detach();
    intro.find('h2').text("Level " + (level + 1));
    intro.find('strong').text("Mission: " + levels[level].mission);
    intro.on('click', function() {
        intro.hide();
    });
    intro.show();
    game.empty();
    game.append(intro);
    var hair = levels[level].hair;
    var hedge = Math.sqrt(hair);
    var vstep = height / hedge;
    var hstep = width / hedge;
    var time = levels[level].time;
    hair = 0;
    for( var y = toppos; y < toppos + height; y += vstep) {
	    for( var x = left; x < left + width; x += hstep) {
	        var xpos = left + width*Math.random();
	        var ypos = y + 10*Math.random() - 5;
	        var el = $('<div class="hair"/>').offset({top: ypos, left: xpos});
	        game.append(el);
            hair++;
	    }
    }
    var steps = levels[level].steps;
    $('.hair').on('click', function() {
	    var el = $(this);
	    el.hide();
        var hairLeft = $('.hair:visible').length;
        var step = steps.length - Math.floor((hairLeft/hair)*steps.length);
        console.log("At step: " + step);
	    $("#messages").text(steps[step]);
	    window.setTimeout(function() {el.show();}, time);
	    if (hairLeft === 0) {
            if (level + 1 == levels.length) {
                console.log('victory');
                var victory = $('.victory');
                victory.detach();
                game.append(victory.show());
            } else {
	            initializeLevel(level + 1);
            }
	    }
    });
}

function initialize() {
    var intro = $(".intro");
    initializeLevel(0);
}

$(document).ready(initialize);
