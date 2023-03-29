import { CookieManager } from "./cookie-manager.js";
import { DBProxy } from "./db.js";

export class LoginController {

    static login(username, password) {
        if (DBProxy.validateLogin(username, password)) {
            CookieManager.setCookieKey("username", username);
            CookieManager.setCookieKey("password", password);
        }

        console.log(CookieManager.getCookieObject());
    }
}