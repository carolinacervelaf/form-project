import React from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';
import { validarCPF, validarSenha } from './models/Cadastro';
import ValidacoesCadastro from './contexts/ValidacoesCadastro';


function App() {
  return (
    <Container component="article" maxWidth="sm" >
      <Typography variant='h3' component='h1' color='primary' align='center'>Formulário de Cadastro</Typography>
      <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha }}>
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}


function aoEnviarForm(dados) {
  console.log(dados);
}


export default App;
