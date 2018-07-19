module.exports = class Subscription {

    /**
     * @class Subscription
     * 
     * @param {object} model Subscription object
     * 
     * @example const plan = new Subscription('you-plan-object')
     */
    constructor(model) {

        this.planId = model.planId;
        this.vaultedShopperId = model.vaultedShopperId;
        this.payerInfo = model.payerInfo;
        this.paymentSource = model.paymentSource;
        this.quantity = model.quantity;
        this.softDescriptor = model.softDescriptor;
        this.descriptorPhoneNumber = model.descriptorPhoneNumber;
        this.overrideTrialPeriodDays = model.overrideTrialPeriodDays;
        this.overrideRecurringChargeAmount = model.overrideRecurringChargeAmount;
        this.overrideInitialChargeAmount = model.overrideInitialChargeAmount;
        this.transactionFraudInfo = model.transactionFraudInfo;
        this.autoRenew = model.autoRenew;
        this.authorizedByShopper = model.authorizedByShopper;
        this.nextChargeDate = model.nextChargeDate;
        this.status = model.status;
        this.level3Data = model.level3Data;
        this.threeDSecure = model.threeDSecure;

    }

}