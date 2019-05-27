const { Model } = require('objection');
const Order = require('./Order');

class OrderChemical extends Model {
  static get tableName() {
    return 'order_chemicals';
  }

  static get relationMappings() {
    return {
      orders_chemicals: {
        relation: Model.HasManyRelation,
        modelClass: Order,
        join: {
          from: 'order_chemicals.order_id',
          to: 'orders.id',
        },
      },
    };
  }
}

module.exports = OrderChemical;
