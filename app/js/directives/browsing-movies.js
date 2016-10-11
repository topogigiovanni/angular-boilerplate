function AppBrowsingMovies() {

  return {
    restrict: 'EA',
    templateUrl: 'directives/browsing-movies.html',
    scope: {
      items: '='
    },
    link: () => {

    }

  };
}

export default {
  name: 'appBrowsingMovies',
  fn: AppBrowsingMovies
};
