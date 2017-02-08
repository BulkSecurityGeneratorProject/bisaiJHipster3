(function() {
    'use strict';

    angular
        .module('bisaiApp')
        .controller('LocalDetailController', LocalDetailController);

    LocalDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Local'];

    function LocalDetailController($scope, $rootScope, $stateParams, previousState, entity, Local) {
        var vm = this;

        vm.local = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('bisaiApp:localUpdate', function(event, result) {
            vm.local = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
