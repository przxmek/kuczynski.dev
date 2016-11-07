// Custom styles
import '../assets/css/style.css';


import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';

angular.module('webcv', [uirouter, blog, contacts, core, feedback, home, portfolio, resume])
    .config(routing);
