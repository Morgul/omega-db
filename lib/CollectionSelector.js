// --------------------------------------------------------------------------------------------------------------------
// The CollectionSelector class.
//
// @module lib/CollectionSelector
// --------------------------------------------------------------------------------------------------------------------

var Promise = require('promise');

// --------------------------------------------------------------------------------------------------------------------

function CollectionSelector()
{
} // end CollectionSelector

    .db('...')             // Optional database selection (returns a new CollectionSelector)

    .ns('...')             // Optional namespace selection (returns a new CollectionSelector)
    .schema('...')         // Alias for 'ns'

    .collection('...')     // Collection selection (returns a new Query)
    .table('...')          // Alias for 'collection'
    .bucket('...')         // Alias for 'collection'

// --------------------------------------------------------------------------------------------------------------------

module.exports = CollectionSelector;
