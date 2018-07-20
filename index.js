const config = require('./config');

class BlueSnapSDK {

    /**
     * @class BlueSnapSDK
     * @param {string} apiUsername The BlueSnap API username
     * @param {string} apiPassword The BlueSnap API password
     * @param {string} merchantId The BlueSnap merchant id
     * @param {string} storeId The BlueSnap store id
     * 
     * @example
     * const client = new BlueSnapSDK('your-api-username', 'your-api-password', 'your-store-id', 'your-merchant-id');
     */
    constructor(apiUsername, apiPassword, merchantId, storeId) {

        config.ApiUsername = apiUsername;
        config.ApiPassword = apiPassword;
        config.MerchantId = merchantId;
        config.StoreId = storeId;
    }

    get planService() {
        return require('./lib/planService');
    }

    get subscriptionService(){
        return require('./lib/subscriptionService');
    }

}

module.exports = BlueSnapSDK;
