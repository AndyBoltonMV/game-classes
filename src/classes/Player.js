/** @class - The Player class */
class Player {
  /**
   * Create a Player Object.
   * @param {Object} config - Configuration values for the class
   * @param {Array.<Number, Number>} config.location - Array containing x & y coords
   * @param {Object} config.inventory - Object containing items in players inventory
   * @param {String} config.src - Image source for animation
   */
  constructor(config) {
    this.location = config.location;
    this.inventory = config.inventory;
    this.image = config.src || null;
  }
  /**
   *
   * @param {String} src - New image source for animation
   */
  changeImage(src) {
    this.image = src;
  }
}
