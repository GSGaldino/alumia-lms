import React from 'react';

import './styles.css';

export default function Header({ entidade }){
  return (
    <div className="Header">
      <h1>Login {entidade}</h1>
    </div>
  )
}
