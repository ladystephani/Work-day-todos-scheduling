//step 1: show current day in jumbotron using moment.js
$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

//step 3.2: make input bg change according to past,current & upcoming block

//step 4.1: add localStorage. Select input using jQuery.
var inputEl = $('input[name="first-block"]');
//var inputFirstBlock = inputEl.val();//similar to .value in JS, but doesn't log through a variable
//console.log(inputFirstBlock);
$('button[name="first-event"]').on("click", function(event) {
    event.preventDefault();
    //console.log("First event", inputEl.val());//somehow only logs on the element.val()
    localStorage.setItem("firstBlockEvent", inputEl.val());//-- the problem was that localStorage stores key, but doesn't store the input value(doesn't even log to console...)

})
