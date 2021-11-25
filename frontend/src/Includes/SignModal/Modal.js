import React from 'react';
import { Link } from 'react-router-dom';
import confirm from '../../assets/confirm.png'
import './Modal.css'

const Modal = ({ isOpen, setIsModalOpen ,modalText }) => {

    return isOpen && (
        <div className="modal"> 
            <div>
                <img src={confirm} width="60" alt="confirm" />
                <p> {modalText} </p>
                <Link to="/dash">
                    <button className="btn btn-submit" onClick={() => setIsModalOpen(false)}> Ok </button>
                </Link>
            </div>
        </div>
    );
};
export default Modal;