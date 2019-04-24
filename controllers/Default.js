'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.addressesAddressIdDELETE = function addressesAddressIdDELETE (req, res, next) {
  var addressId = req.swagger.params['addressId'].value;
  Default.addressesAddressIdDELETE(addressId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addressesAddressIdGET = function addressesAddressIdGET (req, res, next) {
  var addressId = req.swagger.params['addressId'].value;
  Default.addressesAddressIdGET(addressId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addressesAddressIdPUT = function addressesAddressIdPUT (req, res, next) {
  var addressId = req.swagger.params['addressId'].value;
  var body = req.swagger.params['body'].value;
  Default.addressesAddressIdPUT(addressId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addressesGET = function addressesGET (req, res, next) {
  Default.addressesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addressesPOST = function addressesPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.addressesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
