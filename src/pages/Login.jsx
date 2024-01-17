import { useAuthentication } from '../hooks/useAuthentication'
import { useState, useEffect } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')

    const {loginUser, error: authError, loading} = useAuthentication()

    useEffect(()=>{
        if(authError){
            setError(authError)
        }
    }, [authError])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = {
            email,
            pass
        }

        const res = await loginUser(user)
        console.log(res)
    }
    return(
        <div>
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Email</span>
                    <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Digite seu email' required/>
                </label>
                <label>
                    <span>Senha</span>
                    <input type="password" name="pass" value={pass} onChange={e => setPass(e.target.value)} placeholder='Digite sua senha' required/>
                </label>
                {!loading && <button className='btn'>Entrar</button>}
                {loading && <button className='btn' disabled>Aguarde...</button>}
                {error && <p className='error'>{error}</p>}
            </form>
        </div>
    )
}

export default Login