import React, {useEffect, useState} from 'react';
import Error from '../Error';

import api from '../../services/api';

import './styles.css';

export default function Alunos(){
  const ra = localStorage.getItem('ra');

  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    async function fetchData(){
      try {
        const response = await api.get('/users');
        const data = response.data;
        setAlunos(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  const ContainerAluno = ({aluno}) => (
    <div className="ContainerAluno">
      <p>{aluno.nome}</p>
      <p>{aluno.email}</p>
    </div>
  )

  //caso não esteja logado
  if(!ra){
    return <Error />
  }

  return (
    <div className="Alunos">
      <div className="ContainerAlunos">
        {alunos.map((aluno, index) => (
          <ContainerAluno aluno={aluno} key={index} />
        ))}
      </div>
    </div>
  )
}
