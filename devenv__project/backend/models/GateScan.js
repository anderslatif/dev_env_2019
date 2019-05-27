const { Model } = require('objection');
const User = require('./User');

class GateScan extends Model {
  static get tableName() {
    return 'user_roles';
  }

  static get relationMappings() {
    return {
      users: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: 'gate_scans.scanned_by',
          to: 'users.id',
        },
      },
    };
  }
}

module.exports = GateScan;
