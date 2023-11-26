const { default: axios } = require("axios");
const { forEach, getUser } = require(".");
const api = require("./async-function");

jest.mock('axios')

test("test", async () => {
  axios.get.mockResolvedValue({
    id: '1',
    name: 'User 1',
  })
  await api.getUser()
    .then((data) => {
      console.log('success', data) // { id: '1', name: 'User 1' }
      expect(data.name).toEqual('User 1')
    })
    .catch((dataErr) => console.log('fail', dataErr))
});