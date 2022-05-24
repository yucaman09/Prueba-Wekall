import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className='containerPrincipal'>
                <div className='containerSecundario'>
                    <div className='form-group'>
                        <label>Usuario: </label>
                        <br />
                        <input type="text" className='form-control' />
                        <br />
                        <label>Contraseña: </label>
                        <br />
                        <input type="password" className='form-control' />
                        <br />
                        <button className='btn btn-primary'>Iniciar Sesion</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;