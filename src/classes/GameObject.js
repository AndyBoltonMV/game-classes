/** @class - Represents a Game Object. */
class GameObject {
  /**
   * Create a Game Object.
   * @param {Object} config - Configuration values for class
   * @param {string} config.src - Image source
   * @param {Array.<number,number>} config.location - Array containing x & y coordinates
   */
  constructor(config) {
    this.src = config.src;
    this.location = config.location;
  }
  /**
   * Get the location coordinates
   * @return {Array.<number, number>} The location coordinates
   */
  get location() {
    return this.location;
  }
  /**
   * Update the location coordinates
   * @param {Array.<number, number>} newLocation - Updated coordinates
   */
  set location(newLocation) {
    this.location = newLocation;
  }
}

module.exports = GameObject;
