import { CookieManager } from "./cookie-manager.js"

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
    static _createFullKey(table, username, key) {
        let prefix = `${table}-${username}`;
        let fullKey = `${prefix}-${key}`;

        return fullKey;
    }

    static validateLogin(username, password) {
        return true;
    }

    static saveLoginInfo(username, password) {
        CookieManager.setCookieKey("username", username);
        CookieManager.setCookieKey("password", password);
    }

    static saveData(table, username, key, value) {
        let fullKey = CookieDB._createFullKey(table, username, key);
        CookieManager.setCookieKey(fullKey, value);
    }

    static getData(table, username, key) {
        let fullKey = CookieDB._createFullKey(table, username, key);
        let cookie = CookieManager.getCookieObject();

        return cookie[fullKey];
    }
}

class RealDB {
    
}