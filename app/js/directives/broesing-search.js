function AppBrowsingSearch($rootScope) {

  return {
    restrict: 'EA',
    templateUrl: 'directives/browsing-search.html',
    scope: {
      items: '='
    },
    link: (scope) => {

      var _originalList = angular.copy(scope.items);

      scope.$watch('term', function(newTerm) {

        if (!newTerm) {
          scope.items = _originalList;
          return;
        }

        scope.items = _originalList.filter((item) => {
          return !!~item.descricao.toLowerCase().indexOf(newTerm) ||
            !!~item.titulo.toLowerCase().indexOf(newTerm);
        });

      });

      $rootScope.$on('appModelUpdated', (event, r) => {
        _originalList = r.catalogo;
      });

      scope.term = '';

    }

  };
}

AppBrowsingSearch.$inject = ['$rootScope'];

export default {
  name: 'appBrowsingSearch',
  fn: AppBrowsingSearch
};
