const Util = require('./util');

const URL = 'recurring/subscriptions/';

module.exports = class SubscriptionService {

    /**
     * Get list of subscriptions
     * 
     * @static
     * 
     * @param {number} pagesize Page size
     * @param {boolean} gettotal Getting of total count
     * @param {boolean} fulldescription Getting of full description
     * @param {string} status ACTIVE/INACTIVE
     * @param {string} before Id of plan to show after
     * @param {string} after Id of plan to show before
     * @param {string} shopperid Shopper id
     * @param {string} planId Plan id
     * 
     * @returns {Promise} List of subscriptions
     */
    static getSubscriptionList(pagesize = 10, gettotal = true, fulldescription = true, status = '', before = '', after = '', shopperid = '', planId = '') {
        return Util.executeRequest(URL, 'GET', { pagesize, gettotal, fulldescription, status, after, before, shopperid, planId });
    }


    /**
     * Get subscription by id
     * 
     * @static
     * 
     * @param {string} subscriptionId Subscription id
     * 
     * @returns {Promise} Subscription 
     */
    static getSubscriptionById(subscriptionId) {
        return Util.executeRequest(URL + subscriptionId, 'GET');
    }


    /**
     * Create new subscription
     * 
     * @static
     * 
     * @param {Subscription} subscriptionModel
     * 
     * @returns {Promise} Created subscription 
     */
    static createSubscription(subscriptionModel) {
        return Util.executeRequest(URL, 'POST', subscriptionModel);
    }


    /**
     * Update subscription
     * 
     * @static
     * 
     * @param {string} subscriptionId 
     * @param {Subscription} subscriptionModel
     * 
     * @returns {Promise} Updated billing plan 
     */
    static updateSubscription(subscriptionId, subscriptionModel) {
        return Util.executeRequest(URL + subscriptionId, 'PUT', subscriptionModel);
    }


    /**
     * Get charges for subscription
     * 
     * @static
     * 
     * @param {string} subscriptionId Subscription id
     * @param {number} pagesize Page size 
     * @param {boolean} gettotal Getting of total count
     * @param {boolean} fulldescription Getting of full description
     * @param {string} status ACTIVE/INACTIVE
     * @param {string} before Id of plan to show before
     * @param {string} after Id of plan to show after
     * 
     * @returns {Promise} Subscription charges
     */
    static getSubscriptionCharges(subscriptionId, pagesize = 10, gettotal = true, fulldescription = true, status = '', before = '', after = '') {
        return Util.executeRequest(URL + subscriptionId + '/charges', 'GET', { pagesize, gettotal, fulldescription, status, after, before, shopperid, planId });
    }

    /**
     * Get specific charge for subscription bu charge id
     * 
     * @static
     * 
     * @param {string} subscriptionId Subscription id
     * @param {string} transactionid Charge id
     * 
     * @returns {Promise} Subscription charge 
     */
    static getSubscriptionChargeById(subscriptionId, transactionid) {
        return Util.executeRequest(URL + subscriptionId + '/charges', 'GET', { transactionid });
    }

}