var sections = [
    [
	".*cv.*|.*bio.*|.*curriculum vitae.*|.*working on.*",
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
	".*publication.*|.*article.*|.*papers.*",
	"#publications"
    ],
    [
	"^info$|.*who are you.*|.*information.*|.*working on.*|^about$|^who is chris.*|ask man for name|.*contact.*|.*address.*|$who is the man.*|^where is.*",
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
 	".*eliza.*",
	"I am sorry to hear you are depressed. Tell me more about your family."
    ],
    [
	"^are you there.*",
	"(Are you addressing the man? He seems to be working hard on something.  Or maybe he's just ignoring you)."
    ],
    [
	"^(?:get |take |look |browse |buy )(.*)(?:book.*|participant.*)",
	"The man turns around and a bit too eagerly asks, 'would you like me to sign that?' He grabs the book, scribbles something illegible in it and then hands it back to you, beaming. You can <a href='https://www.press.uchicago.edu/ucp/books/book/chicago/P/bo44520895.html'>buy them</a> if you want.",
	"'That old thing?' The man says solicitously.  'Here, let me inscribe a copy for you' he says as he writes in the book and then hands it to you. They make a <a href='https://www.press.uchicago.edu/ucp/books/book/chicago/P/bo44520895.html'>great gift</a>." 
    ],
    [
	"^(?:read )(.*)(?:book.*|participant.*)", "Are you sure you want to do that?  Well, OK.  Several hours later you re-assess your priorities and decide that academia is not for you.",
	"You find yourself strangely engrossed and decide to visit your <a href='https://www.press.uchicago.edu/ucp/books/book/chicago/P/bo44520895.html'>favorite bookseller</a> in order to buy a copy."
    ],
    [
    "^(?:steal )(.*)(?:book.*|participant.*)",
	"The man looks around, and then with a surreptitous air of complicity, hands you a piece of paper with an <a href='http://gen.lib.rus.ec/search.php?req=christopher+kelty&open=0&res=25&view=simple&phrase=1&column=def'>address on it</a>. "
    ],
    [
	"^(?:.*participant.*)",
	"Interested in the book are you... judging from the situation, it seems the man is eager that you do so."
    ],
    [ ".*yellow.*",
      "Yes, it is an arresting color isn't it.  It is called #fef200."
    ],
    [
	".*twitter.*",
	"Oh, if you must, it is \@ckelty. But don't expect much."
    ],
    [
	"(?:ask |talk )(.*)(?:typing.*)",
	"It appears to be mostly gibberish.  Different windows are open with memos, some primitive javascript, a half-written paper, a tax form.  He is using emacs."
    ],
    [
	"(.*emacs.*)",
	"Excitedly, the man jumps up and rushes over to you.  With evident emotion, he embraces you and says, 'welcome, comrade!' and begins to relate in detail different aspects of his .emacs config file, orgmode philosophy, and various themes and customizations.  You die a silent, but mostly painless death."
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
	"^asdf$",
	"A fine keyboard you have there, try using simple two word commands"
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
	"It's pretty much as it was described.",
	"Not much has changed; a desk, computer, coffee cup, paper, books.",
	"Not much has changed since the last description.  There is now more text on the screen though."
    ],
    [
	"(.+)(?:look |inspect |observe |see |view |read)(.*)(?:paper)",
	"It looks like a CV.",
	"It looks like a bio.",
	"It's a CV. Maybe try 'read cv' or 'read bio'?"
	
    ],
    
    [
	".*orcs.*",
	"From nowhere, an incredibly ugly and vicious orc appears and kills you. Perhaps you should try the  <a href='http://kelty.org/kelty.html'>normal website</a> instead."
    ],

    [
	"xyzzy", "You have entered cheat mode.  Would you like to a) get publications; b) Join one of the Kelty cults in exchange for your soul; or c) move instantly to a tenured job at a far away university?"
    ],
    [
	"^a$",
	"Tht key hs been disbled by mngement."
    ],
    [
	"^b$",
	"Oooh, I wouldn't press that if I were you",
	"Really?",
	"You have been annihilated by a horde of zombie academics, return to the beginning of the chapter"
    ],
    
    [
	"^c$",
	"That way lies madness."
    ],

    [
	".*dance.*",
	"If you are asking the man to dance, it may be too early---or too late---in your relationship with him.  Maybe start slower?"
    ],
    [
	"^(?:observe |view |look |read |)(.*)(?:computer.*)",
	"It's a computer with lots of windows open.  The man is switching between them and typing something inscrutable.",
	"The computer screen is displaying what appears to be a website structured as an old-fashioned text adventure game of very primitive construction.",
	"The computer screen is filled with gobbledygook."
	
    ],
    [
	"^close (.*)door.*|^close (.*)window.*",
	"The man opens it again and glares discontentedly at you.",
	"Ooh that's a little creepy don't you think. I mean, do you know this guy?"
    ],
    [
	"^computer$",
	"Are you addressing the computer?  It appears to be a late model Macintosh, not the USS Enterprise."
    ],
    [
	"^how old are you.*|^how old (.*)man.*",
	"That fact you can discern yourself from this very website, using a bit of subtraction."

    ],
    [
	"^hug (.*)man.*",
	"In this day and age, the man prefers to keep everything to a simple handshake."
    ],
    [
	"^i (hate|love) you.*",
	"Strong emotions.  The man gives you a look of sympathy, as if he would like to reciprocate, but then goes back to typing."
    ],
    // [
    // 	"^(?:get |take |look |browse )(.*)(?:book.*)",
    // 	"Most of the books appear to be from the 1990s.",
    // 	"There are a lot of books.  Not sure where to start.",
    // 	"All these books look pretty predictable, you might have more luck at your library."
    // ],
    [
	"^(?:get |take |break |turn off |smash |hit |slap |grab |steal )(.*)(?:computer.*)",
	"That seems like a very bad idea.",
	"You head for the computer, but the man turns towards you and says 'Really?'"
    ],
    // [
    // 	"^(?:read |pick |choose| )(.*)(?:book.*)",
    // 	"You randomly take one off the shelf.  It turns out to be a second-rate ethnography from the 1980s.  You don't have time for this.",
    // 	"You randomly take one off the shelf. It appears to be in German.",
    // 	"You randomly take one off the shelf. It's a vintage copy of a book about packet switching. As if.",
    // 	"You browse the shelf and settle on a very dog-eared copy of Veblen's <em>The Theory of the Leisure Class</em>. Several hours later you emerge enlightened.",
    // 	"You browse the extensive collection and decide that the appropriate book would be Huizinga's <em>Homo Ludens</em>.  You settle in for a read."
    // ],
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
	"^(?:get |touch |hit |punch |kick |slap |attack )(.*)(?:man.*)",
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
	"^run$|^pwd$|^ls$|^man$|^list$|^dir$|^cat$|^cd$|chdir$|^clear$",
	"It's actually not a command line, it's a prompt in a game.",
	"Ah, a partisan of the command line, I see.  Alas, the man is monolingual"
	
    ],
    [
	".*thank you.*",
	"The man replies, 'You are most welcome,' and returns to typing"
    ],
    
    [
	"^i$|^inventory$|^list$",
	"You are carrying one or more of the following:  a copy of <i>Two Bits</i>, a student ID card, an application for a post-doctoral position, a request for a letter of recommendation, a can of spam, a jewel-encrusted egg, and two US dollars",
	"You have:<br /> 1. no tea <br />2. a splitting headache."
    ],
    [
	".*zork.*",
	"It is pitch black. You are likely to be eaten by a grue.",
	"oh no! you have walked into the slavering fangs of a grue.",
	"This is part of a maze of twisty little passages, all alike."
	
    ],
    
    [
	"^why (.*)$",
	"Why is the sky blue, why do birds suddenly appear, why ask why?",
	"Why not? (You knew that was coming didn't you)"	
	
    ],
    
    [
	"^look (.*)door$",
	"There is a sign on the door."
    ],
    
    [
	"^read (.*)sign$",
	"The sign says 'Christopher Kelty, Professor. Office Hours by Appointment. LSB 3314'"
    ],
    [
	"^get (.*)$",
	"You cannot get the $1.",
	"the $1 is nailed down.",
	"You are carrying too much to get the $1."
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
