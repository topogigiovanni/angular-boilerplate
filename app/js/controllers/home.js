function HomeCtrl($rootScope, MovieService) {

  // ViewModel
  const vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
  vm.number = 1234;

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
