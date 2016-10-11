function HomeCtrl($rootScope, MovieService) {

  // ViewModel
  const vm = this;

  vm.carouselItems = [];
  vm.movies = [];

  function fetchData() {
    MovieService
      .get()
      .then((r) => {
        console.log('r', r);
        if (!r) {
          return;
        }
        vm.carouselItems = r.carrossel;
        vm.movies = r.catalogo;
        $rootScope.$broadcast('appPageLoaded', true);
        $rootScope.$broadcast('appModelUpdated', r);
      })
  }

  function init() {
    fetchData();
  }

  init();

}

HomeCtrl.$inject = ['$rootScope', 'MovieService'];

export default {
  name: 'HomeCtrl',
  fn: HomeCtrl
};
