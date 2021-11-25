import React from 'react';

const Input = ({ type, value, name, placeholder, onChange }) => {
    return type !== 'textarea' ? (
        <input 
            type={type} 
            value={value}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
        /> 
    ) : (
        <textarea  
            rows="10" 
            cols="70"
            value={value}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}

export default Input;