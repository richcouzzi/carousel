import angular from 'angular';
import 'angular-ui-router';

import { config } from './utils/config';

import { MainController } from './controllers/main.controller';
import { carousel } from './directives/carousel.directive';
import { hoverClass } from './directives/hoverclass.directive';

const app = angular.module('app', ['ui.router']);

app
  .config(config)
  .controller('MainController', MainController)
  .directive('carousel', carousel)
  .directive('hoverClass', hoverClass);
