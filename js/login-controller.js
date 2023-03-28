import { CookieManager } from "./cookie-manager.js";

export class LoginController {

    static login(username, password) {
        document.cookie = `username=${username};`; 
        document.cookie = `password=${password};`;
        document.cookie = 'SameSite=None;';
        console.log(document.cookie);
    }
}