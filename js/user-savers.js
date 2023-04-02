import { DBProxy } from "./db";

export class TetrisSaver {

    static tableName = "tetris"
    static keyName = "high-score";

    static save(score) {
        let username = DBProxy.getLoginInfo().username;
        
        DBProxy.saveData(TetrisSave.tableName, username, TetrisSaver.keyName, score);
    }

    static get() {
        let username = DBProxy.getLoginInfo().username;

        return DBProxy.getData(TetrisSaver.tableName, username, TetrisSaver.keyName);
    }
}