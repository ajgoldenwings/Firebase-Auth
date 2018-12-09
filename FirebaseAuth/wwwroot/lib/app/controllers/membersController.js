
var MembersController = function (membersService) {

    var token = "";

    var init = function (container, containerNoAuth, containerToken) {
        $(container).on("click", ".js-add-member", addMember);
        $(containerNoAuth).on("click", ".js-add-member", addMemberNoAuth);
        $(containerToken).on("click", ".js-get-token", getToken);
        jsName = container + jsName;
        jsCity = container + jsCity;
        jsNameNoAuth = containerNoAuth + jsNameNoAuth;
        jsCityNoAuth = containerNoAuth + jsCityNoAuth;
        jsToken = containerToken + jsToken;
    };

    var jsName = " .js-name";
    var jsCity = " .js-city";
    var jsNameNoAuth = " .js-name";
    var jsCityNoAuth = " .js-city";
    var jsToken = " .js-token";

    var addMember = function (e) {
        name = $(jsName).val();
        city = $(jsCity).val();

        var done = function (e) {

        };

        var fail = function (e) {

        };

        membersService.add(name, city, done, fail);
    };

    var addMemberNoAuth = function (e) {
        name = $(jsNameNoAuth).val();
        city = $(jsCityNoAuth).val();

        var done = function (e) {

        };

        var fail = function (e) {

        };

        //membersService.addNoAuth(name, city, done, fail);
    };

    var getToken = function (e) {

        var done = function (e) {
            token = e.customToken;
            $(jsToken).text(e.customToken);
            localStorage.setItem('CustomToken', e.customToken);
            //localStorage.getItem('CustomToken')

            firebase.auth().signInWithCustomToken(e.customToken).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });

            // Include this to show that token can be cleared.
            //firebase.auth().signOut().then(function () {
            //    console.log('Signed Out');
            //}, function (error) {
            //    console.error('Sign Out Error', error);
            //});

            firebase.database().ref('users/' + "asdf").set({
                username: "name",
                email: "email:"
            });
        };

        var fail = function (e) {

        };

        membersService.getToken(done, fail);
    };

    return {
        init: init
    };

}(MembersService);// Immediately invoked function expression - IIFE
