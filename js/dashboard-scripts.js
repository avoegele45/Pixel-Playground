import { DBProxy } from "./db.js"

let userInfo = DBProxy.getLoginInfo();

if (userInfo == null) {
    // force redirect to login.html
    window.location.replace("login.html");
    console.log("Not signed in.");
}

let Fscore = 0;
let Tscore = 0;
let Bscore = 0;
document.getElementById("Frogger_score").innerHTML = Fscore;
document.getElementById("Tetris_score").innerHTML = Tscore;
document.getElementById("Breakout_score").innerHTML = Bscore;