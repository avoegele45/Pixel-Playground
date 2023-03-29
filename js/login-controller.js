import { CookieManager } from "./cookie-manager.js";

export class LoginController {

    static login(username, password) {
        CookieManager.setCookieKey("username", username);
        CookieManager.setCookieKey("password", password);

        console.log(CookieManager.getCookieObject());
    }
}