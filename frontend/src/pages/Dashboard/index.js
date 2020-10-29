import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

import api from '../../services/api';

export default function Dashboard() {
  const ra = localStorage.getItem('ra');
  const [usuario, setUsuario] = useState([]);
  const history = useHistory();

  useEffect(async () => {
    const response = await api.post('/aluno/dashboard', { ra });
    setUsuario(response.data);
  }, [ra]);

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div className="Dashboard">
      <h1>Olá, {usuario.nome}</h1>

      <div className="dados">
        <p style={{ margin: '20px auto' }}>Dados:</p>
        <p><strong>RA:</strong> {usuario.ra}</p>
        <p><strong>Nome Completo:</strong> {`${usuario.nome} ${usuario.sobrenome}`}</p>
        <p><strong>Email:</strong> {usuario.email}</p>
        <p><strong>status:</strong> {usuario.status}</p>
        <p><strong>Score:</strong> {usuario.score}</p>
        <p><strong>Interação:</strong> {usuario.interacao}</p>
        <p><strong>Telefone:</strong> {usuario.telefone}</p>
        <p><strong>Telefone 2:</strong> {usuario.telefone2}</p>
        <p><strong>Ano ingresso:</strong> {usuario.ano_ingresso}</p>
        <p><strong>Permissões:</strong> {usuario.permissoes}</p>
        <p><strong>Criado em:</strong> {usuario.criado_em}</p>
      </div>

      <button 
        className="button" 
        style={{maxWidth: "600px", margin: "10px auto"}}
        onClick={handleLogout}
      >Logout</button>
    </div>
  )
}
