import angular from 'angular';

const bulk = require('bulk-require');
const controllersModule = angular.module('app.controllers', []);
const controllers = bulk(__dirname, ['./**/!(*index|*.spec).js']);

function declare(controllerMap) {
  Object.keys(controllerMap).forEach((key) => {
    let item = controllerMap[key];

    if (!item) {
      return;
    }

    if (item.require && typeof item.require === 'object') {
      angular.forEach(item.requireds, function(req) {
        controllersModule.requires.push(req);
      });
    }

    if (item.fn && typeof item.fn === 'function') {
      controllersModule.controller(item.name, item.fn);
    } else {
      declare(item);
    }
  });
}

declare(controllers);

export default controllersModule;
