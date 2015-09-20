/**
 * https://developer.tradier.com/documentation/watchlists/get-watchlists
 *
 * All Watchlists Endpoint:
 * =========
 *   Method: GET
 *   URL:    /v1/watchlists
 *   Accept: application/xml, application/json, application/javascript
 *     Default: application/xml
 *     Required: false
 *   Authorization: Bearer {access token}
 *     Required: true
 * Response:
 * =========
 *   Field              = Description
 *   watchlists         = An array of watchlists
 *   name               = Wathlist display name
 *   id                 = Watchlist ID
 *   public_id          = The watchlist's public Id to be used for sharing
 *
 *
 *
 * Create A Watchlist Endpoint:
 * =========
 *   Method: POST
 *   URL:    /v1/watchlists
 *   Accept: application/xml, application/json, application/javascript
 *     Default: application/xml
 *     Required: false
 *   Authorization: Bearer {access token}
 *     Required: true
 * Path Parameters:
 *   name: A watchlist name
 *     Required: true
 *   symbols: Symbols to put into the watchlist
 *     Required: true
 * Response:
 * =========
 *   Field              = Description
 *   id                 = Watchlist's Id
 *   public_id          = The watchlist's public Id to be used for sharing
 *   name               = Watchlists's name
 *   items              = An array of the watchlist items
 *   symbol             = Item's symbol
 *
 *
 *
 * A Single Watchlist Endpoint:
 * =========
 *   Method: GET
 *   URL:    /v1/watchlists/{id}
 *   Accept: application/xml, application/json, application/javascript
 *     Default: application/xml
 *     Required: false
 *   Authorization: Bearer {access token}
 *     Required: true
 * Path Parameters:
 *   id: A watchlist ID
 *     Required: true
 * Response:
 * =========
 *   Field              = Description
 *   id                 = Watchlist's Id
 *   public_id          = The watchlist's public Id to be used for sharing
 *   name               = Watchlists's name
 *   items              = An array of the watchlist items
 *   symbol             = Item's symbol
 *
 *
 *
 * Update A Watchlist Endpoint:
 * =========
 *   Method: PUT
 *   URL:    /v1/watchlists/{id}
 *   Accept: application/xml, application/json, application/javascript
 *     Default: application/xml
 *     Required: false
 *   Authorization: Bearer {access token}
 *     Required: true
 * Path Parameters:
 *   id: A watchlist ID
 *     Required: true
 * Form Parameters:
 *   name: A watchlist name
 *     Required: true
 *   symbols: Symbols to put into the watchlist
 *     Required: true
 * Response:
 * =========
 *   Field              = Description
 *   id                 = Watchlist's Id
 *   public_id          = The watchlist's public Id to be used for sharing
 *   name               = Watchlists's name
 *   items              = An array of the watchlist items
 *   symbol             = Item's symbol
 *
 *
 *
 * Add Symbols to a Watchlist Endpoint:
 * =========
 *   Method: POST
 *   URL:    /v1/watchlists/{id}
 *   Accept: application/xml, application/json, application/javascript
 *     Default: application/xml
 *     Required: false
 *   Authorization: Bearer {access token}
 *     Required: true
 * Path Parameters:
 *   id: A watchlist ID
 *     Required: true
 * Form Parameters:
 *   symbols: Symbols to put into the watchlist
 *     Required: true
 * Response:
 * =========
 *   Field              = Description
 *   id                 = Watchlist's Id
 *   public_id          = The watchlist's public Id to be used for sharing
 *   name               = Watchlists's name
 *   items              = An array of the watchlist items
 *   symbol             = Item's symbol
 *
 *
 *
 * Remove Symbols from a Watchlist Endpoint:
 * =========
 *   Method: DELETE
 *   URL:    /v1/watchlists/{id}/symbols/{symbol}
 *   Accept: application/xml, application/json, application/javascript
 *     Default: application/xml
 *     Required: false
 *   Authorization: Bearer {access token}
 *     Required: true
 * Path Parameters:
 *   id: A watchlist ID
 *     Required: true
 *   symbol: A symbol within the specified watchlist
 *     Required: true
 * Response:
 * =========
 *   Field              = Description
 *   id                 = Watchlist's Id
 *   public_id          = The watchlist's public Id to be used for sharing
 *   name               = Watchlists's name
 *   items              = An array of the watchlist items
 *   symbol             = Item's symbol
 *
 *
 *
 * Delete A Watchlist Endpoint:
 * =========
 *   Method: DELETE
 *   URL:    /v1/watchlists/{id}
 *   Accept: application/xml, application/json, application/javascript
 *     Default: application/xml
 *     Required: false
 *   Authorization: Bearer {access token}
 *     Required: true
 * Path Parameters:
 *   id: A watchlist ID
 *     Required: true
 * Response:
 * =========
 *   Field              = Description
 *   watchlists         = An array of watchlists
 *   name               = Wathlist display name
 *   id                 = Watchlist ID
 *   public_id          = The watchlist's public Id to be used for sharing
 *
 */
import Ember from 'ember';

export
default Ember.Route.extend({});
