// --------------------------------------------------------------------------------------------------------------------
// The Filter class.
//
// @module lib/Filter
// --------------------------------------------------------------------------------------------------------------------

var Promise = require('promise');

// --------------------------------------------------------------------------------------------------------------------

/**
 * @param {Selector} left - the left operand
 * @param {string} oper - the operator
 * @param {Selector} right - the right operand
 */
function Filter()
{
    if(!(this.__proto__ instanceof Filter)) { return new Filter(); }

    return Selector.apply(this, arguments);
} // end Filter

util.inherits(Filter, Selector);

// --------------------------------------------------------------------------------------------------------------------

module.exports = Filter;
