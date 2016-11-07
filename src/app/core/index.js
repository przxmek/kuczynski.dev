import angular from 'angular';

// import webcvHeader from './appHeader.directive';
// import webcvFooter from './appFooter.directive';
// let directives = angular.module('webcv.core.directives', [webcvHeader, webcvFooter]).name;

import data from './data.service';
let services = angular.module('webid.core.services', [data]).name;

export default angular.module('webid.core', [services]).name;
