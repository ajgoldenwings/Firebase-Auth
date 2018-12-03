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

    return {
        add: add,
    }
}();
