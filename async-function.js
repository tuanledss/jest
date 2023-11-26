const { default: axios } = require("axios");

class api {
  static getUser() {
    return new Promise((resolve, reject) => {
      axios.get('./user')
        .then((res) => resolve(res))
        .catch(() => reject({
          id: '2',
          name: 'Tuan',
        }))
    })
  }
}

module.exports = api;