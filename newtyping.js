window.addEventListener("load", loadUser);

function loadUser() {
  var x, fname = "C:/Users/DELL/Desktop/python basic file/newtyping.html";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      x = this.responseText;
      if (x == "A" || x == "B" || x == "C" || x == "D" || x == "E" || x == "F" || x == "G" || x == "H") {
        console.log(x);
        //if (x == "D") activateMYPAGE();
      } else {
        console.log("Z");
      }
    }
  };
  xhttp.open("POST", "C:/Users/DELL/Desktop/python basic file/newtyping.html", true);
  xhttp.withCredentials = true;
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("n=" + fname);
}

function activateMYPAGE() {
//  var txt = "";
//  document.getElementById("theworldsgreatest").style.display = "none";
//  document.getElementById("mypagediv").style.display = "block";
//  txt += "<img src='/images/mypagelogo32x32.png' alt='MYPAGE' style='vertical-align:text-bottom'>";
//  document.getElementById("mypagediv").innerHTML = txt;
}
//function of goagain...
function goAgain() {
  window.location = "C:/Users/DELL/Desktop/python basic file/newtyping.html";
}
function dblclickc() {
  document.getElementById("ctext").click();
}
document.getElementById("ctext").addEventListener("focus", function() {
  setBlink();
});

window.addEventListener("load", function() {
  //var x = mywords.sort(function() {return 0.5 - Math.random() });
  //x = x.slice(0, 200);
  //document.getElementById("nyarr").innerHTML = x;
  var x = ["fly","relate","house","expert","charge","interview","itself","because","job","consider","knowledge","color","low","late","hope","significant","understand","business","home","where","entire","tonight","want","heavy","such","sell","way","employee","by","civil","hold","executive","become","station","successful","enough","task","exactly","reflect","about","fear","let","perform","term","always","industry","spend","feeling","play","federal","performance","season","major","buy","ability","evidence","treat","wall","true","like","project","return","popular","whether","inside","especially","say","size","fast","really","activity","final","use","strategy","maintain","see","add","explain","conference","school","line","almost","economy","rise","various","claim","range","imagine","their","central","watch","art","right","century","scientist","thought","radio","rule","call","administration","light","concern","pick","coach","make","chair","suddenly","information","show","rock","pretty","ready","hang","finally","music","cold","join","professional","later","though","series","head","college","building","career","consumer","everyone","sure","area","maybe","history","wear","land","matter","save","realize","family","plan","risk","compare","prepare","simply","meet","last","however","score","rest","card","also","bring","begin","movement","moment","material","night","reduce","these","live","condition","yeah","food","than","morning","city","speak","enjoy","laugh","teacher","cell","health","well","summer","player","interesting","might","subject","movie","themselves","price","trip","address","anything","million","get","image","probably","recent","why","reveal","billion","write","hair","may","remove","car","response","just"];
  x = x.toString().replace(/,/g, " ");
  document.getElementById("atext").innerHTML = x;
  document.getElementById("ctext").focus();
  document.getElementById("ctext").style.height = w3_getStyleValue(document.getElementById("atext"), "height");
});

function clickc() {
  var c = document.getElementById("ctext");
  var caretPos = c.innerText.length;
  var el = c;
  var range = document.createRange();
  var sel = window.getSelection();
  if (el.childNodes[0]) {
    range.setStart(el.childNodes[0], caretPos);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
  }
}

var blinktimeout, blinkstyle = "";
var cursorPos = 0;
function setBlink(a) {
  var n = cursorPos;
  if (blinkstyle == "") blinkstyle = "background-color:rgba(30, 144, 255,0.2)";
  if (a == "stop") blinkstyle = "";
  document.getElementById("atext").innerHTML = document.getElementById("atext").innerText.substr(0, n) + "<span style='" + blinkstyle + "'>" + document.getElementById("atext").innerText.substr(n, 1) + "</span>" + document.getElementById("atext").innerText.substr(n + 1);
  if (a == "stop") return false;
  if (blinkstyle == "background-color:rgba(30, 144, 255,0.2)") {
    blinkstyle = "background-color:none";
  } else {
    blinkstyle = "background-color:rgba(30, 144, 255,0.2)";
  }
  blinktimeout = window.setTimeout(setBlink, 530);
}

var dheight = w3_getStyleValue(document.getElementById("dtext"), "height");
function checkScroll() {
  var c = document.getElementById("ctext");
  var d = document.getElementById("dtext");
  var wh = window.innerHeight;
  d.innerText = c.innerText + " passeord ";
  new_dheight = w3_getStyleValue(document.getElementById("dtext"), "height");
  var x = dheight.replace("px", "");
  var y = new_dheight.replace("px", "");
//  console.log((Number(y) + Number(750))  + " " + wh)
  if (y > x && ((Number(y) + Number(750))) > wh) {
    window.scrollBy(0, y-x);
  }
  dheight = w3_getStyleValue(document.getElementById("dtext"), "height");
}

