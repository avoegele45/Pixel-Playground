import { DBProxy } from "./db.js"

let userInfo = DBProxy.getLoginInfo();

if (userInfo == null) {
    // force redirect to login.html
    window.location.replace("login.html");
    console.log("Not signed in.");
}

import { Savers } from "./user-savers.js";

let BsavedScore = Savers.Breakout.get();
let Bscore = BsavedScore ? BsavedScore: 0;

let TsavedScore = Savers.Tetris.get();
let Tscore = TsavedScore ? TsavedScore: 0;

let FsavedScore = Savers.Frogger.get();
let Fscore = FsavedScore ? FsavedScore: 0;

document.getElementById("Frogger_score").innerHTML = Fscore;
document.getElementById("Tetris_score").innerHTML = Tscore;
document.getElementById("Breakout_score").innerHTML = Bscore;