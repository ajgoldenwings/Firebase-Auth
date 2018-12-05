
var MembersController = function (membersService) {

    var init = function (container, containerNoAuth) {
        $(container).on("click", ".js-add-member", addMember);
        $(containerNoAuth).on("click", ".js-add-member", addMemberNoAuth);
        jsName = container + jsName;
        jsCity = container + jsCity;
        jsNameNoAuth = containerNoAuth + jsNameNoAuth;
        jsCityNoAuth = containerNoAuth + jsCityNoAuth;
    };

    var jsName = " .js-name";
    var jsCity = " .js-city";
    var jsNameNoAuth = " .js-name";
    var jsCityNoAuth = " .js-city";

    var addMember = function (e) {
        button = $(e.target);

        name = $(jsName).val();
        city = $(jsCity).val();

        var done = function (e) {
            //buttonAgainst.removeClass("btn-danger");
            //buttonFor.addClass("btn-success");
            //voteDone_updateProgressBar(organizationIdentifier, motionId);
        };

        var fail = function (e) {
            //buttonAgainst.removeClass("btn-danger");
            //buttonFor.addClass("btn-success");
            //voteDone_updateProgressBar(organizationIdentifier, motionId);
        };

        membersService.add(name, city, done, fail);
    };

    var addMember = function (e) {
        button = $(e.target);

        name = $(jsName).val();
        city = $(jsCity).val();

        var done = function (e) {
            //buttonAgainst.removeClass("btn-danger");
            //buttonFor.addClass("btn-success");
            //voteDone_updateProgressBar(organizationIdentifier, motionId);
        };

        var fail = function (e) {
            //buttonAgainst.removeClass("btn-danger");
            //buttonFor.addClass("btn-success");
            //voteDone_updateProgressBar(organizationIdentifier, motionId);
        };

        membersService.add(name, city, done, fail);
    };

    var addMemberNoAuth = function (e) {
        button = $(e.target);

        name = $(jsNameNoAuth).val();
        city = $(jsCityNoAuth).val();

        var done = function (e) {
            //buttonAgainst.removeClass("btn-danger");
            //buttonFor.addClass("btn-success");
            //voteDone_updateProgressBar(organizationIdentifier, motionId);
        };

        var fail = function (e) {
            //buttonAgainst.removeClass("btn-danger");
            //buttonFor.addClass("btn-success");
            //voteDone_updateProgressBar(organizationIdentifier, motionId);
        };

        membersService.addNoAuth(name, city, done, fail);
    };

    return {
        init: init
    };

}(MembersService);// Immediately invoked function expression - IIFE