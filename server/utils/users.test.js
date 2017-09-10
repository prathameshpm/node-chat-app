const expect = require('expect');

const Users = require('./users');

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Pikachu',
      room: 'Pokemon'
    }, {
      id: '2',
      name: 'Axe',
      room: 'Dota'
    }, {
      id: '3',
      name: 'Raichu',
      room: 'Pokemon'
    }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: 123,
      name: 'Prathamesh',
      room: 'Home'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1',
      var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var userId = '99',
      var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toNotExist(3);
  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '99';
    var user = users.getUser(userId);

    expect(user.id).toNotExist();
  });

  it('should return names for Pokemon', () => {
    var userList = users.getUserList('Pokemon');

    expect(userList).toEqual(['Pikachu', 'Raichu'])
  });

  it('should return names for Pokemon', () => {
    var userList = users.getUserList('Dota');

    expect(userList).toEqual(['Axe'])
  });
});
