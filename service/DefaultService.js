'use strict';


/**
 * Deletes an address.
 *
 * addressId String Address ID Desc
 * no response value expected for this operation
 **/
exports.addressesAddressIdDELETE = function(addressId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Gets an address.
 *
 * addressId String Address ID Desc
 * no response value expected for this operation
 **/
exports.addressesAddressIdGET = function(addressId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updates an address.
 *
 * addressId String Address ID Desc
 * body Address  (optional)
 * no response value expected for this operation
 **/
exports.addressesAddressIdPUT = function(addressId,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Lists all addresses.
 *
 * returns List
 **/
exports.addressesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "{\n    \"Id\": \"12345\",\n    \"City\": \"Boston\",\n    \"State\": \"MA\"\n}", "{\n    \"Id\": \"12345\",\n    \"City\": \"Boston\",\n    \"State\": \"MA\"\n}" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adds an address.
 *
 * body Address  (optional)
 * returns Address
 **/
exports.addressesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\n    \"Id\": \"12345\",\n    \"City\": \"Boston\",\n    \"State\": \"MA\"\n}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

