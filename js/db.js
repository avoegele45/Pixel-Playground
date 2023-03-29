export class DBProxy {
    static validateLogin(username, password) {
        return MockDB.validateLogin(username, password)
    }
}

class MockDB {
    static validateLogin(username, password) {
        return true;
    }
}

class RealDB {
    
}