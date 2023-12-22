///let title = document.querySelector(".title");
//let turn = "X" ;

//function game(id)
//{
    //let element = document.getElementById(id);
   // if (turn === "X" && element.innerHTML == "")
    //{
      //  element.innerHTML = "X";
       // turn = "O";
      //  title.innerHTML ="O";
   // }
   // else if(turn === "O" && element.innerHTML == ""){
   // title.innerHTML ="O";
   // turn = "X";
    //title.innerHTML ="X";
    //}
//}

let title = document.querySelector(".title");
let turn = "X" ;
let currentTitle = "";
function winner(){}

function game(id)
{
    let element = document.getElementById(id);

    currentTitle = title.innerHTML;

    if (turn === "X" && element.innerHTML == "")
    {
        element.innerHTML = "X";
        turn = "O";
        title.innerHTML = "O";
    }
    else if(turn === "O" && element.innerHTML == ""){
        element.innerHTML = "O";
        turn = "X";
        title.innerHTML = currentTitle; // Use the saved title value
    }
}