/**
 * Preset
 */
function Preset () {}

/**
 * Bonuses
 *
 * @type {Array}
 */
Preset.prototype.bonuses = [];
Preset.prototype.name = [];
/**
 * Has onus
 *
 * @param {String} bonus
 *
 * @return {Boolean}
 */
Preset.prototype.hasBonus = function(bonus)
{
    return this.bonuses.indexOf(bonus) > -1;
};
Preset.prototype.hasName = function(name)
{
    return this.name.indexOf(name) > -1;
};