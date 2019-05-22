const { Model } = require('objection');
const UserRole = require('./UserRole');

class User extends Model {
  static get tableName() {
    return 'users';
  }

  $beforeInsert() {
    // this.timestamp = new Date().toISOString();
    // delete this.updated_at;
  }

  /*$beforeUpdate() {
    this.updated_at = new Date().toISOString();
    delete this.created_at;
  }*/

  static get relationMappings() {
    return {
      userRole: {
        relation: Model.BelongsToOneRelation,
        modelClass: UserRole,
        join: {
          from: 'users.user_role_id',
          to: 'user_roles.id',
        },
      },
    };
  }
}

module.exports = User;
