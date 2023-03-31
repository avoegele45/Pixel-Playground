export class DBProxy {

    static _db = MockDB;

    static validateLogin(username, password) {
        return DBProxy._db.validateLogin(username, password);
    }

    static saveLoginInfo(username, password) {
        DBProxy._db.saveLoginInfo(username, password);
    }

    static saveData(table, username, key, value) {
        DBProxy._db.saveData(table, username, key, value);
    }
}

class MockDB {
    static validateLogin(username, password) {
        return true;
    }
}

class RealDB {
    
}