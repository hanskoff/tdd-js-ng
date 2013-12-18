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
        // given:
        var savedUsers = ['Pawel', 'Jan'].map(function(username){
            return userStorage.save({
                name: username
            });
        });

        // when:
        var allUsers = userStorage.getAll();

        // then:
        expect(allUsers.length).toEqual(2);
        expect(allUsers).toContain(savedUsers[0]);
        expect(allUsers).toContain(savedUsers[1]);
    });

    it('should support removing users by id', function () {
        // given:
        var savedUsers = ['Pawel', 'Jan'].map(function(username){
            return userStorage.save({
                name: username
            });
        });

        // when:
        userStorage.remove(savedUsers[1].id);

        // then:
        var all = userStorage.getAll()
        expect(all.length).toEqual(1);
        expect(all).not.toContain(savedUsers[1]);
        expect(all).toContain(savedUsers[0]);
    });


  });

  describe('corner cases', function () {

    it('should return null for non existing users', function () {
        // given:

        // when
        var fetched = userStorage.getById('foo');

        // then
        expect(fetched).toBe(null);

    });

  });

});