angular.module('starter.controllers', [])
.controller('MapCtrl', function ($scope, $ionicLoading, $compile, $state, $window) {
    window.initMap = function () {
      var myLatlng = new google.maps.LatLng(-6.172459, 106.797900);
  
      var mapOptions = {
        center: myLatlng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
  
      var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
      var contentString = "<div><a ng-click='clickTest()'>Universitas Budi Luhur<br>+62-21-5853753</a></div>";
  
      var compiled = $compile(contentString)($scope);
  
      var infowindow = new google.maps.InfoWindow({
        content: compiled[0]
      });
  
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Universitas Budi Luhur'
      });
  
      google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
      });
  
      $scope.map = map;
    }
  
    google.maps.event.addDomListener(window, 'load', initMap);
    initMap();
    
    $scope.doAbout = function () {
      $window.history.back();
    };
  
})
.controller('TataTertibCtrl', function ($scope, $http, $state, $window) {
    $http.get("https://sma-23-jakarta.000webhostapp.com/wp-json/wp/v2/pages/81")
        .then(function (response) {
            $scope.posts = response.data;
        });
    $scope.doAbout = function () {
        $window.history.back();
    }
})
.controller('VisiMisiCtrl', function ($scope, $http, $state, $window) {
    $http.get("https://sma-23-jakarta.000webhostapp.com/wp-json/wp/v2/pages/83")
        .then(function (response) {
            $scope.posts = response.data;
        });
    $scope.doAbout = function () {
        $window.history.back();
    }
})
.controller('SejarahCtrl', function ($scope, $http, $state, $window) {
    $http.get("https://sma-23-jakarta.000webhostapp.com/wp-json/wp/v2/pages/88")
        .then(function (response) {
            $scope.posts = response.data;
        });
    $scope.doAbout = function () {
        $window.history.back();
    }
})
.controller('SambutanCtrl', function ($scope, $http, $state, $window) {
    $http.get("https://sma-23-jakarta.000webhostapp.com/wp-json/wp/v2/pages/85")
        .then(function (response) {
            $scope.posts = response.data;
        });
    $scope.doAbout = function () {
        $window.history.back();
    }
})
.controller('BeritaCtrl', function ($scope, $http, $state, $window){
    $http.get("https://sma-23-jakarta.000webhostapp.com/wp-json/wp/v2/posts")
        .then(function (response) {
            $scope.posts = response.data;
        });
    $scope.doAbout = function () {
        $window.history.back();
    };
})
.controller('DetailBeritaCtrl', function ($scope, $http, $stateParams, $state, $window) {
    $http.get("http://sma-23-jakarta.000webhostapp.com/wp-json/wp/v2/posts/"+$stateParams.id)
        .then(function (response) {
            $scope.posts = response.data;
        });
    $scope.doAbout = function () {
        $window.history.back();
    }
})