// manipulating text
$('h1').addClass("big-title margin-50");
 $('button').text("ncjf")
 $('button').html("<em>hey</em>");

// manipulating attributes
getting the value of the attribute
console.log($("img").attr("src"));
 $("a").attr("href","https://yahoo.com");

//adding click event listeners to html elements using jquery
 $('h1').click(function(){ //click is a listener
   $('h1').css("color","purple");
 });
//
 $('button').click(function(){
 $('h1').css('color','purple');
 });

//adding keypress event listeners
 $(document).keypress(function(event){
  console.log(event.key);
 });

 $('input').keypress(function(event){
   console.log(event.key);
 });

 $(document).keypress(function(event){
   $('h1').text(event.key);
 });

// on event listeners
 $(document).on("mouseover",function(){
   $('h1').css('color','red');
 });

 $('h1').before("<button>new</button>");
 $('h1').after("<button>new</button>");
 $('h1').prepend("<button>new</button>");
 $('h1').append("<button>new</button>");
 $('button').remove();

// $('button').on('click',function(){
//   $('h1').fadeToggle();
// });
//fadeIn//fadeOut//fadetoggle//slideUp//slideDown//slideToggle

// $('button').on('click',function(){
//   $('h1').animate({opacity:0.5});  //only those things that has a numeric value unlike color
// });//margin:"20%"

$('button').on('click',function(){
  $('h1').slideUp().slideDown().animate({opacity:0.5});
});