var start = 0, keycount = 0, wcount, charcount, errcount;
function ku(e) {
  wcount = 0, charcount = 0, errcount = 0;
  keycount++;
  if (start == 0) {
    initCount();
    start = 1;
  }
  var a, b, c, i, txt = "", aARR, cARR;
  checkScroll();
  a = document.getElementById("atext").innerText;
  b = document.getElementById("btext").innerText;
  c = document.getElementById("ctext").innerText;
  if ((keycount + 5) < c.length) {
    c = "";
    document.getElementById("ctext").innerText = c;
  }
  cursorPos = c.length;
  window.clearTimeout(blinktimeout);
  blinkstyle = "";
  setBlink();
  for (i = 0; i < c.length; i++) {
    if (a[i] == c[i] || (a[i].charCodeAt(0) == 32 && c[i].charCodeAt(0) == 160)) {
      charcount++;
      txt += "<span class='corchar'>" + a[i] + "</span>";
    } else {
      errcount++;
      txt += "<span class='errchar'>" + a[i] + "</span>";
    }
      if (a[i] == " ") {c = c.substr(0, i) + "|" + c.substr(i+1);}
  }
  document.getElementById("btext").innerHTML = txt + a.substr(i);
  document.getElementById("characters").innerHTML = charcount;
  document.getElementById("errors").innerHTML = errcount;
  aARR = a.split(" ");
  cARR = c.split("|");
  for (i = 0; i < cARR.length; i++) {
    if (cARR[i].trim() == aARR[i].trim()) {
      wcount++;
    }
  }
  document.getElementById("words").innerHTML = wcount;
}

timelength = 59;
var ttimer;
function initCount() {
  document.getElementById("timefooter").innerHTML = "&nbsp;";
  document.getElementById("time").innerHTML = timelength;
  ttimer = window.setInterval(updateTimer, 1000);
}

function updateTimer() {
  timelength--;
  document.getElementById("time").innerHTML = timelength;
  if (timelength == 0) {
    stopTyping();
    window.clearInterval(ttimer);
    displayScore();
  }
}

function displayScore() {
  document.getElementById("startdiv").style.display = "none";
  document.getElementById("finishdiv").style.display = "block";
  window.scrollTo(0, 0);
}

function stopTyping() {
  document.getElementById("ctext").contentEditable = false;
  window.addEventListener("keydown", function(e) {
    if(window.event) { // IE                    
      keynum = e.keyCode;
    } else if(e.which){
      keynum = e.which;
    }
    if (keynum == 32) {
      e.preventDefault();
      return false;
    }
  });
}

function kd(e) {
  var cARR = [33,34,35,36,37,38,39,40];
  if(window.event) { // IE                    
    keynum = e.keyCode;
  } else if(e.which){
    keynum = e.which;
  }
  if (cARR.indexOf(keynum) > -1) {
    e.preventDefault();
    return false;
  }
  if (keynum == 86 && e.ctrlKey) {
    e.preventDefault();
    return false;
  }
  
}

function unfocus() {
  window.clearTimeout(blinktimeout);
  setBlink("stop");
}


function w3_getStyleValue(elmnt,style) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(elmnt,null).getPropertyValue(style);
    } else {
        return elmnt.currentStyle[style];
    }
}



