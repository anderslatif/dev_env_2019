const { Model } = require('objection');

class Loading extends Model {
  static get tableName() {
    return 'loading_table';
  }
}

module.exports = Loading;
