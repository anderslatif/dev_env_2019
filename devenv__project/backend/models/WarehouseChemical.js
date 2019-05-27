const { Model } = require('objection');
const Order = require('./Order');

class WarehouseChemical extends Model {
  static get tableName() {
    return 'warehouse_chemicals';
  }
}

module.exports = WarehouseChemical;
