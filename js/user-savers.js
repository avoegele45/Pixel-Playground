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

class TetrisSaver {

    static save(score, playfield) {

    }

    static get() {
        
    }

}

class BreakoutSaver {

    static save(score, playfield) {

    }

    static get() {

    }

}

class MatrixEncoder {
    static encode(matrix) {

    }
}

class MatrixDecoder {
    static decode(len, width) {
        
    }
}

export class Savers {
    static Frogger = new HighScoreSaver("frogger");
}
