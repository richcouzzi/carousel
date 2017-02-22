function carousel($timeout) {
		return {
				restrict: 'AE',
				replace: true,
				scope: {
						images: '=',
						autoplay: '=',
						speed: '='
				},
				link: (scope, elem, attrs) => {

						let clock;
						let tick = scope.speed || 5000;

						scope.currentIndex = 0;

						scope.goTo = (index) => {
							 $timeout.cancel(clock);
							 scope.currentIndex = index;
						};

						scope.next = () => {
								$timeout.cancel(clock);
								if (scope.currentIndex < scope.images.length - 1) {
										scope.currentIndex++;
								} else {
										scope.currentIndex = 0;
								}
						};

						scope.prev = () => {
								$timeout.cancel(clock);
								if (scope.currentIndex > 0) {
										scope.currentIndex--;
								} else {
										scope.currentIndex = scope.images.length - 1;
								}
						};

						scope.$watch('currentIndex', () => {
								scope.images.forEach((image) => {
										image.visible = false;
								});
								scope.images[scope.currentIndex].visible = true;
						});

						if (scope.autoplay) {

								let autoplay = () => {
										clock = $timeout(() => {
												scope.next();
												clock = $timeout(autoplay, tick);
										}, tick);
								};

								autoplay();

								scope.$on('$destroy', () => {
									$timeout.cancel(clock);
								});
						}
				},
				templateUrl: 'templates/components/carousel.html'
		}
}

carousel.$inject = ['$timeout'];
export { carousel };
