import { useAuthentication } from '../hooks/useAuthentication'
import { useState, useEffect } from 'react'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [passConfirm, setPassConfirm] = useState('')
    const [error, setError] = useState('')

    const {createUser, error: authError, loading} = useAuthentication()

    useEffect(()=>{
        if(authError){
            setError(authError)
        }
    }, [authError])

    const handleSubmit = async (e) => {
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

        const res = await createUser(user)
        console.log(res)
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
                {!loading && <button className='btn'>Cadastrar</button>}
                {loading && <button className='btn' disabled>Aguarde...</button>}
                {error && <p className='error'>{error}</p>}
            </form>
        </div>
    )
}

export default Register