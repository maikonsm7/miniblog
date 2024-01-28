// pegar parametro da URL designado no App.js nas rotas
import { useParams } from "react-router-dom"
import style from './Post.module.css'

const Post = () => {
    const {id} = useParams()

    return(
        <div>
            <h3>Post</h3>
            <p>{id}</p>
        </div>
    )
}

export default Post