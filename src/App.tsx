import React from 'react';
import './App.css';
import Cabecalho from './components/Cabecalho';
import Container from './components/Container';
import Titulo from './components/Titulo';
import { Rodape } from './components/Rodape';

function App() {
  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Administrativa</Titulo>
      </Container>
      <Rodape />
    </>
  );
}

export default App;
