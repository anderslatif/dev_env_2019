const { Model } = require('objection');
const Order = require('./Order');
const Warehouse = require('./Warehouse');

class Chemical extends Model {
  static get tableName() {
    return 'chemicals';
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
        modelClass: Warehouse,
        join: {
          from: 'chemicals.id',
          through: {
            from: 'warehouse_chemicals.chemical_id',
            to: 'warehouse_chemicals.warehouse_id',
          },
          to: 'warehouses.id',
        },
      },
    };
  }
}

module.exports = Chemical;
