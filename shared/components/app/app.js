// Import angular
import 'angular/angular.js';
// Router
import uiRouter from 'angular-ui-router';

import {name as Home} from '../home/home';
import {name as MoviesList} from '../moviesList/moviesList';

class App {}

const name = 'app';

// create a module
export default angular.module(name, [
  uiRouter,
  Home,
  MoviesList
]).component(name, {
  templateUrl: `src/components/${name}/${name}.html`,
  controllerAs: name,
  controller: App
})
.config(config)
.run(run);

function config($locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/home');
}

function run($rootScope, $state) {
  'ngInject';

  console.log('run: app');
  // $rootScope.$on('$stateChangeError',
  //   (event, toState, toParams, fromState, fromParams, error) => {
  //     if (error === 'AUTH_REQUIRED') {
  //       $state.go('login');
  //     }
  //   }
  // );
}
