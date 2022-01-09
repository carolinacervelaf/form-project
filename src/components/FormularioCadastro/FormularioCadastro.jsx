import React, {useState, useEffect} from 'react';

import DadosPessoais from './DadosPessoais';
import DadosUsuarios from './DadosUsuarios';
import DadosEntrega from './DadosEntrega';
import { StepLabel, Stepper, Typography, Step } from '@material-ui/core';

function FormularioCadastro({aoEnviar}) {

    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});
    useEffect(() => {
        if(etapaAtual === formularios.length-1){
            aoEnviar(dadosColetados)
        }
    });

    const formularios = [
        <DadosUsuarios aoEnviar={coletarDados}  />,
        <DadosPessoais aoEnviar={coletarDados} />,
        <DadosEntrega aoEnviar={coletarDados} />,
        <Typography variant='h5'>Obrigada pelo Cadastro!</Typography>
    ]

    function coletarDados(dados){
        setDados({...dadosColetados, ...dados})
        proximo();
    }

    function proximo(){
        setEtapaAtual(etapaAtual + 1);
    }

    return (
        <section>
        <Stepper activeStep={etapaAtual}>
            <Step><StepLabel>Login</StepLabel></Step>
            <Step><StepLabel>Pessoal</StepLabel></Step>
            <Step><StepLabel>Entrega</StepLabel></Step>
            <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
        {formularios[etapaAtual]}
        </section>
    );
}

export default FormularioCadastro;
