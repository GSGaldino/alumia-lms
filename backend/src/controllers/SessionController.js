const connection = require('../database');

module.exports = {
  async aluno(req, res) {
    const { ra, email } = req.body;
    const aluno = await connection('usuario')
      .select('*')
      .where('ra', ra)
      .andWhere('email', email)
      .first();

    if (!aluno) {
      return res.json({
        message: 'Erro: Nenhum aluno encontrado com esses dados!'
      })
    }

    return res.json({
      data: aluno
    })
  },
  async logado(req, res) {
    const { ra } = req.body;
    const aluno = await connection('usuario')
      .select('*')
      .where('ra', ra)
      .first();

    if (!ra) {
      return res.status(500).json({
        message: "Internal server error"
      })
    }
    return res.json(aluno);
  },
  async alumia(req, res) {
    const {email, password = null} = req.body;
    const usuario = await connection('usuario')
      .select('*')
      .where('email', email)
      .andWhere('password', password)
      .first();

    if(!usuario || usuario.permissoes !== 'Alumia'){
      return res.json({
        message: 'Falha no login!'
      })
    }

    //se tudo der certo
    return res.json(usuario);
  }
}
