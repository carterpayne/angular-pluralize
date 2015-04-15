(function(angular, undefined){
    angular.module('angular-pluralize', [])
        .factory('Pluralize', ['$window', function ($window) {
            return $window.pluralize;
        }]);
}(angular));
