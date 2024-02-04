import styles from './Dashboard.module.css'
import { Link } from 'react-router-dom'
import {useAuthValue} from '../context/AuthContext'
import {useFetchDocuments} from '../hooks/useFetchDocuments'
import {useDeleteDocument} from '../hooks/useDeleteDocument'
const Dashboard = () => {
    const {user} = useAuthValue()
    const uid = user.uid
    const {documents: posts, loading} = useFetchDocuments('posts', null, uid)
    const {deleteDocument} = useDeleteDocument('posts')

    return(
        <div>
            <h3>Dashboard</h3>
            <p>Gerencie seus posts</p>
            {posts && posts.length === 0 ? (
                <dir className={styles.noposts}>
                    <p>Nao foram encontrados posts</p>
                    <Link to="/posts/create" className='btn'>Criar primeiro post</Link>
                </dir>
            ):(
                <>
                <div>
                    <span>Titulo</span>
                    <span>Acoes</span>
                </div>
                {posts && posts.map(post =>
                <div key={post.id}>
                    <p>{post.title}</p>
                    <div>
                        <Link to={`/posts/${post.id}`} className='btn btn-outline'>Ver</Link> 
                        <Link to={`/posts/edit/${post.id}`} className='btn btn-outline'>Editar</Link>
                        <button onClick={() => deleteDocument(post.id)} className='btn btn-outline btn-danger'>Excuir</button>
                    </div>
                </div>)}
                </>
            )}
            {loading && <p>Carregando...</p>}
        </div>
    )
}

export default Dashboard