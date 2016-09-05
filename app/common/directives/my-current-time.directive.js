angular.module('app.directives')
.directive('myCurrentTime', myCurrentTime);

function myCurrentTime($interval, dateFilter) {

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
}
