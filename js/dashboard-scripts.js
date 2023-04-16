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

import { Mute } from "./audio-script.js";
let mutebutton = document.getElementById("mute-button");

Mute.userAudio.loadAudioSettings(mutebutton);
Mute.userAudio.toggleMute(mutebutton);

// Changing and managing dashboard themes:
const standardBtn = document.getElementById('standard');
const lightBtn = document.getElementById('light');
const frogBtn = document.getElementById('frog');
const tronBtn = document.getElementById('tron');
const link = document.querySelector('link[rel="stylesheet"]');

if (Savers.Theme.get() != null) {
  link.href = Savers.Theme.get();
}

standardBtn.addEventListener('click', function() {
  link.href = 'styles/dashboard-styles.css';
  Savers.Theme.save('styles/dashboard-styles.css');
});

lightBtn.addEventListener('click', function() {
  link.href = 'styles/retro-lightmode-style.css';
  Savers.Theme.save('styles/retro-lightmode-style.css');
});

frogBtn.addEventListener('click', function() {
  link.href = 'styles/frog-theme-style.css';
  Savers.Theme.save('styles/frog-theme-style.css');
});

tronBtn.addEventListener('click', function() {
  link.href = 'styles/tron-theme-style.css';
  Savers.Theme.save('styles/tron-theme-style.css');
});