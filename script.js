//step 1: show current day in jumbotron using moment.js
$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

//step 3.2: make input bg change according to past,current & upcoming block
var now = moment().format("HH");
//console.log(now);

// reference time-block, i.e. take all 9 timeblocks' textarea using jQuery $('text-area') or .time-block
var allBlocks = $(".time-block");

for (var i = 0; i < 9; i++) {
    //console.log(allBlocks.index(i));

    var oneBlock = allBlocks[i];
    //console.log(oneBlock);
    //console.log(oneBlock.dataset.hour);//.dataset works! it seems that the jQuery wrapper on $(".time-block") doesn't get recognized after being assigned to variable, so .data('hour') gives error "... .data() is not a function"
    //console.log(allBlocks[i].dataset.hour);
    if (oneBlock.dataset.hour < now) {//tried to add (... || (oneBlock.dataset.hour === 9)) but still showed 0th index data is not smaller than present time
        oneBlock.setAttribute('class','form-control time-block bg-primary');//since not recognizing the jQuery wrapper, need to not use jQuery's attr() but setAttribute
        //!wondering why referring to allBlocks.setAttribute() here doesn't recognize jQuery but referring to textEl1.text() does? (and therefore requires .text() instead of .textContent...)
    } else if (oneBlock.dataset.hour === now) {
        oneBlock.setAttribute('class','form-control time-block bg-warning');
    }  else {
        oneBlock.setAttribute('class','form-control time-block bg-danger');
    }
}

//step 4.1: add localStorage
//var textEl1 = $('textarea[data-hour="09"]');
//console.log(btn[8]);
//console.log( btn.parent() );
//console.log( btn.parent().siblings().closest('textarea') );
//console.log( (btn.parent().siblings().closest('textarea'))[0] );
//var keys = btn.parent().parent().attr("id"); //doesn't take in all buttons, so need .each()
//for (var i = 0; i < 9; i++) { //if using js, would need for loop
    //console.log(textarea[i]);
//}

var btn = $('button');//array of button tags
var textarea = btn.parent().siblings().closest('textarea');
var keys = [];
$.each(btn, function() {
    keys.push($(this).attr("name"));//each button's name
    //console.log(keys);
})
btn.on("click", function(event) {
    event.preventDefault();
    //console.log("testing")//don't need loop - each button was added an event handler w/o for loop! jQuery improved on js with .on() method
    localStorage.setItem( keys, textarea.val() );
})
//each textarea refers to one row in localStorage
//then, each textarea is shown the key's related value at the related index









function saved() {
    var eventContent= localStorage.getItem("timeBlockEvent");
    //textarea.text(eventContent);//use jQuery .text() here becuz necessary now due to textEl1 is grabbed by jQuery
    //console.log(eventContent);
    
    
}
function init(){
    saved();
}
init();