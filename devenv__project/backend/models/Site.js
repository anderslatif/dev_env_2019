const { Model } = require('objection');

class Site extends Model {
  static get tableName() {
    return 'sites';
  }
}

module.exports = Site;
