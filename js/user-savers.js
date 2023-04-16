import { DBProxy } from "./db.js";

class HighScoreSaver {
    constructor(tableName) {
        this.tableName = tableName;
        this.keyName = "high-score"
    }

    save(score) {
        let username = DBProxy.getLoginInfo().username;

        DBProxy.saveData(this.tableName, username, this.keyName, score);
    }

    get() {
        let username = DBProxy.getLoginInfo().username;

        return DBProxy.getData(this.tableName, username, this.keyName);
    }
}


class ThemeSaver {
    constructor(tableName) {
        this.tableName = tableName;
        this.keyName = "dashtheme";
    }

    save(dashtheme) {
        let username = DBProxy.getLoginInfo().username;

        DBProxy.saveData(this.tableName, username, this.keyName, dashtheme);
    }

    get() {
        let username = DBProxy.getLoginInfo().username;

        return DBProxy.getData(this.tableName, username, this.keyName);
    }
}

export class TetrisSaver {

    static save(score) {
        let username = DBProxy.getLoginInfo().username;

        DBProxy.saveData("tetris", username, "high-score", score);
    }

    static get() {
        let username = DBProxy.getLoginInfo().username;

        return DBProxy.getData("tetris", username, "high-score");
    }

    static savePlayfield(playfield) {
        let username = DBProxy.getLoginInfo().username;

        DBProxy.saveData("tetris", username, "playfield", MatrixEncoder.encode(playfield)); 
    }

    static getPlayfield(mRows, mCols) {
        let username = DBProxy.getLoginInfo().username;

        let encodedString = DBProxy.getData("tetris", username, "playfield");

        if (encodedString !== null && encodedString !== "" && encodedString !== undefined) {
            let playfield = MatrixDecoder.decode(mRows, mCols, encodedString);
            return playfield;
        }
    }

    static saveAll(score, playfield) {
        let username = DBProxy.getLoginInfo().username;

        DBProxy.saveData("tetris", username, "high-score", score);
        DBProxy.saveData("tetris", username, "playfield", MatrixEncoder.encode(playfield));
    }

    static getAll(mRows, mCols) {
        let returnData = {
            score: 0,
            playfield: []
        };
        let username = DBProxy.getLoginInfo().username;

        returnData.score = DBProxy.getData("tetris", username, "high-score");
        returnData.score = returnData.score ? returnData.score : 0;

        let encodedString = DBProxy.getData("tetris", username, "playfield");

        if (encodedString !== null && encodedString !== "" && encodedString !== undefined) {
            returnData.playfield = MatrixDecoder.decode(mRows, mCols, encodedString);
        }

        console.log(returnData);

        return returnData;        
    }

}

class BreakoutSaver {

    static save(score, playfield) {

    }

    static get() {

    }

}

class AudioSettingsSaver {
    constructor(tableName) {
        this.tableName = tableName;
        this.keyName = "audio"
    }
    
    
    
    save(audioSettings) {
        let username = DBProxy.getLoginInfo().username;

        DBProxy.saveData(this.tableName, username, this.keyName, audioSettings);
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

class MatrixEncoder {
    static encode(matrix) {
        let encodedString = "";

        let len = matrix.length;
        let width = matrix[0].length;

        for (let i = 0; i < len; i++) {
            for (let j = 0; j < width; j++) {
                encodedString += matrix[i][j];
            }
        }

        return encodedString;
    }
}

class MatrixDecoder {
    static decode(len, width, encodedString) {
        let decodedMatrix = [];

        // init matrix
        for (let i = 0; i < len; i++) {
            decodedMatrix[i] = []
            for (let j = 0; j < width; j++) {
                decodedMatrix[i][j] = 0;
            }
        }

        // keeps track of where we are in the string
        let cursor = 0;

        for (let i = 0; i < len; i++) {
            for (let j = 0; j < width; j++) {
                let gridSquare = encodedString.charAt(cursor);

                // if this is a string, a null check fails and it attempts to color in blank spaces
                if (gridSquare === "0") {
                    gridSquare = 0;
                }

                decodedMatrix[i][j] = gridSquare;
                cursor++;
            }
        }

        return decodedMatrix;
    }
}

export class Savers {
    static Frogger = new HighScoreSaver("frogger");
    static Breakout = new HighScoreSaver("breakout");
    static Tetris = new HighScoreSaver("tetris");
    static Theme = new ThemeSaver("themes");
    static InfoTheme = new ThemeSaver("infotheme");
    static SettingsTheme = new ThemeSaver("settingstheme");
    static UserAudio = new AudioSettingsSaver("mute-settings");
}

