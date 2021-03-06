/**
 * Curviation Controller
 *
 * @param {Object} $scope
 * @param {Object} $window
 * @param {Object} $location
 * @param {Profile} profile
 * @param {Analyser} analyser
 * @param {ActivityWatcher} watcher
 */
function CurviationController($scope, $window, $location, profile, analyser, watcher, client)
{
    AbstractController.call(this, $scope);

    this.$window       = $window;
    this.$location     = $location;
    this.analyser      = analyser;
    this.watcher       = watcher;
    this.client        = client;

    // Bind
    this.onConnect     = this.onConnect.bind(this);
    this.onDisconnect  = this.onDisconnect.bind(this);
    this.reload        = this.reload.bind(this);

    // Hydrate scope
    this.$scope.status  = 'connecting';
    this.$scope.reload  = this.reload;
    this.$scope.profile = false;

    this.client.on('connected', this.onConnect);
    this.client.on('disconnected', this.onDisconnect);
}

CurviationController.prototype = Object.create(AbstractController.prototype);
CurviationController.prototype.constructor = CurviationController;

/**
 * On connect
 *
 * @param {Event} e
 */
CurviationController.prototype.onConnect = function(e)
{
    this.$scope.status  = 'online';
    this.$scope.profile = true;
    this.digestScope();
};

/**
 * On disconnect
 *
 * @param {Event} e
 */
CurviationController.prototype.onDisconnect = function(e)
{
    document.body.classList.remove('game-mode');
    this.$scope.status = 'disconnected';
    this.digestScope();
};

/**
 * Reload
 */
CurviationController.prototype.reload = function()
{
    this.$window.location.href = '/';
};