mywords = [
"a",
"ability",
"able",
"about",
"above",
"accept",
"according",
"account",
"across",
"act",
"action",
"activity",
"actually",
"add",
"address",
"administration",
"admit",
"affect",
"after",
"again",
"against",
"age",
"agency",
"agent",
"ago",
"agree",
"agreement",
"ahead",
"air",
"all",
"allow",
"almost",
"alone",
"along",
"already",
"also",
"although",
"always",
"among",
"amount",
"analysis",
"and",
"animal",
"another",
"answer",
"any",
"anyone",
"anything",
"appear",
"apply",
"approach",
"area",
"argue",
"arm",
"around",
"arrive",
"art",
"article",
"artist",
"as",
"ask",
"assume",
"at",
"attack",
"attention",
"attorney",
"audience",
"author",
"authority",
"available",
"avoid",
"away",
"baby",
"back",
"bad",
"bag",
"ball",
"bank",
"bar",
"base",
"be",
"beautiful",
"because",
"become",
"bed",
"before",
"begin",
"behavior",
"behind",
"believe",
"benefit",
"best",
"better",
"between",
"beyond",
"big",
"bill",
"billion",
"bit",
"black",
"blue",
"board",
"body",
"book",
"born",
"both",
"box",
"boy",
"break",
"bring",
"brother",
"budget",
"build",
"building",
"business",
"but",
"buy",
"by",
"call",
"camera",
"campaign",
"can",
"candidate",
"capital",
"car",
"card",
"care",
"career",
"carry",
"case",
"catch",
"cause",
"cell",
"center",
"central",
"century",
"certain",
"certainly",
"chair",
"challenge",
"chance",
"change",
"character",
"charge",
"check",
"choice",
"choose",
"citizen",
"city",
"civil",
"claim",
"class",
"clear",
"clearly",
"close",
"coach",
"cold",
"collection",
"college",
"color",
"commercial",
"common",
"community",
"company",
"compare",
"computer",
"concern",
"condition",
"conference",
"consider",
"consumer",
"contain",
"continue",
"control",
"cost",
"could",
"country",
"couple",
"course",
"court",
"cover",
"create",
"cup",
"current",
"customer",
"cut",
"dark",
"data",
"day",
"dead",
"deal",
"debate",
"decade",
"decide",
"decision",
"deep",
"defense",
"degree",
"describe",
"design",
"despite",
"detail",
"determine",
"develop",
"development",
"difference",
"different",
"difficult",
"dinner",
"direction",
"director",
"discover",
"discuss",
"discussion",
"do",
"doctor",
"dog",
"door",
"down",
"draw",
"dream",
"drive",
"drop",
"during",
"each",
"early",
"east",
"easy",
"eat",
"economic",
"economy",
"edge",
"education",
"effect",
"effort",
"eight",
"either",
"election",
"else",
"employee",
"end",
"energy",
"enjoy",
"enough",
"enter",
"entire",
"environment",
"environmental",
"especially",
"establish",
"even",
"evening",
"event",
"ever",
"every",
"everybody",
"everyone",
"everything",
"evidence",
"exactly",
"example",
"executive",
"exist",
"expect",
"experience",
"expert",
"explain",
"eye",
"face",
"fact",
"factor",
"fail",
"fall",
"family",
"far",
"fast",
"father",
"fear",
"federal",
"feel",
"feeling",
"few",
"field",
"fight",
"figure",
"fill",
"film",
"final",
"finally",
"financial",
"find",
"fine",
"finish",
"fire",
"firm",
"first",
"fish",
"five",
"floor",
"fly",
"focus",
"follow",
"food",
"foot",
"for",
"force",
"foreign",
"forget",
"form",
"former",
"forward",
"four",
"free",
"friend",
"from",
"front",
"full",
"fund",
"future",
"game",
"garden",
"gas",
"general",
"generation",
"get",
"give",
"glass",
"go",
"goal",
"good",
"government",
"great",
"green",
"ground",
"group",
"grow",
"growth",
"guess",
"gun",
"guy",
"hair",
"half",
"hand",
"hang",
"happen",
"happy",
"have",
"he",
"head",
"health",
"hear",
"heart",
"heat",
"heavy",
"help",
"here",
"high",
"history",
"hit",
"hold",
"home",
"hope",
"hospital",
"hotel",
"hour",
"house",
"how",
"however",
"huge",
"human",
"hundred",
"husband",
"idea",
"identify",
"if",
"image",
"imagine",
"impact",
"important",
"improve",
"in",
"include",
"including",
"increase",
"indeed",
"indicate",
"individual",
"industry",
"information",
"inside",
"instead",
"institution",
"interest",
"interesting",
"international",
"interview",
"into",
"investment",
"involve",
"issue",
"it",
"item",
"its",
"itself",
"job",
"join",
"just",
"keep",
"key",
"kid",
"kind",
"kitchen",
"know",
"knowledge",
"land",
"language",
"large",
"last",
"late",
"later",
"laugh",
"law",
"lawyer",
"lay",
"lead",
"learn",
"least",
"leave",
"left",
"leg",
"less",
"let",
"letter",
"level",
"life",
"light",
"like",
"likely",
"line",
"list",
"listen",
"little",
"live",
"local",
"long",
"look",
"lose",
"loss",
"lot",
"low",
"machine",
"magazine",
"main",
"maintain",
"major",
"majority",
"make",
"man",
"manage",
"management",
"manager",
"many",
"market",
"material",
"matter",
"may",
"maybe",
"me",
"mean",
"measure",
"media",
"medical",
"meet",
"meeting",
"member",
"memory",
"mention",
"message",
"method",
"middle",
"might",
"million",
"mind",
"minute",
"mission",
"model",
"modern",
"moment",
"money",
"month",
"more",
"morning",
"most",
"mother",
"move",
"movement",
"movie",
"much",
"music",
"must",
"my",
"myself",
"name",
"natural",
"nature",
"near",
"nearly",
"necessary",
"need",
"network",
"never",
"new",
"news",
"newspaper",
"next",
"nice",
"night",
"no",
"none",
"nor",
"north",
"not",
"note",
"nothing",
"notice",
"now",
"number",
"occur",
"of",
"off",
"offer",
"office",
"officer",
"official",
"often",
"oh",
"oil",
"ok",
"old",
"on",
"once",
"one",
"only",
"onto",
"open",
"operation",
"opportunity",
"option",
"or",
"order",
"organization",
"other",
"others",
"our",
"out",
"outside",
"over",
"own",
"owner",
"page",
"pain",
"painting",
"paper",
"parent",
"part",
"participant",
"particular",
"particularly",
"partner",
"party",
"pass",
"past",
"patient",
"pattern",
"pay",
"peace",
"per",
"perform",
"performance",
"perhaps",
"person",
"personal",
"phone",
"physical",
"pick",
"picture",
"piece",
"place",
"plan",
"plant",
"play",
"player",
"point",
"popular",
"position",
"positive",
"possible",
"power",
"practice",
"prepare",
"present",
"pressure",
"pretty",
"prevent",
"price",
"private",
"probably",
"process",
"produce",
"product",
"production",
"professional",
"professor",
"program",
"project",
"property",
"protect",
"prove",
"provide",
"public",
"pull",
"purpose",
"push",
"put",
"quality",
"question",
"quickly",
"quite",
"radio",
"raise",
"range",
"rate",
"rather",
"reach",
"read",
"ready",
"real",
"reality",
"realize",
"really",
"reason",
"receive",
"recent",
"recently",
"recognize",
"record",
"red",
"reduce",
"reflect",
"region",
"relate",
"relationship",
"remain",
"remember",
"remove",
"report",
"represent",
"require",
"research",
"resource",
"respond",
"response",
"responsibility",
"rest",
"result",
"return",
"reveal",
"right",
"rise",
"risk",
"road",
"rock",
"role",
"room",
"rule",
"run",
"same",
"save",
"say",
"scene",
"school",
"science",
"scientist",
"score",
"sea",
"season",
"seat",
"second",
"section",
"security",
"see",
"seek",
"seem",
"sell",
"send",
"senior",
"sense",
"series",
"serious",
"serve",
"service",
"set",
"seven",
"several",
"shake",
"share",
"short",
"should",
"shoulder",
"show",
"side",
"sign",
"significant",
"similar",
"simple",
"simply",
"since",
"sing",
"single",
"sit",
"site",
"situation",
"six",
"size",
"skill",
"skin",
"small",
"smile",
"so",
"social",
"society",
"soldier",
"some",
"somebody",
"someone",
"something",
"sometimes",
"song",
"soon",
"sort",
"sound",
"source",
"space",
"speak",
"specific",
"speech",
"spend",
"sport",
"spring",
"staff",
"stage",
"stand",
"standard",
"star",
"start",
"state",
"statement",
"station",
"stay",
"step",
"still",
"stock",
"stop",
"store",
"story",
"strategy",
"street",
"strong",
"structure",
"student",
"study",
"stuff",
"style",
"subject",
"success",
"successful",
"such",
"suddenly",
//"suffer",
"suggest",
"summer",
"support",
"sure",
"surface",
"system",
"table",
"take",
"talk",
"task",
"tax",
"teach",
"teacher",
"team",
"technology",
"television",
"tell",
"ten",
"tend",
"term",
"test",
"than",
"thank",
"that",
"the",
"their",
"them",
"themselves",
"then",
"theory",
"there",
"these",
"they",
"thing",
"think",
"third",
"this",
"those",
"though",
"thought",
"thousand",
"threat",
"three",
"through",
"throughout",
"throw",
"thus",
"time",
"to",
"today",
"together",
"tonight",
"too",
"top",
"total",
"tough",
"toward",
"town",
"trade",
"traditional",
"training",
"travel",
"treat",
"treatment",
"tree",
"trial",
"trip",
"trouble",
"true",
"truth",
"try",
"turn",
"two",
"type",
"under",
"understand",
"unit",
"until",
"up",
"upon",
"us",
"use",
"usually",
"value",
"various",
"very",
"view",
"visit",
"voice",
"wait",
"walk",
"wall",
"want",
"watch",
"water",
"way",
"we",
"wear",
"week",
"weight",
"well",
"what",
"whatever",
"when",
"where",
"whether",
"which",
"while",
"who",
"whole",
"whom",
"whose",
"why",
"wide",
"will",
"win",
"wind",
"window",
"wish",
"with",
"within",
"without",
"wonder",
"word",
"work",
"worker",
"world",
"would",
"write",
"writer",
"wrong",
"yard",
"yeah",
"year",
"yes",
"yet",
"you",
"young",
"your",
"yourself"
]