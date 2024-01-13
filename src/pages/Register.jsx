import styles from './Register.module.css'
import { useState, useEffect } from 'react'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [passConfirm, setPassConfirm] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            name,
            email,
            pass
        }

        if(pass !== passConfirm){
            setError('As senhas precisam ser iguais!')
            return
        }else{
            setError('')
        }

        console.log(user)
    }
    return(
        <div>
            <h3>Cadastrar-se</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome</span>
                    <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} placeholder='Digite seu Nome' required/>
                </label>
                <label>
                    <span>Email</span>
                    <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Digite seu email' required/>
                </label>
                <label>
                    <span>Senha</span>
                    <input type="password" name="pass" value={pass} onChange={e => setPass(e.target.value)} placeholder='Digite sua senha' required/>
                </label>
                <label>
                    <span>Confirmar senha</span>
                    <input type="password" name="passConfirm" value={passConfirm} onChange={e => setPassConfirm(e.target.value)} placeholder='Confirme sua senha' required/>
                </label>
                <button className='btn'>Cadastrar</button>
                {error && <p className='error'>{error}</p>}
            </form>
        </div>
    )
}

export default Register