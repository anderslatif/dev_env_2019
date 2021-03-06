const { Model } = require('objection');
const User = require('./User');

class UserRole extends Model {
  static get tableName() {
    return 'user_roles';
  }

  static get relationMappings() {
    return {
      users: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: 'users.user_roles_id',
          to: 'user_roles.id',
        },
      },
    };
  }
}

module.exports = UserRole;
