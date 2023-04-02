import { DBProxy } from "./db.js";

export class LoginController {

    static login(username, password) {
        if (DBProxy.validateLogin(username, password)) {
            DBProxy.saveLoginInfo(username, password)
        }
    }
}