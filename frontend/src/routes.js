import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginAluno from './pages/LoginAluno';
import LoginAlumia from './pages/LoginAlumia';
import Dashboard from './pages/Dashboard';
import Alunos from './pages/Alunos';
import NovoAluno from './pages/NovoAluno';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={LoginAluno} />
        <Route path="/login/alumia" exact component={LoginAlumia} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/alunos" exact component={Alunos} />
        <Route path="/alunos/novo" exact component={NovoAluno} />

      </Switch>
    </BrowserRouter>
  )
}
