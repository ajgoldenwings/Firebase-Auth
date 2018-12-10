var FirebaseController = function (firebaseService) {
    

    var init = function () {
        firebaseService.signOut();
    };

    return {
        init: init
    };

}(FirebaseService);// Immediately invoked function expression - IIFE
