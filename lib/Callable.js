// --------------------------------------------------------------------------------------------------------------------
// The Callable class.
//
// @module lib/Selector
// --------------------------------------------------------------------------------------------------------------------

var util = require('util');

var Promise = require('promise');

// --------------------------------------------------------------------------------------------------------------------

/**
 */
function Callable()
{
    console.log("Callable constructor called! this=", this);

    function call_instance()
    {
        console.log("Callable instance called!");
        call_instance.__call__.apply(call_instance, arguments);
    };
    call_instance.__proto__ = this.__proto__;

    return call_instance;
} // end Callable

util.inherits(Callable, Function);

/**
 * Called when an instance is called.
 */
Callable.prototype.__call__;

// --------------------------------------------------------------------------------------------------------------------

module.exports = Callable;
