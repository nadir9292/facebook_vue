import { Model } from "objection"
import hashPassword from "../method/hashPassword.js"

class UserModel extends Model {
  static tableName = "users"

  checkPassword(password) {
    const [passwordHash] = hashPassword(password, this.passwordSalt)

    return passwordHash === this.passwordHash
  }

  static findUserByEmail(email) {
    return UserModel.query().findOne({ email })
  }
}

export default UserModel
