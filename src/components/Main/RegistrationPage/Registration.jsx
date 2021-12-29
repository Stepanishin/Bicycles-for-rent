import React, { useState } from 'react';
import './Registration.css'

const Registration = () => { 

    const [registrationData, setregistrationData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        clientId: ''
    });

    const handleChange = (e) => {
        const fieldName = e.target.name
        setregistrationData({...registrationData, [fieldName]: e.target.value})
    }

    const signUp = (e) => {
        e.preventDefault()

        console.log(registrationData)

        const options = {
            method: 'POST',
            body: JSON.stringify(registrationData),
            header: {
                'Content-type': 'application/json;charset=utf-8'
            }
        }

        console.log(options)
        

        fetch('https://sf-final-project.herokuapp.com/api/auth/sign_up', options)
        .then(response => response.json())
        .then(json => console.log(json))


    }

    
   

    return (
        <form className='Registration' onSubmit={signUp}>
            <h1 className='Registration-title'>REGISTRATION</h1>
            <input required type="email" name="email" id="email" placeholder='Enter email' onChange={handleChange} value={registrationData.email} />
            <input type="text" name="firstName" id="firstName" placeholder='Enter firstName' onChange={handleChange} value={registrationData.firstName} />
            <input type="text" name="lastName" id="lastName" placeholder='Enter lastName' onChange={handleChange} value={registrationData.lastName} />
            <input required type="password" name="password" id="password" placeholder='Enter password' onChange={handleChange} value={registrationData.password} />
            <input required type="text" name="clientId" id="clientId" placeholder='Enter clientId' onChange={handleChange} value={registrationData.clientId} />
            <input type="submit" value="Register" />
        </form>
    );
};

export default Registration;