const SERVER_URL = 'https://sandbox.bluesnap.com/services/2/';
let _apiUsername;
let _apiPassword;
let _storeId;
let _merchantId;

module.exports = class Config {

    static set ApiUsername(value) {
        _apiUsername = value;
    }

    static get ApiUsername() {
        return _apiUsername;
    }

    static get ApiPassword() {
        return _apiPassword;
    }

    static set ApiPassword(value) {
        _apiPassword = value;
    }

    static get authToken() {
        let dataString = `${this.ApiUsername}:${this.ApiPassword}`;
        let authToken = new Buffer(dataString).toString('base64');

        return authToken;
    }

    static get StoreId() {
        return _storeId;
    }

    static set StoreId(value) {
        _storeId = value;
    }


    static get MerchantId() {
        return _merchantId;
    }

    static set MerchantId(value) {
        _merchantId = value;
    }

    static get ServerUrl() {
        return SERVER_URL;
    }

}