// Revealing Module Pattern:
var FirebaseService = function () {

    var getToken = function (done, fail) {
        $.ajax({
            method: 'GET',
            url: '/api/Firebase/GetToken',
        })
            .done(done)
            .fail(fail);
    };

    var signInWithCustomToken = function (token) {
        firebase.auth()
            .signInWithCustomToken(token)
            .catch(function (error) {
                console.log(error.code, error.message);
            });
    };

    var signOut = function () {
        firebase.auth().signOut().then(function () {
            console.log('Signed Out');
        }, function (error) {
            console.error('Sign Out Error', error);
        });
    };

    var set = function (refValue, value, done, fail) {
        firebase.database()
            .ref(refValue)
            .set(value)
            .then(done, fail);
    }

    return {
        getToken: getToken,
        signInWithCustomToken: signInWithCustomToken,
        signOut: signOut,
        set: set,
    }
}();
