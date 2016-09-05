angular.module('app', [
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('root', {
        url: '',
        templateUrl: 'app/template.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/about',
        template: '<h1> About page </h1>'
      })
      .state('404', {
        url: '/404',
        template: '<h1>Not found page </h1>'
      })
      .state('bookmark', {
        url: '/bookmark/:id',
        templateUrl: 'app/bookmark.html',
        controller: 'BookmarkController',
        resolve: {
          bookmark: function($stateParams, bookmarkFactory) {
            console.log('resolve')
            console.log(bookmarkFactory.findBookmark(+$stateParams.id));
            return bookmarkFactory.findBookmark(+$stateParams.id);
          }
        }
      })
    ;
    $urlRouterProvider.otherwise('/404');
  })
  .controller('MainCtrl', function ($scope, bookmarkFactory, categoryService) {
    $scope.categories = categoryService.getCategories();

    $scope.bookmarks = bookmarkFactory.getBookmarks();

    $scope.currentCategory = null;

    function isCurrentCategory(category) {
      return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
    }

    function setCurrentCategory(category) {
      $scope.currentCategory = category;
    }
    $scope.isCurrentCategory = isCurrentCategory;
    $scope.setCurrentCategory = setCurrentCategory;
    $scope.object = {
      show: true
    };
    $scope.show = true;
    $scope.toggleShow = function() {
      $scope.show = !$scope.show;
      $scope.object.show = !$scope.object.show;
    }
  })
  .controller('BookmarkController', function ($scope, bookmark, $state) {
    $scope.bookmark = bookmark;
    $scope.cancelEditing = function() {
      $state.go('root');
    }
  })
  .controller('FakeController', function ($scope) {
    $scope.bookmarks = [1, 2, 3, 4, 5, 6, 7];
  })
  .factory('bookmarkFactory', function() {
    var bookmarks = [
      {"id": 0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development" },
      {"id": 1, "title": "Egghead.io", "url": "http://egghead.io", "category": "Development" },
      {"id": 2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design" },
      {"id": 3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design" },
      {"id": 4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise" },
      {"id": 5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise" },
      {"id": 6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor" },
      {"id": 7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor" },
      {"id": 8, "title": "Dump", "url": "http://dump.com", "category": "Humor" }
    ];
    function getBookmarks() {
      return bookmarks;
    }

    function findBookmark(id) {
      return _.find(bookmarks, function(b) {
        return b.id === id;
      })
    }

    return {
      getBookmarks: getBookmarks,
      findBookmark: findBookmark
    }
  })
  .service('categoryService', function() {
    var categories = [
      {"id": 0, "name": "Development"},
      {"id": 1, "name": "Design"},
      {"id": 2, "name": "Exercise"},
      {"id": 3, "name": "Humor"}
    ];

    function getCategories() {
      return categories;
    }

    this.getCategories = getCategories
  })
  .directive('myCurrentTime', function($interval, dateFilter) {

    return {
      restrict: 'AE', // tipo que acepta (A = Atributo, E = Elemento, C = clase)
      link: function(scope, element, attrs) {
        var format,
          timeoutId;

        function updateTime() {
          element.text(dateFilter(new Date(), format));
        }

        scope.$watch(attrs.myCurrentTime, function(value) {
          format = value;
          updateTime();
        });

        element.on('$destroy', function() {
          $interval.cancel(timeoutId);
        });

        // start the UI update process; save the timeoutId for canceling
        timeoutId = $interval(function() {
          updateTime(); // update DOM
        }, 1000);
      }
    };
  })
  .directive('testDirective', function() {
    return {
      restrict: 'AE', // tipo que acepta (A = Atributo, E = Elemento, C = clase)
      replace: true, // Si elimina el custom tag y coloca solo el template
      template: '<p >Hello World, Active color {{ color }}</p>', // Template de la directiva
      scope: {
        colorOn: '@',
        colorOff: '@'
      },
      link: function(scope, elem) {
        scope.isOn = true;
        scope.color = scope.colorOn;
        elem.css('background-color', scope.color);
        elem.bind('click', function() {
          scope.$apply(function() {
            scope.isOn = !scope.isOn;
            var color = scope.isOn ? scope.colorOn : scope.colorOff;
            scope.color = color;
            elem.css('background-color', color);
          });
        });
        elem.bind('mouseover', function() {
          elem.css('cursor', 'pointer');
        });
        elem.on('$destroy', function() {
          elem.unbind();
        });
      }
    }
  })
;
