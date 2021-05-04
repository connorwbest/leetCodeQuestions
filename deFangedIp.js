// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".

/**
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
    return newString = address.split('.').join('[.]');
 }
defangIPaddr('1.1.1.1');