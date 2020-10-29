const connection = require('../database');

module.exports = {
  async index(req, res){
    const users = await connection('usuario').select('*');

    res.json(users);
  },
  async create(req, res){
    const criado_em = new Date().getTime();
    const {
      ra, 
      nome, 
      sobrenome, 
      email, 
      status, 
      score, 
      interacao, 
      telefone, 
      telefone2, 
      ano_ingresso,
      permissoes
    } = req.body;

    const [user_id] = await connection('usuario')
      .insert({
        ra, 
        nome, 
        sobrenome, 
        email, 
        status, 
        score, 
        interacao, 
        telefone, 
        telefone2, 
        ano_ingresso,
        permissoes,
        criado_em
      })

    res.json({
      message: `Aluno com id global: ${user_id} criado com sucesso!`
    })
  }
}