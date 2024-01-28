// pegar parametro da URL designado no App.js nas rotas
import { useParams } from "react-router-dom"
import style from './Post.module.css'
import { useFetchDocument } from "../hooks/useFetchDocument"

const Post = () => {
    const {id} = useParams()
    const {document: post, loading} = useFetchDocument('posts', id)

    return(
        <div className={style.post_container}>
            {loading && (
                <p>carregando...</p>
            )}
            {post && (
                <>
                <h3>{post.title}</h3>
                <img src={post.image} alt={post.title} />
                <p>{post.body}</p>
                <h4>Este post trata sobre:</h4>
                <div className={style.tags}>
                {post.tagsArray.map(tag => (
                    <p key={tag}><span>#</span>{tag}</p>
                    ))}
            </div>
                </>
            )}
        </div>
    )
}

export default Post