/**
 * https://developer.tradier.com/documentation/markets/get-lookup
 *
 * Endpoint:
 * =========
 *   Method: GET
 *   URL:    /v1/markets/lookup
 *   Accept: application/xml, application/json, application/javascript
 *     Default: application/xml
 *     Required: false
 *   Authorization: Bearer {access token}
 *     Required: true
 * Form Paremeters:
 *   q: A symbol or partial symbol to look up
 *     Optional: true
 *   exchanges: A comma-delimited list of exchange codes to query
 *     Example: exchanges=Q,N
 *     Optional: true
 *   types: A comma-delimited list of security types to query
 *     Valid types are stock, etf, index
 *     Example: types=stock,etf
 *     Optional: true
 *
 *
 *
 * Response:
 * =========
 *   Field              = Description
 *   symbol             = Symbol of the company
 *   exchange           = Exchange where the company is listed
 *   type               = Type of the security (stock, etf, index)
 *   description        = Company description
 *
 */
import Ember from 'ember';

export
default Ember.Service.extend({
    lookup(q) {
        return {
            "securities": {
                "security": [{
                    "symbol": "GOOGL",
                    "exchange": "Q",
                    "type": "stock",
                    "description": "Google Inc"
                }, {
                    "symbol": "GOOD",
                    "exchange": "Q",
                    "type": "stock",
                    "description": "Gladstone Commercial Corp"
                }, {
                    "symbol": "GOOO",
                    "exchange": "V",
                    "type": "stock",
                    "description": "Golden Opportunities Corporation"
                }, {
                    "symbol": "GOODN",
                    "exchange": "Q",
                    "type": "stock",
                    "description": "Gladstone Commercial Corporation - 7.125% Series C Cumulative Term Preferred Stock"
                }, {
                    "symbol": "GOODO",
                    "exchange": "Q",
                    "type": "stock",
                    "description": "Gladstone Commercial Corporation - 7.50% Series B Cumulative Redeemable Preferred Stock"
                }, {
                    "symbol": "GOODP",
                    "exchange": "Q",
                    "type": "stock",
                    "description": "Gladstone Commercial Corporation - 7.75% Series A Cumulative Redeemable Preferred Stock"
                }, {
                    "symbol": "GOOG",
                    "exchange": "Q",
                    "type": "stock",
                    "description": "Google Inc. - Class C Capital Stock"
                }, {
                    "symbol": "GOOI",
                    "exchange": "V",
                    "type": "stock",
                    "description": "GOOI GLOBAL INC by Gooi Global, Inc."
                }, {
                    "symbol": "GOOXF",
                    "exchange": "V",
                    "type": "stock",
                    "description": "GIVOT OLAM OIL EXPLOR LP by Givot Olam Oil Exploration LP"
                }]
            }
        };
    }
});
