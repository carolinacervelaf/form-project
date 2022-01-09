import React, {useState, useContext} from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';


function DadosPessoais({aoEnviar}) {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPormocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf:{valido: true, texto: ""}});

    const validacoes = useContext(ValidacoesCadastro)

    function validarCampos(event){
            const {name, value} = event.target;
            const novoEstado = {...erros}
            novoEstado[name] = validacoes[name](value); 
            setErros(novoEstado);
    }

    function possoEnviar(){
        for(let campo in erros){
            if(!erros[campo].valido){
                return false
            }
        }
        return true;
    }

    return (
        <form
        onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
            }}}>

            <TextField id="nome"
            value={nome}
            onChange={(event) => {setNome(event.target.value)}}
            label="Nome" 
            name='nome'
            variant="outlined" 
            margin='normal' 
            fullWidth />

            <TextField id="sobrenome"
            value={sobrenome}
            onChange={(event) => {setSobrenome(event.target.value);}} 
            label="Sobrenome"
            name='sobrenome' 
            variant="outlined" 
            margin='normal' 
            fullWidth />

            <TextField id="CPF"
            value={cpf}
            onChange={(event) => {setCpf(event.target.value);}}
            onBlur={validarCampos}
            error={!erros.cpf.valido}
            helperText={erros.cpf.texto}
            label="CPF" 
            name='cpf'
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
            color="primary">Próximo</Button>
        </form>
    );
}

export default DadosPessoais;
