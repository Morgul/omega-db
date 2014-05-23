// --------------------------------------------------------------------------------------------------------------------
// The Collection class.
//
// @module lib/Collection
// --------------------------------------------------------------------------------------------------------------------

var Promise = require('promise');

// --------------------------------------------------------------------------------------------------------------------

function Collection()
{
} // end Collection

util.inherits(Collection, require('Queryable'));

    // Modification
    .delete(filter)                         // Delete all items that match `filter`.
    .insert(query | object | list(object))  // Inserts new items into the table.
    .upsert(filter, query | object | list(object))  // Update items in the table, inserting new items for keys which don't exist yet.
    .update(filter, query | object)         // Update the matched items with either the results of query, or with object (treated as a partial).
    .replace(filter, query | object)        // Replace the matched items with either the results of query, or with object.

// --------------------------------------------------------------------------------------------------------------------

module.exports = Collection;
