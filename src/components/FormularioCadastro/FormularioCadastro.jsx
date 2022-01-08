import React, {useState} from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';


function FormularioCadastro({aoEnviar, validarCPF}) {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPormocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf:{valido: true, texto: ""}});

    return (
        <form
        onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({nome, sobrenome, cpf, novidades, promocoes})}}>

            <TextField id="nome"
            value={nome}
            onChange={(event) => {setNome(event.target.value)}}
            label="Nome" 
            variant="outlined" 
            margin='normal' 
            fullWidth />

            <TextField id="sobrenome"
            value={sobrenome}
            onChange={(event) => {setSobrenome(event.target.value);}} 
            label="Sobrenome" 
            variant="outlined" 
            margin='normal' 
            fullWidth />

            <TextField id="CPF"
            value={cpf}
            onChange={(event) => {setCpf(event.target.value);}}
            onBlur={(event) => {
                const ehValido = validarCPF(cpf)
                setErros({cpf:ehValido})}}
            error={!erros.cpf.valido}
            helperText={erros.cpf.texto}
            label="CPF" 
            variant="outlined" 
            margin='normal' 
            fullWidth />

            <FormControlLabel 
            label='Promoções'
            control={<Switch name='promocoes'
            checked={promocoes}
            onChange={(event) => {setPormocoes(event.target.checked)}}
            color='primary' />} />
            
            <FormControlLabel 
            label='Novidades' 
            control={<Switch name='novidades'
            checked={novidades}
            onChange={(event) => {setNovidades(event.target.checked)}}
            color='primary' />} />

            <Button type="submit" 
            variant="contained" 
            color="primary">Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;