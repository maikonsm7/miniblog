import styles from './Dashboard.module.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../context/AuthContext'
import { useInsertDocument } from '../hooks/useInsertDocument'
const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [body, setBody] = useState('')
    const [tags, setTags] = useState([])
    const [formError, setFormError] = useState('')
    const { user } = useAuthValue()

    const {insertDocument, loading, error} = useInsertDocument('posts')

    useEffect(()=>{
        if(error){
            setFormError(error)
        }
    }, [error])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormError('')
        // validate image URL
        // create tags array
        // check all values

        insertDocument({
            title,
            image,
            body,
            tags,
            uid: user.uid,
            createdBy: user.displayName
        })
    }
    return(
        <div className={styles}>
            <h3>Novo Post</h3>
            <form onSubmit={handleSubmit}>
            <label>
                <span>Titulo</span>
                <input type="text" name="title" placeholder="crie um titulo" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            </label>
            <label>
                <span>URL da imagem</span>
                <input type="text" name="image" placeholder="adicione a URL da imagem" value={image} onChange={(e) => setImage(e.target.value)} required/>
            </label>
            <label>
                <span>Conteúdo</span>
                <input type="text" name="body" placeholder="insira o conteúdo do post" value={body} onChange={(e) => setBody(e.target.value)} required/>
            </label>
            <label>
                <span>Tags</span>
                <input type="text" name="tags" placeholder="insira as tags separadas por vírgula" value={tags} onChange={(e) => setTags(e.target.value)} required/>
            </label>
            {}
            {!loading && <button className='btn'>Postar</button>}
            {loading && <button className='btn' disabled>Aguarde...</button>}
            {formError && <p className='error'>{formError}</p>}
            </form>
        </div>
    )
}

export default CreatePost