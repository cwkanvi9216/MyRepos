var imgSrc = 
"https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Johannes_Vermeer_-_Girl_with_pearl_earring.jpg/512px-Johannes_Vermeer_-_Girl_with_pearl_earring.jpg"

var imgWidth = 25;
var imgHeight = 24;
var rows = 1;
var columns = 1;
var total = rows*columns
var count = 0;

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
  $(".picture").empty()
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

  $("#drop-zone > .imgContainer").droppable({
    drop: function(event, ui){
      var destNum = $(this).attr("class").split(" ")[0]

      var pieceNum = ui.draggable.attr("class").split(" ")[0]
    

    
        $(ui.draggable).css({
          "border-style":"none"
        })
        $(this).append(ui.draggable.find("img"))
        ui.draggable.addClass("invisible")
        count += 1

      if(count == total){
        $("h1").html("Great Job! Click to replay.")
        $("#final").show()
        $(".picture").empty()
      
      }
       else{
        
      $(this).css({"background-color":"goldenrod"})
      ui.draggable.css({"border":".1rem solid goldenrod"})
      }

    }
  });

//var attributes = $("#demo").attr("class").split(" ")
//console.log(attributes[3])

}
$(document).ready(function(){
$("#final").click(init)
})
