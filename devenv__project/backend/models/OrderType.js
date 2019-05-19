const { Model } = require('objection');

class OrderType extends Model {
  static get tableName() {
    return 'order_types';
  }
}

module.exports = OrderType;
