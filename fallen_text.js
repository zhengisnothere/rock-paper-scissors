let canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");

function run_game() {
  const spqwn_interval = setInterval(spawn_fallen_texts, 175);
  const draw_interval = setInterval(draw_fallen_texts, 10);
  const update_interval = setInterval(update_fallen_texts, 10);
}

function clear_canvas(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
}

let fallen_text_list = ["😀", "😅", "✋", "✌️", "✊", "🙏🥺", "🔥🔥🔥", "😢😭", "😂🤣", "👀", "🖕🤬", "🤔", "✨😎⬅️😘🥰", "😲", "😐☹️🙃", "😱", "😳😫😔", "🚫😍🐶➡️👧🏻", "❌👧🏻❤️➡️👤", "👦🏻❤️👨‍💻","👦🏻❤️📐", "💪➡️👤😭😱", "🏀➕🐔=❓", "第一个网站 \\(^_^)/", "计算机科学太水了","抽象的emoji", "hello world", "可恶的guidance", "万恶的数学", "最好的数学老师Toffolo", "小黑子", "IKUN","江苏盐城"]

class fallen_text {
  constructor() {
    this.fallen_text_symbol = fallen_text_list[Math.floor(Math.random() * fallen_text_list.length)];
    this.x=Math.random()*canvas.width;
    this.y=-50
    this.speed=Math.random()*2+1;
  }
  draw(){
    ctx.font = "30px Arial";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(this.fallen_text_symbol, this.x, this.y);
  }
}

function spawn_fallen_texts(){
  fallen_texts.push(new fallen_text());
}

function draw_fallen_texts(){
  clear_canvas()
  for(let i=0; i<fallen_texts.length; i++){
    fallen_texts[i].draw();
  }
}

function update_fallen_texts(){
  for(let i=0; i<fallen_texts.length; i++){
    fallen_texts[i].y+=fallen_texts[i].speed;
    if(fallen_texts[i].y>canvas.height+50){
      fallen_texts.splice(i,1);
    }
  }
}

let fallen_texts = [];
run_game();
