var imgSrc = 
"https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Johannes_Vermeer_-_Girl_with_pearl_earring.jpg/512px-Johannes_Vermeer_-_Girl_with_pearl_earring.jpg"

var imgWidth = 25;
var imgHeight = 24;
var rows = 4;
var columns = 5;

let array = ['a', 'b', 'c', 'd']
function randomize(puzzle){
  for(let i = puzzle.length - 1; i > 0 ; i--){

    let randomIndex = Math.floor(Math.random()*i)
    let accessedValue = puzzle[randomIndex]

    puzzle[randomIndex] = puzzle[i]
    puzzle[i] = accessedValue

  }
} 

randomize(array)
//console.log(array)

function init(){
  $("h1").html("Solve the Puzzle!");
  $("#final").hide();

  var puzzle = []
  for(var i = 0; i < rows; i++){
    for(var j = 0; j < columns; j++){
      puzzle.push("<div class='"+(i*columns+j)+" imgContainer'>"+
"<img src="+imgSrc+
" style='margin-left: -"+(j*imgWidth/columns)+"rem;"+
"margin-top: -"+(i*imgHeight/rows)+"rem;'></img></div>");

$("#drop-zone").append("<div class='"+(i*columns+j)+
" imgContainer'></div>");

    }
  }

  randomize(puzzle)

  puzzle.forEach(function(piece){
    $("#pieces").append(piece)
  })

  $(".imgContainer").css({
    "width": imgWidth / columns + "rem",
    "height": imgHeight / rows + "rem"
  });

 $("#pieces>.imgContainer").draggable();
}

$(function(){
$("#drop-zone > .imgContainer").droppable({
  drop: function(event, ui){
    console.log("hello")
    $(this).css({
      "background-color": "red !important"
      ui.draggable.css({"border":".1rem solid red"})
    })
}

  });
})

//ratio is about 0.85
$(document).ready(function(){
$("#final").click(init)
})
