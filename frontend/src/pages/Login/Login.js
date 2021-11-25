import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Input from '../../Includes/Input'
import Square from '../../Includes/Square/Square';
import Api from "../../services/api"
import './login.css'

export default function Login( { history }) {
    const [form, setForm] = useState({
        email: '',
        pass: ''
    });

    const onInputChange = ({ name, value }) => setForm({...form, [name]: value});

    async function handleSubmit(event) {
        event.preventDefault()
        let form_data = new FormData();
        for (let key in form) {
            form_data.append(key, form[key]);
        }

        const response = await Api.post('/login', form_data)
        console.log(response.data)
        if (response.data.ok) {
            history.push(`/Dash`)
        }
    }

    return (
        <div className="main">
            <Square />
            <div className="login-container"> 
            <div className="login-field-group">
                <Input type="email" name="email" placeholder="E-mail de contato" className="e" value={form.email} onChange={(e) => onInputChange(e.target)}/>
                <Input type="password" name="pass" placeholder="Senha" value={form.pass} onChange={(e) => onInputChange(e.target)}/>
            </div>

            <div id="bottom">
                <button className="btn btn-enter" onClick={handleSubmit}> Entrar no sistema </button>
                <Link to="/signup">
                    <button className="btn btn-submit"> Cadastrar usuário </button>
                </Link>
            </div>
            </div> 
      </div>
    )
}