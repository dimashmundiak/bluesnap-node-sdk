module.exports = class Plan {

    /**
     * @class PlanModel
     * 
     * @param {object} model Plan object
     * 
     * @example const plan = new Plan('you-plan-object')
     */
    constructor(model) {

        this.chargeFrequency = model.chargeFrequency;
        this.gracePeriodDays = model.gracePeriodDays;
        this.trialPeriodDays = model.trialPeriodDays;
        this.initialChargeAmount = model.initialChargeAmount;
        this.name = model.name;
        this.planId = model.planId;
        this.currency = model.currency;
        this.maxNumberOfCharges = model.maxNumberOfCharges;
        this.recurringChargeAmount = model.recurringChargeAmount;
        this.chargeOnPlanSwitch = model.chargeOnPlanSwitch;
        this.status = model.status;

    }

}