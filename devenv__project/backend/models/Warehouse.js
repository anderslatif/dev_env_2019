const { Model } = require('objection');
const Order = require('./Order');
const Chemical = require('./Chemical');

class Warehouse extends Model {
  static get tableName() {
    return 'warehouses';
  }

  static get relationMappings() {
    return {
      site: {
        relation: Model.BelongsToOneRelation,
        modelClass: Order,
        join: {
          from: 'warehouses.site_id',
          to: 'sites.id',
        },
      },
      warehouseChemicals: {
        relation: Model.ManyToManyRelation,
        modelClass: Chemical,
        join: {
          from: 'warehouses.id',
          through: {
            from: 'warehouse_chemicals.warehouse_id',
            to: 'warehouse_chemicals.chemical_id',
          },
          to: 'chemicals.id',
        },
      },
    };
  }
}

module.exports = Warehouse;
