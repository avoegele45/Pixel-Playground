export class CookieManager {
    
    /** 
    * Adds a key-value pair to the cookie
    * @param {string} key 
    * @param {string} value
    */
    
    static setCookieKey(key, value) {
        document.cookie = `${key}=${value};`
    }

    /** 
    * Returns an object containing all of the key-value pairs in the cookie
    * @return {Object} Cookie key-value pairs
    */
    static getCookieObject() {
        let cookie = {}

        let cookieString = document.cookie;

        if (cookieString == null || cookieString == "") {
            return null
        }

        let kvStrings = cookieString.split(";");
        
        kvStrings.forEach(kvString => {
            let splits = kvString.split("=");
            let key = splits[0].trim();
            let value = splits[1].trim();

            cookie[key] = value;
        });

        return cookie;
    }

}