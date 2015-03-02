var kataService = function () {

    var test = function (input) {
        return input;
    };

    return {
        test: test
    };
};

var app = angular.module('codeKata')
                 .factory('kataService', kataService);