const { Model } = require('objection');
const User = require('./User');
const Site = require('./Site');
const OrdersChemicals = require('./OrderChemical');

class Order extends Model {
  static get tableName() {
    return 'orders';
  }

  static get relationMappings() {
    return {
      createdBy: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'orders.created_by',
          to: 'users.id',
        },
      },
      orderChemicals: {
        relation: Model.BelongsToOneRelation,
        modelClass: OrdersChemicals,
        join: {
          from: 'orders.id',
          to: 'order_chemicals.order_id',
        },
      },
      siteSource: {
        relation: Model.BelongsToOneRelation,
        modelClass: Site,
        join: {
          from: 'orders.site_source_id',
          to: 'sites.id',
        },
      },
      siteDestination: {
        relation: Model.BelongsToOneRelation,
        modelClass: Site,
        join: {
          from: 'orders.site_destination_id',
          to: 'sites.id',
        },
      },
      orders_chemicals: {
        relation: Model.BelongsToOneRelation,
        modelClass: Site,
        join: {
          from: 'orders.site_destination_id',
          to: 'sites.id',
        },
      },
    };
  }
}

module.exports = Order;
