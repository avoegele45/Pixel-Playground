import { CookieManager } from "./cookie-manager.js"

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

    static getLoginInfo() {
        let cookie = CookieManager.getCookieObject();

        if (cookie == null) {
            return null;
        }

        let loginInfo = {
            username: cookie["username"],
            password: cookie["password"]
        }
        
        return loginInfo
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
export class DBProxy {

    static _db = CookieDB;

    static validateLogin(username, password) {
        return DBProxy._db.validateLogin(username, password);
    }

    static saveLoginInfo(username, password) {
        DBProxy._db.saveLoginInfo(username, password);
    }

    static getLoginInfo() {
        return DBProxy._db.getLoginInfo();
    }

    static saveData(table, username, key, value) {
        DBProxy._db.saveData(table, username, key, value);
    }

    static getData(table, username, key) {
        return DBProxy._db.getData(table, username, key);
    }

}

class RealDB {
    
}