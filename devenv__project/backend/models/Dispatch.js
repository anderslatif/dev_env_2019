const { Model } = require('objection');

class Dispatch extends Model {
  static get tableName() {
    return 'dispatch_table';
  }
}

module.exports = Dispatch;
