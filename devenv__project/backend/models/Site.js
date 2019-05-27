const { Model } = require('objection');
const Order = require('./Order');

class Site extends Model {
  static get tableName() {
    return 'sites';
  }

  static get relationMappings() {
    return {
      siteSource: {
        relation: Model.HasManyRelation,
        modelClass: Order,
        join: {
          from: 'orders.user_roles_id',
          to: 'orders.site_source_id',
        },
        siteDestination: {
          relation: Model.HasManyRelation,
          modelClass: Order,
          join: {
            from: 'users.user_roles_id',
            to: 'orders.site_destination_id',
          },
        },
      },
    };
  }
}

module.exports = Site;
