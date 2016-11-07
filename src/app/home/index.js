import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';

import Data from '../core/data.service';

import './home.css';

export default angular.module('webid.home', [uirouter, Data])
    .config(routing)
    .controller('HomeController', HomeController)
    .name;
