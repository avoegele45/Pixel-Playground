import { DBProxy } from "./db.js";



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

}

export class Mute {
    static userAudio = new AudioSettingsSaver("mute-settings");
}