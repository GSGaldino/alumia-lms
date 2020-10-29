import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

import Header from '../components/Header';
import Error from '../Error';

export default function NovoAluno() {
  const history = useHistory();
  const storedRa = localStorage.getItem('ra');
  const [ra, setRa] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [score, setScore] = useState('');
  const [interacao, setInteracao] = useState('');
  const [telefone, setTelefone] = useState('');
  const [telefone2, setTelefone2] = useState('');
  const [ano_ingresso, setAnoIngresso] = useState(2018);
  const [permissoes, setPermissoes] = useState('Aluno');

  const handleForm = async (e) => {
    e.preventDefault();
    if (permissoes === 'Alumia' && password === '') {
      return alert('Usuários "Alumia" devem ter uma senha!')
    }

    const response = await api.post('/users', {
      ra,
      nome,
      sobrenome,
      email,
      password,
      status,
      score,
      interacao,
      telefone,
      telefone2,
      ano_ingresso,
      permissoes
    })
    alert(response.data.message);
    history.push('/alunos')
  }

  if (!storedRa) {
    return <Error />
  }

  return (
    <div className="NovoAluno">
      <Header text="Novo Aluno" />

      <form onSubmit={handleForm}>
        <input type="text" required placeholder="RA" onChange={e => setRa(e.target.value)} />
        <input type="text" required placeholder="Nome" onChange={e => setNome(e.target.value)} />
        <input type="text" placeholder="Sobrenome" onChange={e => setSobrenome(e.target.value)} />
        <input type="email" required placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
        <input type="text" placeholder="Status" onChange={e => setStatus(e.target.value)} />
        <input type="text" placeholder="Score" onChange={e => setScore(e.target.value)} />
        <input type="text" placeholder="Interação" onChange={e => setInteracao(e.target.value)} />
        <input type="tel" placeholder="Telefone" onChange={e => setTelefone(e.target.value)} />
        <input type="tel" placeholder="Telefone 2" onChange={e => setTelefone2(e.target.value)} />

        <label>
          Ano de ingresso
          <select onChange={e => setAnoIngresso(e.target.value)}>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
          </select>
        </label>

        <label>
          Permissões
          <select onChange={e => setPermissoes(e.target.value)}>
            <option value="Aluno">Aluno</option>
            <option value="IES">IES</option>
            <option value="Alumia">Alumia</option>
          </select>
        </label>

        <input type="submit" value="Cadastrar" className="button" />
        <Link to="/dashboard">
          <button className="button">Voltar</button>
        </Link>
      </form>
    </div>
  )
}
