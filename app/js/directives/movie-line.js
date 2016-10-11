function AppMovieLine($uibModal) {

  return {
    restrict: 'EA',
    templateUrl: 'directives/movie-line.html',
    scope: {
      movie: '='
    },
    link: (scope) => {

      console.log('movies', scope.movie, $uibModal);

      function openModal() {
        $uibModal.open({
          templateUrl: 'directives/movie-line-detail.html',
          size: 'lg',
          scope: scope
        });
      }

      function showDetails() {
        openModal();
      }

      scope.showDetails = showDetails;

    }

  };
}

AppMovieLine.$inject = ['$uibModal'];

export default {
  name: 'appMovieLine',
  fn: AppMovieLine,
  require: ['ui.bootstrap']
};
