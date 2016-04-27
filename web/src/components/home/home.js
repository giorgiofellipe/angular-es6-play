import angular from 'angular';
import uiRouter from 'angular-ui-router';

import './home.html';

class Home {
  constructor($scope) {
    'ngInject';
  }
}

const name = 'home';

// create a module
export default angular.module(name, [
  uiRouter
]).component(name, {
  templateUrl: `src/components/${name}/${name}.html`,
  controllerAs: name,
  controller: Home
})
.config(config)
.run(run);

function config($stateProvider) {
 'ngInject';

 $stateProvider
   .state('home', {
     url: '/home',
     template: '<home></home>'
   });
}

function run() {
    'ngInject';

    console.log('run: home');
}
