const connection = require('../database');

module.exports = {
  async index(req, res){
    const users = await connection('users').select('*');

    res.json(users);
  },
  async create(req, res){
    const created_at = new Date().getTime();
    const {email, username, password} = req.body;

    const [user_id] = await connection('users')
      .insert({
        email,
        username,
        password,
        created_at
      })

    res.json({
      message: `success created user with global id: ${user_id}`
    })
  }
}