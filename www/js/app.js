// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('front', {
    url: '/front',
    templateUrl: 'templates/front.html'
  })
  .state('location', {
    url: '/location',
    templateUrl: 'templates/location.html',
    controller: 'MapCtrl'
  })
  .state('tata-tertib', {
    url: '/tata-tertib',
    templateUrl: 'templates/pages-template.html',
    controller: 'TataTertibCtrl'
  })
  .state('visi-misi', {
    url: '/visi-misi',
    templateUrl: 'templates/pages-template.html',
    controller: 'VisiMisiCtrl'
  })
  .state('sejarah', {
    url: '/sejarah',
    templateUrl: 'templates/pages-template.html',
    controller: 'SejarahCtrl'
  })
  .state('sambutan', {
    url: '/sambutan',
    templateUrl: 'templates/pages-template.html',
    controller: 'SambutanCtrl'
  })
  .state('berita', {
    url: '/berita/:id',
    templateUrl: 'templates/berita.html',
    controller: 'BeritaCtrl'
  })
  .state('detailberita', {
    url: '/detailberita/:id',
    templateUrl: 'templates/detailberita.html',
    controller: 'DetailBeritaCtrl'
  })

  $urlRouterProvider.otherwise('/front');
})