var sections = [
    [
	".*cv.*|.*bio.*|.*curriculum vitae.*",
	"#bio"

      ],
    
    [
	".*photo.*|.*image.*|.*picture.*",
	"#photo"
    ],
    [
	".*class.*|.*course.*|.*syllab.*|.*lectures.*",
	"#classes"
    ],
    [
	".*two bits.*",
	"#books"
	
    ],
    [
	".*publication.*|.*article.*|.*papers.*",
	"#publications"
    ],
    [
	"^info$|.*who are you.*|.*information.*|.*working on.*",
	"#info"
    ]
        
];


var brain = [
    [
	"^q$|^quit$|^exit$|^leave$|^end$|^goodby.*$|^good(.+)by.*$",
	"There is no try, only do!",
	"Perhaps just a <a href='http://kelty.org/kelty.html'>normal website</a> then?"
    ],
    [    ".*website.*|.*web-page.*|.*web-site.*|.*homepage.*|.*home-page.*|.*home page.*",
    	 "Perhaps just the <a href='http://kelty.org/kelty.html'>normal website</a> then?"
    ],
    [
	".*twitter.*",
	"Oh, if you must, it is \@ckelty. But don't expect much."
    ],
    [
	".*facebook.*",
	"The man looks visibly agitated.  Maybe we should talk about something else."
    ],
    [
	"^stay$",
	"How long?"
    ],
    [
	".*help.*|^h$",
	"Try typing some commands, just like in an old school text adventure."],
    [
	".*hello.*", "Greetings. Welcome to Kelty.org!", "Well hello to you too!","Hello World!"
    ],
    [
	"^get$",
	"get something?"
    ],

    [
	"^yes$",
	"Oh Good! I love it when people are affirmative."
    ],

    [
	"^no$",
	"<a href='https://twitter.com/NeinQuarterly'>Really no?</a>",
    ],
    
    [
	"^test$",
	"Hello World."
    ],

    [
	"^play (.*)(game|computer)(.*)",
	"You appear to be playing the game."
    ],

    [
	"^how are you.*",
	"Fine, thank you. And how are you?"
    ],
    [
	"^(fine|good|well|lovely|gut|excellent|happy|bien|bueno|buon|excellent)$",
	"The man returns to typing."
    ],
    [
	".*(bad|lousy|sad|unhappy)",
	"So sorry to hear that."
    ],
    
    [
	"(im |i'm |i am )(.*)",
	"Glad to hear you are $2",
	"so happy to hear you are $2",
	"Being $2 is the best!"
    ],
    [
	"^what is this.*",
	"This is a personal website.  You chose to navigate your browser to it."
    ],

    [
	"^west$|.* west|^w$|^go w$",
	"you could go that way, but that's just a hallway.",
	"you exit the office and end up at a <a href='http://kelty.org/kelty.html'>normal boring website</a>."
    ],
    [
	"^north$|.* north|^n$|^go n$",
	"you can't go that way."
    ],
    [
	"^south$|.* south|^s$|^go s$",
	"you can't go that way."
    ],
    [
	"^east$|.* west|^e$|^go e$",
	"Are you sure? Out the window? That hardly seems wise, it's a good two stories.",
	"You crawl out the window and plummet to your death.  Perhaps you should just visit the <a href='http://kelty.org/kelty.html'>normal website</a>?"
    ],    
    [
	"^look$|^look around$",
	"It's prett much as it was described.",
	"Not much has changed; a desk, computer, coffee cup, paper, books."
    ],
    [
	"(.+)(?:look |inspect |observe |see |view |read)(.*)(?:paper)",
	"It looks like a CV.",
	"It looks like a bio.",
	"It's a CV. Maybe try 'read cv' or 'read bio'?"
	
    ],
    [".*orcs.*",
     "From nowhere, an incredibly ugly and vicious orc appears and kills you. Perhaps you should try the  <a href='http://kelty.org/kelty.html'>normal website</a> instead."],
    ["xyzzy", "You have entered cheat mode.  Would you like to a) get publications; b) Join one of the Kelty cults in exchange for your soul; or c) move instantly to a tenured job at a far away university?"],
    ["a","That key has been disabled by management. Nothing to see here move along"],
    ["b","Oooh, I wouldn't press that if I were you","Really?", "You have been annihilated by a horde of zombie academics, return to the beginning of the chapter"],
    ["c","That way lies madness."],
    [
	"^(?:observe |view |look |read |)(.*)(?:computer.*)",
	"It's a computer with lots of windows open.  The man is switching between them and typing something inscrutable.",
	"The computer screen is displaying what appears to be a website structured as an old-fashioned text adventure game of very primitive construction.",
	"The computer screen is filled with gobbledygook."
    ],
    [
	"^(?:get |take |look |browse )(.*)(?:book.*)",
	"Most of the books appear to be from the 1990s.",
	"There are a lot of books.  Not sure where to start.",
	"All these books look pretty predictable, you might have more luck at your library."
    ],
    [
	"^(?:get |take |break |turn off |smash |hit |grab |steal )(.*)(?:computer.*)",
	"That seems like a very bad idea.",
	"You head for the computer, but the man turns towards you and says 'Really?'"
    ],
    [
	"^(?:read |pick |choose| )(.*)(?:book.*)",
	"You randomly take one off the shelf.  It turns out to be a second-rate ethnography from the 1980s.  You don't have time for this.",
	"You randomly take one off the shelf. It appears to be in German.",
	"You randomly take one off the shelf. It's a vintage copy of a book about packet switching. As if.",
	"You browse the shelf and settle on a very dog-eared copy of Veblen's <em>The Theory of the Leisure Class</em>. Several hours later you emerge enlightened.",
	"You browse the extensive collection and decide that the appropriate book would be Huizinga's <em>Homo Ludens</em>.  You settle in for a read."
    ],
    [
	"^I (?:wish |would like )(?:I could |I was able to |to be able to )(.*)\.",
	"What would it be like to be able to $1?"
    ],
    [
	"^(?:get |take |drink |steal )(.*)(?:coffee)",
	"That seems unwise. He seems to be fond of his coffee.",
	"You reach for the coffee, but the man slaps your hand away."
    ],

 [
	"^(?:look |inspect |observe |see |view )(.*)(?:office)",
	"It's pretty much the way I described it.",
	"It's a small office, done up in public university drab."
	
    ],
    [
	"^(?:get |touch |hit |punch |kick |attack )(.*)(?:man.*)",
	"Gosh, that seems a bit dangerous, maybe you should have a conversation first.",
	"Really? I think the best you could do would be to say hello."
    ],
    [
	"^(?:look |inspect |observe |see |view )(.*)(?:desk.*)",
	"Not much has changed.",
	"You see a computer, a coffee cup, and a piece of paper."
	
    ],
   
    [
	"^(?:address |speak |talk |yell |say |look)(.*)(?:man.*)",
	"He doesn't appear to be listening to you.",
	"He shifts slighly in his chair, but does not respond.",
	"He says 'hello' and goes back to typing.",
	"Maybe try asking for something specific?"
    ],
    [
	"I need (.*)" ,
	"Why do you need $1?",
	"Would it really help you to get $1?" ,
	"Are you sure you need $1?"
    ],
    [
	".*(\\d)+.*",
	"$1 is a beautiful number."
    ],

    [
	"^i$|^inventory$|^list$",
	"You have:<br /> 1. no tea <br />2. a splitting headache."
    ],
    
    [
    	"(.+)",
    	"'$1' is not something I understand.",
    	"What do you mean by '$1'?",
	"Is '$1' how you really feel?",
    	"Is '$1' a question?",
    	"Maybe try typing something other than '$1'?",
     	"Sorry, didn't get that?",
     	"Can you be more specific?",
	"'$1' doesn't make sense to me.",
    	"Eh?"
    ]
    
];


