function Counter() {
	return {
		template: [
			'<div>',
				'<h3>Counter</h3>',
				'<div>Click anywhere to increment the counter!</div>',
				'<div>Current count: {{ count }}</div>',
			'</div>'
		].join(''),
		controller: function ($scope) {
			$scope.count = 0;
		},
		link: function (scope, elements, attrs) {
			elements.on('click', function () {
				scope.count ++;
				scope.$apply();
			});
			scope.$on('$destroy', function () {
        elements.off();
      });
		}
	}
}

angular
	.module('app')
	.directive('counter', Counter);