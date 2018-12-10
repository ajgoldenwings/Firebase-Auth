
var MembersController = function (firebaseService) {

    var jsName = " .js-name";
    var jsCity = " .js-city";
    var jsToken = " .js-token";

    var init = function (containerToken, container) {
        jsName = container + jsName;
        jsCity = container + jsCity;
        jsToken = containerToken + jsToken;
        
        $(container).on("click", ".js-add-member", addMember);
        $(containerToken).on("click", ".js-get-token", getTokenSignInWithCustomToken);
    };

    var getTokenSignInWithCustomToken = function (e) {

        var done = function (e) {
            $(jsToken).text(e.customToken);
            //localStorage.setItem('CustomToken', e.customToken);

            firebaseService.signInWithCustomToken(e.customToken);
        };

        var fail = function (error)
        {
            console.log(error);
        };

        firebaseService.getToken(done, fail)
    };
    
    var addMember = function (e) {
        name = $(jsName).val();
        city = $(jsCity).val();

        var done = function (e) {

        };

        var fail = function (e) {
            console.log(e);
            alert("Failed to add! NOTE: Normally token will persist but we clear it on page load for demonstration purposes.");
        };

        firebaseService.set("Members/somememberusername"
            , { username: name, email: city }
            , done
            , fail);
    };

    return {
        init: init
    };

}(FirebaseService);// Immediately invoked function expression - IIFE
