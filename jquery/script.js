// $("h1").css("color","red");


//If the script tag of js and jquery is in the head tag.
// $(document).ready(function() {
//     $("h1").css("color","red");
// })

// $("button").text("Don't Click Me!");

// $("button").html("<em>Hey</em>");

// $("h1").click(function() {
//     $("h1").css("color","purple");
// });

// for(var i=0;i<5;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function() {
//         document.querySelector("h1").style.color = "purple";
//     })
// }

// $("button").click(function(){
//     $("h1").css("color","purple");
// });

// $("input").keypress(function(event) {
//     console.log(event.key);
// });

//For checking keypress at any point in the webpage we can add "body" or document instead of "input".
// $("body").keypress(function(event) {
//     console.log(event.key);
// });
// $("body").keypress(function(event) {
//     $("h1").text(event.key);
// });

// $("h1").on("mouseover",function() {
//     $("h1").css("color","red");
// });

//adding new button before h1 tag
// $("h1").before("<button>New</button>");

// $("h1").after("<button>New</button>");

// $("h1").prepend("<button>New</button>");

// $("h1").append("<button>New</button>");

// Animations

// $("button").on("click",function() {
//     $("h1").css("color","purple");
// });

// TO HIDE THE SELECTED ELEMENT
// $("button").on("click",function() {
//     $("h1").hide();
// });
// RELATED OPPOSITE  - show()

// TOGGLE THE HIDE AND SHOW
// $("button").on("click",function() {
//     $("h1").toggle();
// });

// LESS AGGRESSIVE DISAPPEARENCE 
// $("button").on("click",function() {
//     $("h1").fadeOut();
// });
// RELATED OPPOSITE - fadeIn()

// TOGGLE THE FADE
// $("button").on("click",function() {
//     $("h1").fadeToggle();
// });

// TO COLLAPSE THE ELEMENT
// $("button").on("click",function() {
//     $("h1").slideUp();
// });
// RELATED OPPOSITE - slideDown()

// TOGGLE THE SLIDE
// $("button").on("click",function() {
//     $("h1").slideToggle();
// });


// CUSTOM CSS
// the new  css rules to implement goes inside the curly braces
// $("button").on("click",function() {
//     $("h1").animate({opacity: 0.5});
// });

// In the curly braces we can only add css properties that have numeric value
// we cant add something like color: red 


// CHAIN OF ANIMATIONS
$("button").on("click",function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
// the animation happens in order it is written