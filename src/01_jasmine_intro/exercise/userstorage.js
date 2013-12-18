var UserStorage = function () {

    var sequence = 1;

    var users = {};

    this.save = function (user) {
        users[sequence] = user;
        user.id = sequence++;
        return user;
    };

    this.remove = function (userId) {
        delete users[userId];
    };

    this.getById = function (userId) {
        return users[userId] || null;
    };

    this.getAll = function () {
        var result = [];
        for (var key in users) if (users.hasOwnProperty(key)) {
            result.push(users[key]);
        }
        return result;
    };

};

