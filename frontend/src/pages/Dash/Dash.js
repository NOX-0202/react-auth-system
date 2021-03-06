import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Square from "../../Includes/Square/Square"
import Modal from '../../Includes/DelModal/Modal';
import Api from "../../services/api"
import AddIcon from "../../assets/add.png"
import updateIcon from "../../assets/update.png"
import delIcon from "../../assets/del.png"
import './Dash.css'

export default function Dash ({ history }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalText = useState('Deseja Deletar usuário?')
    const [users, setUsers] = useState([])

    const LoadModal = () => {
        setIsModalOpen(true);
    }

    const Logout = () => {
        history.push(`/`)
    }

    useEffect( () => {
        async function ListUsers() {
            let users = await Api.get('/read')
            setUsers(users.data)
            console.log(users)
        }

        ListUsers()
    }, [])

    return (
        <div className="dash-main">
            <Square />
            <Link to="/signUp">
                <div className="addUser">
                    <img src={AddIcon} width="35px" alt="add"/>
                </div>
            </Link>
            {users !== [] ? (
                <div className="users-list">
                    {users.map(user => (
                        <div className="list-users" key={user.id}>
                            <div className="left">
                                <p className="name">{user.nome} {user.snome}</p>
                                <p className="email">{user.email}</p>
                            </div>
                            <div className="right">
                                <Link to={`/signup?id=${user.id}`}>
                                    <img src={updateIcon} alt="del" width="40px"/>
                                </Link>
                                <img src={delIcon} alt="del" width="40px" onClick={LoadModal}/>
                                { isModalOpen && <Modal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} modalText={modalText} id={user.id}/> }
                            </div>
                        </div>
                    ))}
                </div>
           ) : (
                <div className="no-Users" >Sem usuarios</div>
            )}
            
            <button className="btn btn-danger" onClick={Logout}>SAIR DO SISTEMA</button>
        </div>
    )
    
}