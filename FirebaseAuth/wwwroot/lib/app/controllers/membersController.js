var MembersController = function (membersService) {

    var init = function (container) {
        $(container).on("click", ".js-add-member", addMember);
        jsName = container + jsName;
        jsCity = container + jsCity;

    };

    var jsName = " .js-name";
    var jsCity = " .js-city";

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

    return {
        init: init
    };

}(MembersService);// Immediately invoked function expression - IIFE