//  Main

$("#inputCommand").on("keydown",function input(e) {
    if(e.keyCode == 13) {
	$('#responsediv').append("> "+ $("#inputCommand").val() + "<p>");
	var textInput = $("#inputCommand").val().toLowerCase();
	evaluateCommand(textInput);
	logInput(textInput);
	    }});

function evaluateCommand(textInput){
    var section = lookForSections(textInput);
    if (section === undefined) {
	accessBrain(textInput) // look in brain
    }
    else {
	$("#responsediv").append("The man turns around in his chair, and hands you this: ");
	setTimeout(function(){
	    $("#responsediv").append($("<p>").load("kelty.html "+section))},1000)}
//    $('#responsediv').append(response + "<p>");
  $('html, body').animate({
     scrollTop: $("#inputCommand").offset().top
 }, 2000);
 document.getElementById("inputCommand").value="";    
}


function accessBrain(texttomatch) {
//   texttomatch = texttomatch + " ";
    for (i=0; i < brain.length; i++) {
	var re = new RegExp (brain[i][0], "i");
//	console.log(re);
       if (re.test(texttomatch)) {
	   var len = brain[i].length - 1;
	   var index = Math.ceil( len * Math.random());
	   var reply = brain[i][index];
//	   console.log(reply)
//	   console.log(re)
	   var response = texttomatch.replace(re, reply);
	   $('#responsediv').append(response + "<p>");
	   break;
       }
    }
}
    

function lookForSections(texttomatch) {
    for (i=0;i < sections.length; i++) {
	var re = new RegExp (sections[i][0], "i");
	if (re.test(texttomatch)) {
	    var reply = sections[i][1];
	   // console.log(reply)
	    return reply;
	    break;
	}
    }
}


// Log input

function logInput(str) {
    var query = str + " : " +Date();
   
$.ajax({
	type: "POST",
	url: "scripts/log.php",
	data: {data: query},
	success: function(response)
        {
	    console.log(response);
        }
    });
	
}
