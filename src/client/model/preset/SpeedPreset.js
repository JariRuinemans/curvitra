/**
 * Speed Preset
 */
function SpeedPreset ()
{
    Preset.call(this);
}

SpeedPreset.prototype = Object.create(Preset.prototype);
SpeedPreset.prototype.constructor = SpeedPreset;

/**
 * Name
 *
 * @type {String}
 */
SpeedPreset.prototype.name = 'Speed of light';

/**
 * Bonuses
 *
 * @type {Array}
 */
SpeedPreset.prototype.bonuses = [
    'BonusSelfFast',
    'BonusEnemyFast'
];

function BonusSelfFast(x, y)
{
    BonusSelf.call(this, x, y);
}

BonusSelfFast.prototype = Object.create(BonusSelf2.prototype);
BonusSelfFast.prototype.constructor = BonusSelf2Fast;

/**
 * Duration
 *
 * @type {Number}
 */
BonusSelfFast.prototype.duration = 40000000;

/**
 * Get effects
 *
 * @param {Avatar} avatar
 *
 * @return {Array}
 */
BonusSelfFast.prototype.getEffects = function(avatar)
{
    return [['velocity', 0.75 * BaseAvatar.prototype.velocity]];
};
