// Revealing Module Pattern:
var MembersService = function () {

    var add = function (name, city, done, fail) {
        $.ajax({
            method: 'PUT',
            url: '/api/Member/Add',
            data: { Name: name, City: city},
        })
            .done(done)
            .fail(fail);
    };

    var addNoAuth = function (name, city, done, fail) {
        $.ajax({
            method: 'PUT',
            url: '/api/Member/AddNoAuth',
            data: { Name: name, City: city },
        })
            .done(done)
            .fail(fail);
    };

    return {
        add: add,
        addNoAuth: addNoAuth,
    }
}();
