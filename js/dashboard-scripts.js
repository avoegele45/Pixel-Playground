import { DBProxy } from "./db.js"
import { Savers, TetrisSaver } from "./user-savers.js";

let userInfo = DBProxy.getLoginInfo();

if (userInfo == null) {
    // force redirect to login.html
    window.location.replace("login.html");
    console.log("Not signed in.");
}

let BsavedScore = Savers.Breakout.get();
let Bscore = BsavedScore ? BsavedScore: 0;

let TsavedScore = TetrisSaver.get();
let Tscore = TsavedScore ? TsavedScore: 0;

let FsavedScore = Savers.Frogger.get();
let Fscore = FsavedScore ? FsavedScore: 0;

document.getElementById("Frogger_score").innerHTML = Fscore;
document.getElementById("Tetris_score").innerHTML = Tscore;
document.getElementById("Breakout_score").innerHTML = Bscore;

let audioSettings = document.getElementById("audio");
let mutebutton = document.getElementById("mute-button");
let usersettings = "";

window.addEventListener('load', (e)=> {
    if (Savers.UserAudio.get() == "true"){
        audioSettings.mute = true;
    }
    else{
        audioSettings.play();
    }
});

mutebutton.addEventListener("click", (e) => {
    if (audioSettings.muted === false) {
        audioSettings.muted = true;
        usersettings = "true";
        mutebutton.innerHTML = "Play";
    }
    else{
        audioSettings.muted = false;
        usersettings = "false";
        mutebutton.innerHTML = "Mute";
        audioSettings.play();
    }
    Savers.UserAudio.save(usersettings);
})

