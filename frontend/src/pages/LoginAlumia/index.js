import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import Header from '../components/Header';
import api from '../../services/api';

import './styles.css';

export default function Home() {
  //propriedades de login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/session/alumia', {email, password})
      //caso não encontre o usuario
      if(response.data.message){
        document.querySelector('.Login-alumia').reset();
        return alert(response.data.message)
      }

      //caso de tudo certo
      localStorage.setItem('ra', response.data.ra);
      history.push('/dashboard');
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="Home">
      <Header
        text="Login Alumia"
      />

      <form className="Login-alumia" onSubmit={handleForm}>

        <label>
          Email
          <input onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" required />
        </label>
        <label>
          Senha
          <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Senha" required />
        </label>
        <input type="submit" value="Login" className="button" />

        <div className="links">
          <a href="/">Sou IES</a>
          <Link to="/">Sou Aluno</Link>
        </div>

      </form>

    </div>
  )
}
