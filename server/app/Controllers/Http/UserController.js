'use strict'

const User = use('App/Models/User')

class UserController {
  register({ request }) {
    async const { email, password } = request.all()
    // console.log(email, password)
    const user = await User.create({
      email,
      password,
      username: email
    })
    return user
  }
}

module.exports = UserController
