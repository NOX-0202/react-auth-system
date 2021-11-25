import React from 'react';
import Del from '../../assets/confirmDel.png'
import Api from "../../services/api"
import './Modal.css'

const Modal = ({ isOpen, setIsModalOpen ,modalText, id }) => {

    const DeleteUser = id => {
        const response = Api.post(`/delete/${id}`)
        console.log(response.data)
        window.location.reload();
        
    }

    return isOpen && (
        <div className="modal"> 
            <div>
                <img src={Del} width="60" alt="confirm" />
                <p> {modalText} </p>
                <div className="btn-box">
                    <button className="btn btn-submit" onClick={() => setIsModalOpen(false)}> CANCELAR </button>
                    <button className="btn btn-danger-modal" onClick={() => DeleteUser(id)}> DELETAR </button>
                </div>
            </div>
        </div>
    );
};
export default Modal;