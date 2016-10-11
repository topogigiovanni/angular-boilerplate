function MovieService($http) {
  'ngInject';

  const apiUrl = 'http://private-74b50-provaangularjs.apiary-mock.com/movies';
  const service = {};

  service.get = function() {
    return new Promise((resolve, reject) => {
      $http.get(apiUrl).success((data) => {
        resolve(data);
      }).error((err, status) => {
        reject(err, status);
      });
    });
  };

  return service;

}

export default {
  name: 'MovieService',
  fn: MovieService
};
