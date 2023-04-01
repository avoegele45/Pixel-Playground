export class DBProxy {

    static _db = CookieDB;

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

class CookieDB {
    static validateLogin(username, password) {
        return true;
    }

    static saveLoginInfo(username, password) {

    }

    static saveData(table, username, key, value) {
        
    }
}

class RealDB {
    
}