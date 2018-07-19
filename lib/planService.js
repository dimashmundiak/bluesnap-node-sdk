const Util = require('./util');

const URL = 'recurring/plans/';

module.exports = class PlanService {

    /**
     * Get list of billing plans
     * 
     * @static
     * 
     * @param {number} pagesize Page size
     * @param {boolean} gettotal Getting of total count
     * @param {boolean} fulldescription Getting of full description
     * @param {string} status ACTIVE/INACTIVE
     * @param {string} before Id of plan to show after
     * @param {string} after Id of plan to show before
     * 
     * @returns {Promise} List of billing plans
     */
    static getPlanList(pagesize = 10, gettotal = true, fulldescription = true, status = '', before = '', after = '') {
        return Util.executeRequest(URL, 'GET', { pagesize, gettotal, fulldescription, status, after, before });
    }


    /**
     * Get billing plan by id
     * 
     * @static
     * 
     * @param {string} planId Billing plan id
     * 
     * @returns {Promise} Billing plan 
     */
    static getPlanById(planId) {
        return Util.executeRequest(URL + planId, 'GET');
    }


    /**
     * Create new billing plan
     * 
     * @static
     * 
     * @param {Plan} planModel
     * 
     * @returns {Promise} Created billing plan 
     */
    static createPlan(planModel) {
        return Util.executeRequest(URL, 'POST', planModel);
    }


    /**
     * Update billing plan
     * 
     * @static
     * 
     * @param {string} planId 
     * @param {Plan} planModel
     * 
     * @returns {Promise} Updated billing plan 
     */
    static updatePlan(planId, planModel) {
        return Util.executeRequest(URL + planId, 'PUT', planModel);
    }

}