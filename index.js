var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value});
}

function deleteFromObjectByKey(object, key) {
  var result = Object.assign({}, object);
  delete result[key];
  return result;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
