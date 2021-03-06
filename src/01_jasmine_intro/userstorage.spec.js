// slide:start:test;
describe('User storage as a global constructor function', function () {

  var userStorage;
  beforeEach(function () {
    userStorage = new UserStorage();
  });

  describe('basic CRUD operations', function () {

    it('should allow adding and querying users by id', function () {
      var user = userStorage.save({
        name: 'Pawel'
      });

      expect(userStorage.getById(user.id).name).toEqual('Pawel');
    });

    // slide:end

    it('should allow querying all users', function () {

      // ex:start
      userStorage.save({name: 'foo'});
      userStorage.save({name: 'bar'});

      expect(userStorage.getAll().length).toEqual(2);
      // ex:end
    });

    it('should support removing users by id', function () {

      // ex:start
      // setup
      userStorage.save({id: '1', value: 'foo'});
      userStorage.save({id: '2', value: 'bar'});

      // stimulus
      var removed = userStorage.remove('1');

      // verify expectations
      expect(removed.value).toEqual('foo');
      expect(userStorage.getById('1')).toBeFalsy();
      expect(userStorage.getById('2').value).toEqual('bar');
      //ex:end
    });


  });

  describe('corner cases', function () {

    it('should return null for non existing users', function () {
      // ex:start
      expect(userStorage.getById('foo')).toBeNull();
      // ex:end
    });

  });

});