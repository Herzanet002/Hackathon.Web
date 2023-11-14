import React, {useState} from 'react'
import { Route } from 'react-router-dom'

const Authpage = () => {
    
    const [regForm, setRegForm] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    })

    const changeRegHandler = (event) => {
        setRegForm({...regForm, [event.target.name]:event.target.value})
    }

    const registerHandler = async () => {
        
    }

    return (
        <React.Fragment>
                    <div className="container">
                        <div className="auth-page">
                            <Route path="/registration">
                                <h3>Регистрация</h3>
                                <form className='form form-login' onSubmit={e => e.preventDefault()}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input 
                                                    type="text" 
                                                    name="firstName"
                                                    className='validate valid'
                                                    onChange={changeRegHandler}
                                                />
                                                <label htmlFor="name">Имя</label>
                                            </div>

                                            <div className="input-field col s12">
                                                <input 
                                                    type="text" 
                                                    name="lastName"
                                                    className='validate'
                                                    onChange={changeRegHandler}
                                                />
                                                <label htmlFor="surname">Фамилия</label>
                                            </div>
                                            
                                            <div className="input-field col s12">
                                                <input 
                                                    type="email" 
                                                    name="email"
                                                    className='validate'
                                                    onChange={changeRegHandler}
                                                />
                                                <label htmlFor="email">Почта</label>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <button
                                            className='wawes-effect wawes-light btn blue'
                                            onClick={registerHandler}>
                                                Зарегистрироваться
                                            </button>
                                        </div>
                                </form>
                            </Route>
                        </div>
                    </div>
                </React.Fragment>
    );
}
export default Authpage;