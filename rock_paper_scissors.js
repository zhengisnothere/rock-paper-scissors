let choices=["rock","paper","scissors"];
let player_choice="";
let emoji_choices={
  null:"🖕",
  "rock":"✊",
  "paper":"✋",
  "scissors":"✌️"
};
let win_count=0, lose_count=0, tie_count=0;


function computer_decison(){
  let choice=Math.floor(Math.random()*3);
  return choices[choice];
}

function rock_clicked(){
  player_choice="rock";
}

function paper_clicked(){
  player_choice="paper";
}

function scissors_clicked(){
  player_choice="scissors";
}

function update_score_on_webpage(){
  document.getElementById("win count").innerHTML=win_count;
  document.getElementById("lose count").innerHTML=lose_count;
  document.getElementById("tie count").innerHTML=tie_count;
}

function compare_choices(pd,cd){
  let result="";
  if (cd==pd){
    result="Tie 🙃";
    tie_count++;
    } else if ((pd=="rock" && cd=="scissors") || (pd=="paper" && cd=="rock") || (pd=="scissors" && cd=="paper")){
    result="Win 😀";
    win_count++;
  } else{
    result="Lose ☹️";
    lose_count++;
  }
  return result
}

function update_emoji_on_webpage(eid, choice){
  document.getElementById(eid).innerHTML=emoji_choices[choice];
}

function game(){
  let computer_choice=computer_decison();
  let result=compare_choices(player_choice,computer_choice);
  update_emoji_on_webpage("player choice",player_choice);
  update_emoji_on_webpage("computer choice",computer_choice);
  document.getElementById("result").innerHTML=result;
  update_score_on_webpage()
}

function reset(){
  update_emoji_on_webpage("player choice",null);
  update_emoji_on_webpage("computer choice",null);
  document.getElementById("result").innerHTML="😅";
  win_count=0;
  lose_count=0;
  tie_count=0;
  update_score_on_webpage();
}
