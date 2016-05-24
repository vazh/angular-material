(function() {
  'use strict';

  angular
    .module('angularMaterial')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'nav',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment, $mdSidenav) {
      var vm = this;
      vm.close = close;
      // "vm.creationDate" is available by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
      vm.toggle = toggle;

      function close() {
        $mdSidenav('sidenav').close();
      }

      function toggle() {
        $mdSidenav('sidenav').toggle();
      }
    }
  }

})();
