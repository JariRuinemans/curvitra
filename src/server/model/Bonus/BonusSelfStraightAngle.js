/**
 * Inverse Enemy Straight Angle
 *
 * @param {Number} x
 * @param {Number} y
 */
function BonusSelfStraightAngle(x, y)
{
    BonusEnemy.call(this, x, y);
}

BonusSelfStraightAngle.prototype = Object.create(BonusEnemy.prototype);
BonusSelfStraightAngle.prototype.constructor = BonusSelfStraightAngle;

/**
 * Duration
 *
 * @type {Number}
 */
BonusSelfStraightAngle.prototype.duration = 5000;

/**
 * Probability
 *
 * @type {Number}
 */
BonusSelfStraightAngle.prototype.probability = 0.6;

/**
 * Get effects
 *
 * @param {Avatar} avatar
 *
 * @return {Array}
 */
BonusSelfStraightAngle.prototype.getEffects = function(avatar)
{
    return [
        ['directionInLoop', false],
        ['angularVelocityBase', Math.PI/2]
    ];
};
