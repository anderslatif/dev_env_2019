const Model = require('objection').Model;

class UserRole extends Model {
    static get tableName() {
        return 'user_roles';
    }

}

module.exports = UserRole;
