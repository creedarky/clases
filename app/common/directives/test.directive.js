angular.module('app.directives')
  .directive('testDirective', testDirective);

function testDirective() {
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
}
