//step 1: show current day in jumbotron using moment.js
$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

//step 3.2: make input bg change according to past,current & upcoming block
var now = moment().format("HH");
console.log(now);

// reference time-block, i.e. take all 9 timeblocks' textarea using jQuery $('text-area') or .time-block
var allBlocks = $(".time-block");

for (var i = 0; i < 9; i++) {
    //console.log(allBlocks.index(i));

    var oneBlock = allBlocks[i];
    //console.log(oneBlock);
    //console.log(oneBlock.dataset.hour);//.dataset works! it seems that the jQuery wrapper on $(".time-block") doesn't get recognized after being assigned to variable, so .data('hour') gives error "... .data() is not a function"
    //console.log(allBlocks[i].dataset.hour);
    if (oneBlock.dataset.hour < now) {//tried to add (... || (oneBlock.dataset.hour === 9)) but still showed 0th index data is not smaller than present time
        oneBlock.setAttribute('class','form-control time-block bg-primary');//since not recognizing the jQuery wrapper, need to also not use attr() but setAttribute
    } else if (oneBlock.dataset.hour === now) {
        oneBlock.setAttribute('class','form-control time-block bg-warning');
    }  else {
        oneBlock.setAttribute('class','form-control time-block bg-danger');
    }
}

//step 4.1: add localStorage
var textEl1 = $('textarea[data-hour="09"]');
$('button[name="first-timeBlock-event"]').on("click", function(event) {
    event.preventDefault();
    //console.log("First event", textEl.val());//somehow only logs on the element.val()
    localStorage.setItem("timeBlockEvent", textEl1.val());//-- the problem was that localStorage stores key, but doesn't store the input value(doesn't even log to console...)
})


function saved() {
    var eventContent= localStorage.getItem("timeBlockEvent");
    textEl1.text(eventContent);//use jQuery .text() here becuz necessary now due to textEl1 is grabbed by jQuery
    console.log(eventContent);
    //for (var i = 0; i < 9; i++) {
        
    

        
    //}
    
}
function init(){
    saved();
}
init();