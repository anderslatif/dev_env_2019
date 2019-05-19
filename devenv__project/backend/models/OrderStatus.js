const { Model } = require('objection');

class OrderStatus extends Model {
  static get tableName() {
    return 'order_status';
  }
}

module.exports = OrderStatus;
