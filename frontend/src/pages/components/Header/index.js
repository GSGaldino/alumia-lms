import React from 'react';

import './styles.css';

export default function Header({ text }){
  return (
    <div className="Header">
      <h1>{text}</h1>
    </div>
  )
}
