import { DBProxy } from "./db.js";

export class TetrisSaver {

    static tableName = "tetris";
    static keyName = "high-score";

    static save(score) {
        let username = DBProxy.getLoginInfo().username;
        
        DBProxy.saveData(TetrisSaver.tableName, username, TetrisSaver.keyName, score);
    }

    static get() {
        let username = DBProxy.getLoginInfo().username;

        return DBProxy.getData(TetrisSaver.tableName, username, TetrisSaver.keyName);
    }
}

export class FroggerSaver {

    static tableName = "frogger";
    static keyName = "high-score";

    static save(score) {
        let username = DBProxy.getLoginInfo().username;

        DBProxy.saveData(FroggerSaver.tableName, username, FroggerSaver.keyName, score);
    }

    static get() {
        let username = DBProxy.getLoginInfo().username;

        return DBProxy.getData(FroggerSaver.tableName, username, FroggerSaver.keyName);
    }

}