import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthValue } from '../context/AuthContext'
import { useFetchDocument } from '../hooks/useFetchDocument'
import {useUpdateDocument} from '../hooks/useUpdateDocument'
const EditPost = () => {
    const {id} = useParams()
    const {document: post} = useFetchDocument('posts', id)
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [body, setBody] = useState('')
    const [tags, setTags] = useState([])
    const [formError, setFormError] = useState('')
    const { user } = useAuthValue()
    const navigate = useNavigate()

    const {updateDocument, loading, error} = useUpdateDocument('posts')

    useEffect(()=>{
        if(error){
            setFormError(error)
        }
    }, [error])

    useEffect(()=>{
        if(post){
            setTitle(post.title)
            setBody(post.body)
            setImage(post.image)
            const textTags = post.tagsArray.join(', ')
            setTags(textTags)
        }
    }, [post])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormError('')
        // validate image URL
        try {
            new URL(image)
        } catch (error) {
            setFormError('A imagem precisa ser uma URL')
        }
        // create tags array
        const tagsArray = tags.split(',').map(tag => tag.trim().toLowerCase()) // trim() - remove blank spaces
        // check all values
        if(!title || !image || !body || !tags){
            setFormError('Preencha todos os campos!')
        }

        if(formError){
            return
        }

        const data = {
            title,
            image,
            body,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName
        }

        updateDocument(id, data)

        // redirect from home
        navigate('/dashboard')
    }
    return(
        <div>
            {post && <> 
            <h3>Editar Post: {post.title}</h3>
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
                <p>Preview da imagem atual:</p>
                <img src={post.image} alt={post.title} />
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
            {!loading && <button>Editar</button>}
            {loading && <button disabled>Aguarde...</button>}
            {formError && <p>{formError}</p>}
            </form>
            </>}
        </div>
    )
}

export default EditPost