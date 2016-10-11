function AppCarousel() {

  return {
    restrict: 'EA',
    templateUrl: 'directives/carousel.html',
    scope: {
      items: '='
    },
    link: (scope) => {

      scope.myInterval = 5000;
      scope.noWrapSlides = false;
      scope.active = 0;

    }

  };
}

export default {
  name: 'appCarousel',
  fn: AppCarousel
};
