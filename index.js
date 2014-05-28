// --------------------------------------------------------------------------------------------------------------------
// omega-db
//
// @module index
// --------------------------------------------------------------------------------------------------------------------

var CollectionSelector = require('lib/CollectionSelector');
var Connection = require('lib/Connection');
var Queryable = require('lib/Queryable');
var Collection = require('lib/Collection');
var Query = require('lib/Query');
var ResultSet = require('lib/ResultSet');
var Selector = require('lib/Selector');
var Filter = require('lib/Filter');

//TODO: Discover and load backend drivers!

// --------------------------------------------------------------------------------------------------------------------

/**
 * Create a new connection with the given driver and config.
 *
 * @param {string} driver - the name of the driver
 * @param {object} config - configuration options for the driver
 */
function omega_db(driver, config)
{
    //TODO: Look up correct driver, and pass it `config`.
} // end omega_db

omega_db.CollectionSelector = CollectionSelector;
omega_db.Connection = Connection;
omega_db.Queryable = Queryable;
omega_db.Collection = Collection;
omega_db.Query = Query;
omega_db.ResultSet = ResultSet;
omega_db.Selector = Selector;
omega_db.Filter = Filter;


// Generic selectors
omega_db.field(fieldName)           // Select a field from the current item

// Aggregate functions (if .groupBy has been called, these apply across each group of items)
omega_db.count([fieldName])         // Select the number of distinct values in the given field (or the total number of items, if `fieldName` is omitted)
omega_db.sum(fieldName)             // Select the sum of the given field
omega_db.min(fieldName)             // Select the minimum value of the given field
omega_db.max(fieldName)             // Select the maximum value of the given field
omega_db.avg(fieldName)             // Select the average value of the given field


// Filters
omega_db.eq(fieldName, value)
omega_db.le(fieldName, value)
omega_db.contains(fieldName, value | list())
omega_db.in(fieldName, queryable | value | list())
omega_db.isNull(fieldName)

// Logical Connectives
omega_db.and(filter, [filter, ...])
omega_db.or(filter, [filter, ...])

// --------------------------------------------------------------------------------------------------------------------

module.exports = omega_db;
