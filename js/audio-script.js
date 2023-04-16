import { DBProxy } from "./db.js";

let audioSettings = document.getElementById("audio");

class AudioSettingsSaver {
    constructor(tableName) {
        this.tableName = tableName;
        this.keyName = "audio"
    }
    
    
    
    save(audioSettings) {
        let username = DBProxy.getLoginInfo().username;

        DBProxy.saveData(this.tableName, username, this.keyName, audioSettings);
    }

    get() {
        let username = DBProxy.getLoginInfo().username;

        return DBProxy.getData(this.tableName, username, this.keyName);
    }

    loadAudioSettings(muteButton){
        window.addEventListener("load", (e)=> {
            Mute.userAudio.get() == "true" ? audioSettings.mute = true : audioSettings.play();
            Mute.userAudio.get() == "true" ? muteButton.innerHTML = "Play" : muteButton.innerHTML = "Mute";
        });
    }

    toggleMute(muteButton){
        muteButton.addEventListener("click", (e) => {
            let userSettings;
            if (audioSettings.muted === false) {
                audioSettings.muted = true;
                userSettings = "true";
                muteButton.innerHTML = "Play";
            }
            else{
                audioSettings.muted = false;
                userSettings = "false";
                muteButton.innerHTML = "Mute";
                audioSettings.play();
            }
            this.save(userSettings);
        });
    }

}

export class Mute {
    static userAudio = new AudioSettingsSaver("mute-settings");
}
