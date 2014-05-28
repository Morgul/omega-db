// --------------------------------------------------------------------------------------------------------------------
// The Expression class.
//
// @module lib/Expression
// --------------------------------------------------------------------------------------------------------------------

var util = require('util');

var Promise = require('promise');

var Callable = require('./Callable');

// --------------------------------------------------------------------------------------------------------------------

/**
 * Expressions are objects that accept an item and return a value.
 */
function Expression()
{
    if(!(this.__proto__ instanceof Expression)) { return new Expression(); }

    return Callable.apply(this, arguments);
} // end Expression

util.inherits(Expression, Callable);


// Arithmetic //
Expression.prototype.plus(expr)   // Yields this expression plus `expr`
Expression.prototype['+'](expr)   // Alias for `plus`
Expression.prototype.minus(expr)  // Yields this expression minus `expr`
Expression.prototype['-'](expr)   // Alias for `minus`
Expression.prototype.mul(expr)    // Yields this expression times `expr`
Expression.prototype['*'](expr)   // Alias for `mul`
Expression.prototype.div(expr)    // Yields this expression divided by `expr`
Expression.prototype['/'](expr)   // Alias for `div`


//// Filters ////

// Comparisons //
Expression.prototype.eq(value)
Expression.prototype['='](value)
Expression.prototype.ne(value)
Expression.prototype['!='](value)
Expression.prototype.lt(value)
Expression.prototype['<'](value)
Expression.prototype.le(value)
Expression.prototype['<='](value)
Expression.prototype.gt(value)
Expression.prototype['>'](value)
Expression.prototype.ge(value)
Expression.prototype['>='](value)

// Other Tests //
Expression.prototype.contains(value | list())
Expression.prototype.in(queryable | value | list())
Expression.prototype.isNull()

// --------------------------------------------------------------------------------------------------------------------

module.exports = Expression;
