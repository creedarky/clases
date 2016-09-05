angular.module('app', [

])
  .controller('MainCtrl', function ($scope) {
    $scope.categories = [
      {"id": 0, "name": "Development"},
      {"id": 1, "name": "Design"},
      {"id": 2, "name": "Exercise"},
      {"id": 3, "name": "Humor"}
    ];

    $scope.bookmarks = [
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

    $scope.currentCategory = null;

    function isCurrentCategory(category) {
      return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
    }

    function setCurrentCategory(category) {
      $scope.currentCategory = category;
    }

    $scope.isCurrentCategory = isCurrentCategory;
    $scope.setCurrentCategory = setCurrentCategory;
    $scope.format = 'M/d/yy h:mm:ss a';
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
