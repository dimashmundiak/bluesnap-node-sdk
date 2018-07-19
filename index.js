const config = require('./config');
const planService = require('./lib/planService');

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


        planService.getPlanList()
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
    }





}

let test = new BlueSnapSDK('API_153183198573083631056', 'BlueSnapSB1', '581109', '42395');