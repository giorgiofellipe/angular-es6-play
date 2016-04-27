//THIS IS AN EXAMPLE OF ROUTING AS CONTROLLER + VIEW
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import './moviesList.html';

class MoviesList {
  constructor($scope) {
    'ngInject';

    this.movies = [
        'Mogli: O Menino Lobo',
        'Capitão América: Guerra Civil'
    ];
  }
}

const name = 'moviesList';

// create a module
export default angular.module(name, [
  uiRouter
]).controller(name, MoviesList)
.config(config)
.run(run);

function config($stateProvider) {
 'ngInject';

 $stateProvider
   .state('moviesList', {
     url: '/movies-list',
     templateUrl: `src/components/${name}/${name}.html`,
     controllerAs: name,
     controller: MoviesList
   });
}

function run() {
    'ngInject';

    console.log('run: moviesList');
}
