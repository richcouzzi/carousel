function hoverClass () {
    return {
        restrict: 'A',
        scope: {
            hoverClass: '@'
        },
        link: function (scope, element) {
            element.on('mouseenter', () => {
                element.addClass(scope.hoverClass);
            });
            element.on('mouseleave', () => {
                element.removeClass(scope.hoverClass);
            });
        }
    };
}

export { hoverClass };
