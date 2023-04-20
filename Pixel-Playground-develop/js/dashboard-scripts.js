import { DBProxy } from "./db.js"
import { Savers, TetrisSaver } from "./user-savers.js";

let userInfo = DBProxy.getLoginInfo();

if (userInfo == null) {
    // force redirect to login.html
    window.location.replace("login.html");
    console.log("Not signed in.");
}

let BsavedScore = Savers.Breakout.get();
let Bscore = BsavedScore ? BsavedScore : 0;

let TsavedScore = TetrisSaver.get();
let Tscore = TsavedScore ? TsavedScore : 0;

let FsavedScore = Savers.Frogger.get();
let Fscore = FsavedScore ? FsavedScore : 0;

let PSavedScore = Savers.Pong.get();
let Pscore = PSavedScore ? PSavedScore : 0;

let HSavedScore = Savers.Helicopter.get();
let Hscore = HSavedScore ? HSavedScore : 0;

let SnSavedScore = Savers.Snake.get();
let SnScore = SnSavedScore ? SnSavedScore : 0;

document.getElementById("Frogger_score").innerHTML = Fscore;
document.getElementById("Tetris_score").innerHTML = Tscore;
document.getElementById("Breakout_score").innerHTML = Bscore;
document.getElementById("Pong_score").innerHTML = Pscore;
document.getElementById("Helicopter_score").innerHTML = HSavedScore;
document.getElementById("Snake_score").innerHTML = SnScore;

let mutebutton = document.getElementById("mute-button");

Savers.UserAudio.loadAudioSettings(mutebutton);
Savers.UserAudio.toggleMute(mutebutton);

// Changing and managing dashboard themes:
const link = document.querySelector('link[rel="stylesheet"]');

if (Savers.Theme.get() != null) {
  link.href = Savers.Theme.get();
}
