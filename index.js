const api = require("./async-function");

function forEach(items, callback) {
  let a = '';
  for (let index = 0; index < items.length; index++) {
    a += testFn(items[index]) + ' ';
  }
  return a;
}

function getUser() {
  return api.getUser().then(res => res);
}

module.exports.forEach = forEach;
module.exports.getUser = getUser;