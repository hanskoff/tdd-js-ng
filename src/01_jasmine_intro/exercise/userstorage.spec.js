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
        ['Pawel', 'Jan'].forEach(function(username){
            userStorage.save({
                name: username
            });
        });

        // when:
        var allUsers = userStorage.getAll();

        // then:
        expect(allUsers.length).toEqual(2);
    });

    it('should support removing users by id', function () {

    });


  });

  describe('corner cases', function () {

    it('should return null for non existing users', function () {
    });

  });

});