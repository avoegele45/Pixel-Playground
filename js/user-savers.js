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

export class Savers {
    static Tetris = new HighScoreSaver("tetris");
    static Frogger = new HighScoreSaver("frogger");
    static Breakout = new HighScoreSaver("breakout");
    static Theme = new ThemeSaver("themes");
}

