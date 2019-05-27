const { Model } = require('objection');
const UserRole = require('./UserRole');
const Order = require('./Order');
const GateScans = require('./GateScan');

class User extends Model {
  static get tableName() {
    return 'users';
  }

  /*  $beforeInsert() {
    this.timestamp = new Date().toISOString();
    delete this.updated_at;
  } */

  /*  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  } */

  static get relationMappings() {
    return {
      userRole: {
        relation: Model.BelongsToOneRelation,
        modelClass: UserRole,
        join: {
          from: 'users.user_role_id',
          to: 'user_roles.id',
        },
        gateScans: {
          relation: Model.BelongsToOneRelation,
          modelClass: GateScans,
          join: {
            from: 'users.id',
            to: 'gate_scans.scanned_by',
          },
          orders: {
            relation: Model.HasManyRelation,
            modelClass: Order,
            join: {
              from: 'users.id',
              to: 'orders.created_by',
            },
          },
        },
      },
    };
  }
}

module.exports = User;
