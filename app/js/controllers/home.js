function HomeCtrl($rootScope, $scope, MovieService) {

  // ViewModel
  const vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
  vm.number = 1234;

  function fetchData() {
  	MovieService
  		.get()
  		.then((r) => {
  			console.log('r', r);
  			if(!r){
  				return;
  			}
  			$scope.carouselItems = r.carrossel;
  			$scope.movies = r.catalogo;
  			console.log('before appPageLoaded');
  			$rootScope.$broadcast('appPageLoaded', true);
  		})
  }

  function init() {
  	fetchData();
  }

  $scope.carouselItems = [];
  $scope.movies = [];

  init();

}

HomeCtrl.$inject = ['$rootScope', '$scope', 'MovieService'];

export default {
  name: 'HomeCtrl',
  fn: HomeCtrl
};
