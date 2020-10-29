import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../components/Header';
import api from '../../services/api';

import './styles.css';

export default function Home() {
  const [entidade, setEntidade] = useState('Aluno');
  const [ra, setRa] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/session', {ra, email})
      //caso não encontre o aluno
      if(response.data.message){
        document.querySelector('.Login-aluno').reset();
        return alert(response.data.message)
      }

      //caso de tudo certo
      localStorage.setItem('ra', response.data.data.ra);
      history.push('/dashboard');
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="Home">
      <Header
        entidade={entidade}
      />

      <form className="Login-aluno" onSubmit={handleForm}>
        <label>
          RA
          <input onChange={e => setRa(e.target.value)} type="text" placeholder="RA" required />
        </label>
        <label>
          Email
          <input onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" required />
        </label>
        <input type="submit" value="Login" className="button" />

        <div className="links">
          <a href="/">Sou IES</a>
          <a href="/">Sou Alumia</a>
        </div>

      </form>

    </div>
  )
}
