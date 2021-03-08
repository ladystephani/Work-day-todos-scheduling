//show current day in jumbotron using moment.js
$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

//make bg change according to past, current & upcoming block
var now = moment().format("HH");

// reference time-block, i.e. take all 9 timeblocks' textarea using jQuery $('text-area') or .time-block
var allBlocks = $(".time-block");

for (var i = 0; i < 9; i++) {

    var oneBlock = allBlocks[i];
    
    if (oneBlock.dataset.hour < now) {//tried to add (... || (oneBlock.dataset.hour === 9)) but still showed 0th index data is not smaller than present time
        oneBlock.setAttribute('class','form-control time-block bg-primary');//since not recognizing the jQuery wrapper, need to not use jQuery's attr() but setAttribute
        //!wondering why referring to allBlocks.setAttribute() here doesn't recognize jQuery but referring to textEl1.text() does? (and therefore requires .text() instead of .textContent...)
    } else if (oneBlock.dataset.hour === now) {
        oneBlock.setAttribute('class','form-control time-block bg-warning');
    }  else {
        oneBlock.setAttribute('class','form-control time-block bg-danger');
    }
}

//add localStorage
//each textarea refers to one row in localStorage
//then, each textarea is shown the key's related value at the related index

var btn = $('button');//array of button tags
var keys = [];
var textarea = [];
var eventContent= [];

function saved() {
    $.each(btn, function() {
        keys.push($(this).attr("name"));//use each button's assigned name attribute in HTML as key name
        textarea.push($(this).parent().siblings().closest('textarea'));
    })
    
    btn.on("click", function(event) {
        event.preventDefault();
        for (var i =0; i <9; i++) {
            localStorage.setItem( keys[i], textarea[i].val() );
        }
    })
}

function save() {
    //var content9 = localStorage.getItem(keys[0]);//eventContent = localStorage.getItem(keys[0]);
    //textarea[0].val(content9);//Reminder: refer to this model for displaying getItem!
    for (var i =0; i <9; i++) {
        eventContent.push(localStorage.getItem(keys[i]) );
        textarea[i].val(eventContent[i]);
    }
}
function init(){
    saved();
    
    save();
}
init();