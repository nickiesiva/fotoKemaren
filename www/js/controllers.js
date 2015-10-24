/* global angular, document, window */
'use strict';

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout) {
    // Form data for the login modal



    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };

    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };
})

.controller('LoginCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();
})

.controller('StatCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');


    $scope.addPoints = function () {
      var seriesArray = $scope.chartConfig.series
        var rndIdx = Math.floor(Math.random() * seriesArray.length);
      seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
    };

    $scope.addSeries = function () {
      var rnd = []
        for (var i = 0; i < 10; i++) {
          rnd.push(Math.floor(Math.random() * 20) + 1)
        }
      $scope.chartConfig.series.push({
        data: rnd
      })
    }

    $scope.removeRandomSeries = function () {
      var seriesArray = $scope.chartConfig.series
        var rndIdx = Math.floor(Math.random() * seriesArray.length);
      seriesArray.splice(rndIdx, 1)
    }

    $scope.toggleLoading = function () {
      this.chartConfig.loading = !this.chartConfig.loading
    }

    $scope.chartConfig = {
      options: {
        chart: {
          type: 'bar'
        }
      },
      title: {
        text: 'Grafik Laporan'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Jumlah Laporan Kemaren'
        }
      },
      legend: {
        reversed: true
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      series: [{
        name: 'Gelandangan',
        data: [5, 3, 4, 7, 2, 20, 2, 6, 8, 1]
      }, {
        name: 'Pengemis',
        data: [2, 2, 3, 2, 1, 3, 4, 2, 10, 9]
      }, {
        name: 'Anak Jalanan',
        data: [3, 4, 4, 2, 5, 2, 13, 11]
      }]
    }
})

.controller('FriendsCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion, Camera,$ionicLoading) {

    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');

  // $scope.getPhoto = function() {                                                                                                                                      
  //   console.log('Getting camera');                                                                                                                                    
  //   Camera.getPicture({                                                                                                                                               
  //     quality: 75,                                                                                                                                                    
  //     targetWidth: 320,                                                                                                                                               
  //     targetHeight: 320,                                                                                                                                              
  //     saveToPhotoAlbum: false                                                                                                                                         
  //   }).then(function(imageURI) {                                                                                                                                      
  //     console.log(imageURI);                                                                                                                                          
  //     $scope.lastPhoto = imageURI;                                                                                                                                    
  //   }, function(err) {                                                                                                                                                
  //     console.err(err);                                                                                                                                               
  //   });                                                                                                                                                               
  // }                                                                                                                                                          

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();

})

.controller('ProfileCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('ActivityCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');

    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})

.controller('GalleryCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });

})

.controller('JepretCtrl', function($scope, Friends, Camera) {                                                                                                        
  $scope.friends = Friends.all();                                                                                                                                     
  $scope.getPhoto = function() {                                                                                                                                      
    console.log('Getting camera');                                                                                                                                    
    Camera.getPicture({                                                                                                                                               
      quality: 75,                                                                                                                                                    
      targetWidth: 320,                                                                                                                                               
      targetHeight: 320,                                                                                                                                              
      saveToPhotoAlbum: false                                                                                                                                         
    }).then(function(imageURI) {                                                                                                                                      
      console.log(imageURI);                                                                                                                                          
      $scope.lastPhoto = imageURI;                                                                                                                                    
    }, function(err) {                                                                                                                                                
      console.err(err);                                                                                                                                               
    });                                                                                                                                                               
  }                                                                                                                                                                   
})      

.controller('tindakanCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {                                                                                                        
       // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();                                                                                                                                                 
})       

;
