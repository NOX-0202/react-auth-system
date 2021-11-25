import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../Includes/Input';
import Modal from '../../Includes/SignModal/Modal';
import Square from '../../Includes/Square/Square';
import Api from "../../services/api"
import './signup.css'


const Form = () => {
    const [form, setForm] = useState({
        nome: '',
        snome: '',
        email: '',
        tel: '',
        pass: '',
        nasc: '',
        cep: '',
        obs: ''
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalText = useState('Usuário salvo com sucesso.')
 
    const onInputChange = ({ name, value }) => setForm({...form, [name]: value});

    const handleSubmit = async () => {
        if (!Object.values(form).includes('')) {
          setIsModalOpen(true);

          let form_data = new FormData();
          for (let key in form ) {
              form_data.append(key, form[key]);
          }
          const response = await Api.post('/insert', form_data)
          console.log(response)
        } 
    }

    return (
        <div className="main">
          <Square />
          <div className="signup-container"> 
          <div className="signup-field-group">
              <Input type="text" name="nome" placeholder="Nome" value={form.name} onChange={(e) => onInputChange(e.target)}/>
              <Input type="text" name="snome" placeholder="Sobrenome" value={form.lastName} onChange={(e) => onInputChange(e.target)}/>
          </div>
            <Input type="email" name="email" placeholder="E-mail de contato" value={form.email} onChange={(e) => onInputChange(e.target)}/>
            <div className="signup-field-group">
              <Input type="text" name="tel" placeholder="Telefone com DDD" value={form.phone} onChange={(e) => onInputChange(e.target)}/>
              <Input type="password" name="pass" placeholder="Senha" value={form.password} onChange={(e) => onInputChange(e.target)}/>
            </div>
            <div className="signup-field-group">
              <Input type="text" name="nasc" placeholder="Data de Nascimento" value={form.birthDate} onChange={(e) => onInputChange(e.target)}/>
              <Input type="text" name="cep" placeholder="CEP" value={form.cep} onChange={(e) => onInputChange(e.target)}/>
            </div>
            <Input type="textarea" name="obs" placeholder="Observações" value={form.obs} onChange={(e) => onInputChange(e.target)}/>
            <button className="btn btn-submit" onClick={handleSubmit}> Salvar usuário </button>
            <Link to="/">
              <button className="btn btn-back"> Voltar </button>
            </Link>
            { isModalOpen && <Modal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} modalText={modalText}/> }
          </div> 
        </div>
    );
}
export default Form;