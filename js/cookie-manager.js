export class CookieManager {
   
    static setCookieKey(key, value) {
        document.cookie = `${key}=${value};`
    }

    static getCookieObject() {
        let cookie = {}

        let kvStrings = document.cookie.split(";");
        
        kvStrings.forEach(kvString => {
            let splits = kvString.split("=");
            let key = splits[0].trim();
            let value = splits[1].trim();

            cookie[key] = value;
        });

        return cookie;
    }

}