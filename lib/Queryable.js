// --------------------------------------------------------------------------------------------------------------------
// The Queryable class.
//
// @module lib/Queryable
// --------------------------------------------------------------------------------------------------------------------

var Promise = require('promise');

// --------------------------------------------------------------------------------------------------------------------

function Queryable()
{
} // end Queryable

    // Selecting data
    .filter(filter)        // Only return items that match the given filter
    .between(field, lowerVal, upperVal, [leftBoundOpen, rightBoundOpen])
                           // Selects all items that have `field` between `lowerVal` and `upperVal`.
                           // Supports specifying whether the left bound or right bound is open. (default for both is true)

    // Joins
    .as(alias)             // Create an alias for the current query. (useful when it is a subquery of another query)
                           // You can then refer to this query's fields using dot notation: "alias.fieldName"
    .join(query or collectionName, filter, ['left'|'inner'|'full'])
                           // Join the current query with the given query (or the given collection's contents)
    .union(query)          // Concatenates 'query' to the current query's results

    // Transformations
    .groupBy(field, [...]) // Groups items by the specified field(s)
                           // After calling groupBy, only the fields specified here may be selected directly; others may only be used with aggregate functions
    .orderBy(field, [...]) // Sorts items by the specified field(s); prepend "-" to the field name to reverse the sort order
    .limit(limit)          // Limit the number of results
    .offset(offset)        // Skip the first `offset` number of results
    .slice(start, [end])   // limit the sequence to only those items between 'start' and 'end'

    // Special
    .execute()             // Begins executing the current query, and returns a ResultSet

// --------------------------------------------------------------------------------------------------------------------

module.exports = Queryable;
