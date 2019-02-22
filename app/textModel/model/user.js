'use strict';

const users = [
  {
    id: '1',
    userName: 'wht',
    password: '0522',
  },
  {
    id: '2',
    userName: 'wht2',
    password: '0522',
  },
];

class UserModel {
  async list() {
    return users;
  }
  async addOne(user) {
    if (!user.id && !user.name) {
      throw Error('invalid user');
    }
    users.push(user);
    return users;
  }
  async getOneById(id) {
    const user = users.find(u => u.id === id);
    return user;
  }
  async loginIn(userName, password) {
    const user = users.find(u => u.userName === userName && u.password === password);
    return user;
  }
}

module.exports = UserModel;
