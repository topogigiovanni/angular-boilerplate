function AppMovieLine($uibModal) {

  return {
    restrict: 'EA',
    templateUrl: 'directives/movie-line.html',
    scope: {
      movie: '='
    },
    link: (scope) => {

      console.log('movies', scope.movie, $uibModal);

      var modalInstance;

      function openModal() {
        modalInstance = $uibModal.open({
          templateUrl: 'directives/movie-line-detail.html',
          size: 'lg',
          scope: scope
        });
      }

      function showDetails() {
        openModal();
      }

      function close() {
        modalInstance.close();
      }

      scope.showDetails = showDetails;
      scope.close = close;

    }

  };
}

AppMovieLine.$inject = ['$uibModal'];

export default {
  name: 'appMovieLine',
  fn: AppMovieLine,
  require: ['ui.bootstrap']
};
