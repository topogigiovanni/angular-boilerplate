function OnRun($rootScope, AppSettings) {
  'ngInject';

  $rootScope.isPageLoaded = false;

  // change page title based on state
  $rootScope.$on('$stateChangeSuccess', (event, toState) => {
    $rootScope.pageTitle = '';

    if (toState.title) {
      $rootScope.pageTitle += toState.title;
      $rootScope.pageTitle += ' \u2014 ';
    }

    $rootScope.pageTitle += AppSettings.appTitle;
  });

  $rootScope.$on('appPageLoaded', (event, isLoaded) => {
    $rootScope.isPageLoaded = isLoaded;
    $rootScope.$apply();
    console.log('appPageLoaded', isLoaded);
  });

}

export default OnRun;
