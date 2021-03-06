/**
 * @name middleware
 * @author Surjeet Bhadauirya <sbsurjeet66@gmail.com>
 * @description CRUD operations middleware
 * @version 0.0.0
 */

'use strict'

const q = require('q');


/**
 * @name create
 * @description create function
 * @param {object} model - object param
 * @param {object} entity - object param
 */
function create(model, entity) {
  const deffered = q.defer();
  let data = new model(entity);  
  model.collection.insertOne(data)
    .then((data) => {
      deffered.resolve(data);
    }).catch((err) => {
      deffered.reject(err);
    })

    return deffered.promise;
}

/**
 * @name update
 * @description create function
 * @param {object} model - object param
 * @param {object} query - object param
 * @param {object} obj - object param
 */
function update(model, query, obj) {
  const deffered = q.defer();

  model.update(query, obj)
    .then((data) => {
      deffered.resolve(data);
    }).catch((err) => {
      deffered.reject(err);
    })

    return deffered.promise;
}

/**
 * @name getById
 * @description create function
 * @param {object} model - object param
 * @param {ObjectId} id - ObjectId param
 */
function getById(model, id) {
  const deffered = q.defer();
  model.findById(id)
    .then((data) => {
      deffered.resolve(data);
    }).catch((err) => {
      deffered.reject(err);
    })

    return deffered.promise;
}

/**
 * @name getAll
 * @description create function
 * @param {object} model - object param
 * @param {object} query - object param
 */
function getAll(model, query) {
  const deffered = q.defer();

  model.find(query)
    .then((data) => {
      deffered.resolve(data);
    }).catch((err) => {
      deffered.reject(err);
    })

    return deffered.promise;
}

/**
 * @name getCount
 * @description create function
 * @param {object} model - object param
 * @param {object} query - object param
 */
function getCount(model, query) {
  const deffered = q.defer();

  model.count(query)
    .then((count) => {
      deffered.resolve(count);
    }).catch((err) => {
      deffered.reject(err);
    })

    return deffered.promise;
}

module.exports = {
  create: create,
  update: update,
  getById: getById,
  getAll: getAll,
  getCount: getCount
}
