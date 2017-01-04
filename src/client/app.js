var CurviationApp = angular.module('CurviationApp', ['ngRoute', 'ngCookies', 'colorpicker.module']),
    gamepadListener = new GamepadListener({analog: false, deadZone: 0.4});

CurviationApp.service('SocketClient', SocketClient);
CurviationApp.service('Profile', ['$rootScope', Profile]);
CurviationApp.service('SoundManager', ['Profile', SoundManager]);
CurviationApp.service('ActivityWatcher', ['SocketClient', ActivityWatcher]);
CurviationApp.service('RoomRepository', ['SocketClient', RoomRepository]);
CurviationApp.service('GameRepository', ['SocketClient', 'RoomRepository', 'SoundManager', GameRepository]);
CurviationApp.service('Chat', ['SocketClient', 'RoomRepository', Chat]);
CurviationApp.service('Radio', ['Profile', Radio]);
CurviationApp.service('Notifier', ['SoundManager', 'ActivityWatcher', Notifier]);
CurviationApp.service('Analyser', ['$rootScope', Analyser]);

CurviationApp.controller(
    'CurviationController',
    ['$scope', '$window', '$location', 'Profile', 'Analyser', 'ActivityWatcher', 'SocketClient', CurviationController]
);

CurviationApp.controller(
    'RoomsController',
    ['$scope', '$location', 'SocketClient', RoomsController]
);
CurviationApp.controller(
    'RoomController',
    ['$scope', '$routeParams', '$location', 'SocketClient', 'RoomRepository', 'Profile', 'Chat', 'Notifier', RoomController]
);
CurviationApp.controller(
    'RoomConfigController',
    ['$scope', 'RoomRepository', RoomConfigController]
);
CurviationApp.controller(
    'GameController',
    ['$scope', '$routeParams', '$location', 'SocketClient', 'GameRepository', 'Chat', 'Radio', 'SoundManager', GameController]
);
CurviationApp.controller(
    'ChatController',
    ['$scope', 'Chat', ChatController]
);
CurviationApp.controller(
    'PlayerListController',
    ['$scope', '$element', 'SocketClient', PlayerListController]
);
CurviationApp.controller(
    'RoundController',
    ['$scope', 'GameRepository', 'Notifier', RoundController]
);
CurviationApp.controller(
    'MetricController',
    ['$scope', 'SocketClient', MetricController]
);
CurviationApp.controller(
    'WaitingController',
    ['$scope', 'SocketClient', WaitingController]
);
CurviationApp.controller(
    'KillLogController',
    ['$scope', '$interpolate', 'SocketClient', KillLogController]
);
CurviationApp.controller(
    'ProfileController',
    ['$scope', 'Profile', 'Radio', 'SoundManager', ProfileController]
);

CurviationApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: 'js/views/rooms/list.html',
            controller: 'RoomsController'
        })
        .when('/about', {
            templateUrl: 'js/views/pages/about.html'
        })
        .when('/room/:name', {
            templateUrl: 'js/views/rooms/detail.html',
            controller: 'RoomController',
            reloadOnSearch: false
        })
        .when('/game/:name', {
            templateUrl: 'js/views/game/play.html',
            controller: 'GameController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
