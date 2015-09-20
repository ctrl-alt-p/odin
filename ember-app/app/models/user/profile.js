/**
 * https://developer.tradier.com/documentation/user/get-profile
 *
 * Endpoint:
 * =========
 *   Method: GET
 *   URL:    /v1/user/profile
 *   Accept: application/xml, application/json, application/javascript
 *     Default: application/xml
 *     Required: false
 *   Authorization: Bearer {access token}
 *     Required: true
 *
 *
 *
 * Response:
 * =========
 *   Field                  = Description
 *   account_number         = Account Number
 *   day_trader             = Designates if the account is a Pattern Day Trading Account
 *   option_level           = The Level of Options trading permission that is on the account
 *   type                   = Account Type (cash or margin)
 *   last_update            = Date and Time when account was last updated.
 *   name                   = User's name
 *   id                     = Unique identifier for the user
 *   status                 = Status of the account (approved, closed)
 *   classification         = Class of account (individual, ira, roth_ira, joint)
 *
 */
import Ember from 'ember';

export
default DS.Model.extend({
    account_number: DS.attr('string'),
    day_trader: DS.attr('string'),
    option_level: DS.attr('string'),
    type: DS.attr('string'),
    last_update: DS.attr('string'),
    name: DS.attr('string'),
    id: DS.attr('string'),
    status: DS.attr('string'),
    classification: DS.attr('string')
});
