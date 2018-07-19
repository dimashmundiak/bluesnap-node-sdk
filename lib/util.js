const request = require('request');
const config = require('../config');

module.exports = class Util {

    /**
     * Execute HTTP request
     * 
     * @static
     * @param {string} uri Request url 
     * @param {string} method Request tupe 
     * @param {object} body Request body 
     * @param {object} headers Request headers 
     */
    static executeRequest(uri, method = 'GET', params = {}, body = {}, headers = this.getDefaultHeaders()) {

        return new Promise((resolve, reject) => {

            let options = {
                uri: config.ServerUrl + uri + this.parseParams(params),
                qs: JSON.stringify(params),
                method: method,
                headers: headers,
                body: JSON.stringify(body),
            }

            request(options, (error, response, body) => {

                if (error) {
                    reject(error);
                } else {
                    resolve(JSON.parse(body));
                }

            });

        });

    }

    /**
     * Get default request headers
     * 
     * @private
     * @param {string} authToken Base64 encoded auth token  
     * 
     * @returns {object} Default headers for request
     */
    static getDefaultHeaders(authToken = config.authToken) {

        return {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Basic ' + authToken
        }

    }

    /**
     * Create query string from object
     * 
     * @private
     * @param {object} params Params object  
     * 
     * @returns {string} Parsed string
     */
    static parseParams(params) {

        let queryString = '?';

        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                const param = params[key];
                if (!param) continue;
                queryString += `${key}=${param}&`
            }
        }

        return queryString.slice(0, queryString.length - 1);

    }

}