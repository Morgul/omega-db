// --------------------------------------------------------------------------------------------------------------------
// The ResultSet class.
//
// @module lib/ResultSet
// --------------------------------------------------------------------------------------------------------------------

var Promise = require('promise');

// --------------------------------------------------------------------------------------------------------------------

function ResultSet()
{
} // end ResultSet

// Using Events //

    .on('item', function(item){ ... });    // Emitted with each returned item
    .on('finished', function(){ ... });    // Emitted when the query finishes successfully
    .on('error', function(error){ ... });  // Emitted when the query generates an error


// Using Callbacks //

    // Get a count of total items in the result set.
    .count(function(error, numItems){ ... });

    // Accumulate all items into an array, and handle them all in one callback:
    .all(function(errors, items){ ... });

    // Retrieve exactly one item, by index
    .nth(index, function(error, item){ ... });

    // Retrieve only the first item (same as `.nth(0, ...)`)
    .first(function(error, item){ ... });

    // Handle each item individually, with no item accumulation:
    .each(function(item, callback){ ...; callback(error); },
        function(errors){ ... });

    // Handle each item individually, yielding an array of transformed item values from each item handler call:
    .map(function(item, callback){ ...; callback(error, item); },
        function(errors, items){ ... });

    // Handle each item individually, yielding the final value of an accumulator value:
    .reduce({}, function(accum, item, callback){ ...; callback(error, accum); },
        function(errors, accum){ ... });


// Using Promises //

    // Get a count of total items in the result set.
    .count()
        .then(function(error, numItems){ ... });

    // Accumulate all items into an array, and handle them all via the returned promise:
    .all()
        .then(function(items){ ... }, function(errors){ ... });

    // Retrieve exactly one item, by index
    .nth(index)
        .then(function(item){ ... }, function(error){ ... });

    // Retrieve only the first item (same as `.nth(0, ...)`)
    .first()
        .then(function(item){ ... }, function(error){ ... });

    // Handle each item individually, with no item accumulation:
    .each(function(item, callback){ ...; callback(error); })
        .then(function(){ ... }, function(errors){ ... });

    // Handle each item individually, yielding an array of transformed item values from each item handler call:
    .map(function(item, callback){ ...; callback(error, item); })
        .then(function(items){ ... }, function(errors){ ... });

    // Handle each item individually, yielding the final value of an accumulator value:
    .reduce({}, function(accum, item, callback){ ...; callback(error, accum); })
        .then(function(accum){ ... }, function(errors){ ... });


/**
 * Item handler functions
 *
 * The per-item methods above each expect an item handler function, which will be called once per item in the result
 * set. The method will not finish successfully (i.e., resolve the returned promise object, or call the finished
 * callback without an error) until all item handler calls have completed.
 *
 * Item handler functions may return different types of values, which influence when that result handler call is
 * considered "completed":
 *
 * - a promise object - the handler call is completed when the returned promise is resolved.
 * - undefined - the handler call is completed when the passed callback is called.
 */
// --------------------------------------------------------------------------------------------------------------------

module.exports = ResultSet;
