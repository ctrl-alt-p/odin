export
default

function() {
    this.namespace = 'api';
    this.get('/option-chains');
    this.get('/option-chains/:id');
    this.post('/option-chains');
    this.del('/option-chains/:id');
    this.put('/option-chains/:id');
    this.namespace = 'api';
    this.get('/option-expirations');
    this.get('/option-expirations/:id');
    this.post('/option-expirations');
    this.del('/option-expirations/:id');
    this.put('/option-expirations/:id');
    this.namespace = 'api';
    this.get('/options');
    this.get('/options/:id');
    this.post('/options');
    this.del('/options/:id');
    this.put('/options/:id');
    this.namespace = 'api';
    this.get('/stocks');
    this.get('/stocks/:id');
    this.post('/stocks');
    this.del('/stocks/:id');
    this.put('/stocks/:id');
    this.namespace = 'api';
    this.get('/quotes');
    this.get('/quotes/:id');
    this.post('/quotes');
    this.del('/quotes/:id');
    this.put('/quotes/:id');
    // These comments are here to help you get started. Feel free to delete them.

    this.urlPrefix = 'https://api.tradier.com';
    this.namespace = 'v1/markets';
    this.get('/quotes');

    /*
     * Config (with defaults).
     *
     * Note: these only affect routes defined *after* them!
     */
    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    /*
     * Route shorthand cheatsheet
     */
    /*
     * GET shorthands
     *
     * // Collections
     * this.get('/contacts');
     * this.get('/contacts', 'users');
     * this.get('/contacts', ['contacts', 'addresses']);
     *
     * // Single objects
     * this.get('/contacts/:id');
     * this.get('/contacts/:id', 'user');
     * this.get('/contacts/:id', ['contact', 'addresses']);
     */

    /*
     * POST shorthands
     *
     * this.post('/contacts');
     * this.post('/contacts', 'user'); // specify the type of resource to be created
     */

    /*
     * PUT shorthands
     *
     * this.put('/contacts/:id');
     * this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
     */

    /*
     * DELETE shorthands
     *
     * this.del('/contacts/:id');
     * this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted
     *
     * // Single object + related resources. Make sure parent resource is first.
     * this.del('/contacts/:id', ['contact', 'addresses']);
     */

    /*
     * Function fallback. Manipulate data in the db via
     *
     *   - db.{collection}
     *   - db.{collection}.find(id)
     *   - db.{collection}.where(query)
     *   - db.{collection}.update(target, attrs)
     *   - db.{collection}.remove(target)
     *
     * // Example: return a single object with related models
     * this.get('/contacts/:id', function(db, request) {
     *   var contactId = +request.params.id;
     *
     *   return {
     *     contact: db.contacts.find(contactId),
     *     addresses: db.addresses.where({contact_id: contactId});
     *   };
     * });
     *
     */
}

/*
 * You can optionally export a config that is only loaded during tests
 * export function testConfig() {
 *
 * }
 */
